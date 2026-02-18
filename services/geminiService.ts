
import { GoogleGenAI } from "@google/genai";

// Use the API key directly from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are Astrid, the official AI sales representative for "Astrid Scale". 
Your tone is professional, innovative, and helpful. 
Astrid Scale provides three main services:
1. AI Voice Receptionist: 24/7 human-like voice agents for bookings and FAQs.
2. Smart Lead Generation: Data-driven outreach and calendar filling.
3. AI Text Messaging: Instant SMS automation to convert leads.

Your goal is to explain these benefits and encourage the user to book a demo or use the contact form. 
Keep responses concise (max 3 sentences). 
If asked about pricing, say it's customized based on volume and to reach out via the form for a quote.
`;

export const getAstridResponse = async (userMessage: string, history: { role: string, parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        // Removed maxOutputTokens to prevent potential blocking without explicit thinkingBudget configuration
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. How else can I help you with Astrid Scale?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently optimizing my circuits. Please use our contact form below or try again in a moment!";
  }
};
