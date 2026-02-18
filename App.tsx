
import React from 'react';
import Navbar from './components/Navbar';
import AstridAssistant from './components/AstridAssistant';
import { SERVICES, BENEFITS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen gradient-bg selection:bg-blue-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold animate-pulse">
              <span>NEW:</span>
              <span>Gemini-Powered Voice Agents Now Live</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Scale Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">AI-Powered</span> Communication.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Astrid Scale automates your front office. From human-like voice receptionists to proactive lead generation, we help you close more deals without hiring more staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                Book a Free Demo
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                View Our Solutions
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">Trusted by 200+ fast-growing companies</p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative glass rounded-3xl p-4 shadow-2xl border border-white/50">
              <img 
                src="https://picsum.photos/seed/techdash/800/600" 
                className="rounded-2xl shadow-inner object-cover" 
                alt="AI Dashboard Visualization"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900">Communication Engineered for Growth</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">Focus on your product while our AI suite handles the conversations that drive your revenue.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all border border-slate-100">
                <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{s.description}</p>
                <a href="#contact" className="text-blue-600 font-semibold inline-flex items-center group-hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-slate-900">Why Choose Astrid Scale?</h3>
                <p className="text-slate-600">We don't just build chatbots; we build revenue-generating assets for your business infrastructure.</p>
              </div>
              <div className="space-y-8">
                {BENEFITS.map((b, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h4>
                      <p className="text-slate-600">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/office1/400/500" className="rounded-2xl shadow-lg" alt="Office 1" />
                <div className="bg-blue-600 p-8 rounded-2xl text-white">
                  <p className="text-3xl font-bold mb-2">99.9%</p>
                  <p className="text-sm opacity-80">Response Uptime</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-slate-900 p-8 rounded-2xl text-white">
                  <p className="text-3xl font-bold mb-2">10x</p>
                  <p className="text-sm opacity-80">ROI Efficiency</p>
                </div>
                <img src="https://picsum.photos/seed/office2/400/500" className="rounded-2xl shadow-lg" alt="Office 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Ready to Scale Your Team?</h2>
              <p className="text-slate-400 text-lg">Leave your details and we'll show you exactly how our AI can handle your volume.</p>
            </div>
            
            <form className="glass p-8 lg:p-12 rounded-3xl grid md:grid-cols-2 gap-8 text-slate-900">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Company Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Service of Interest</label>
                  <select className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option>AI Voice Receptionist</option>
                    <option>Lead Generation</option>
                    <option>AI Text Messaging</option>
                    <option>Full Communication Suite</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-semibold mb-2 text-slate-700">How can we help?</label>
                <textarea rows={5} placeholder="Tell us about your current communication bottlenecks..." className="w-full flex-1 px-5 py-4 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
                <button type="submit" className="mt-6 w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.02]">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Astrid<span className="text-blue-600">Scale</span></span>
          </div>
          
          <div className="flex space-x-8 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-slate-100 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Astrid Scale Inc. All rights reserved. Built with AI Intelligence.
        </div>
      </footer>

      <AstridAssistant />
    </div>
  );
};

export default App;
