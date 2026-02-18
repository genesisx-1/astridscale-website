
import React from 'react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'voice',
    title: 'AI Voice Receptionist',
    slug: 'voice-receptionist',
    description: 'A 24/7 intelligent voice agent that handles bookings, answers FAQs, and qualifies leads with human-like natural language.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
      </svg>
    )
  },
  {
    id: 'leads',
    title: 'Smart Lead Generation',
    slug: 'lead-generation',
    description: 'Scale your outreach with data-driven lead mining and automated warm-up sequences that fill your calendar.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    )
  },
  {
    id: 'text',
    title: 'AI Text Messaging',
    slug: 'text-messaging',
    description: 'Convert web traffic instantly with SMS automation that responds to inquiries in under 30 seconds.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
      </svg>
    )
  }
];

export const BENEFITS = [
  {
    title: 'Zero Missed Opportunities',
    description: 'AI agents never take lunch breaks or sleep. Every caller and texter gets an immediate, professional response.'
  },
  {
    title: 'Drastic Cost Reduction',
    description: 'Replace expensive call centers with a scalable AI infrastructure that costs a fraction of a human salary.'
  },
  {
    title: 'Elite Data Analytics',
    description: 'Get deep insights into every customer interaction with automatic sentiment analysis and CRM integration.'
  }
];
