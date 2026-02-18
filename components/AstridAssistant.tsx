
import React, { useState, useRef, useEffect } from 'react';
import { getAstridResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AstridAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm Astrid. How can I help you scale your business today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const response = await getAstridResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[55] sm:bottom-8 sm:right-8">
      {isOpen ? (
        <div className="w-[calc(100vw-40px)] sm:w-[380px] h-[550px] max-h-[calc(100vh-100px)] bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-6 duration-500">
          <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black shadow-lg shadow-blue-500/20">A</div>
              <div>
                <h3 className="font-black text-sm tracking-tight">Astrid Assistant</h3>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Online Now</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-medium leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-xl shadow-blue-100' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-4 rounded-3xl border border-slate-100 rounded-tl-none flex space-x-1.5 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 border-t border-slate-100 bg-white">
            <div className="flex space-x-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message Astrid..."
                className="flex-1 text-sm bg-transparent border-none rounded-xl px-4 py-2.5 outline-none font-medium placeholder:text-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-30 disabled:grayscale shadow-lg shadow-blue-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4)] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all group relative"
        >
          <div className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-full font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block pointer-events-none">
            Chat with Astrid
          </div>
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
        </button>
      )}
    </div>
  );
};

export default AstridAssistant;
