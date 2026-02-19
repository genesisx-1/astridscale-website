
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AstridAssistant from './components/AstridAssistant';
import { SERVICES, BENEFITS, CALENDLY_URL, PORTFOLIO_SITES } from './constants';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Scale Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">AI-Powered</span> Communication.
            </h1>
            <p className="text-base sm:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
              Astrid Scale automates your front office. From human-like voice receptionists to proactive lead generation, we help you close more deals without hiring more staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4.5 bg-blue-600 text-white rounded-2xl font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-center text-sm uppercase tracking-widest">
                Book a Free Demo
              </a>
              <a href="#services" className="px-8 py-4.5 bg-white text-slate-700 border border-slate-200 rounded-2xl font-black hover:bg-slate-50 transition-all text-center text-sm uppercase tracking-widest">
                Our Solutions
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative mt-8 lg:mt-0">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-[100px] opacity-10"></div>
            <div className="relative glass rounded-[2rem] p-3 sm:p-5 shadow-2xl border border-white/60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                className="rounded-[1.5rem] shadow-inner object-cover w-full h-[250px] sm:h-[400px]" 
                alt="AI Dashboard Visualization"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-20">
            <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs">Our Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Communication Engineered for Growth</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-10">
            {SERVICES.map((s) => (
              <div key={s.id} className="group p-8 sm:p-10 rounded-[2.5rem] bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all border border-slate-100 hover:border-blue-100">
                <div className="text-4xl mb-8 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium text-sm sm:text-base">{s.description}</p>
                <button onClick={() => setCurrentPage(s.slug)} className="text-blue-600 font-black text-xs uppercase tracking-widest inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Explore {s.title}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderServicePage = (slug: Page) => {
    const service = SERVICES.find(s => s.slug === slug);
    if (!service) return renderHome();

    const pageContent = {
      'voice-receptionist': {
        title: "AI Voice Receptionist",
        hero: "Never miss a call. Never miss a customer.",
        image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
        features: [
          { t: "Human-Like Voice", d: "Powered by Gemini 3 Native Audio for zero-lag, expressive speech." },
          { t: "Auto-Scheduling", d: "Integrates with Calendly to book meetings directly into your calendar." },
          { t: "Multi-Language", d: "Instantly switch between 40+ languages to serve global audiences." }
        ]
      },
      'lead-generation': {
        title: "Smart Lead Generation",
        hero: "Predictive outreach that fills your pipeline.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        features: [
          { t: "Automated Data Mining", d: "Discover high-intent leads using AI-driven industry analysis." },
          { t: "Warm-Up Sequences", d: "Customized sequences across LinkedIn and Email that sound personal." },
          { t: "Lead Qualification", d: "Our AI vets every response, ensuring you only talk to buyers." }
        ]
      },
      'text-messaging': {
        title: "AI Text Messaging",
        hero: "Engagement in the palm of their hand.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop",
        features: [
          { t: "30-Sec Response", d: "AI responds to text inquiries instantly, boosting conversion by 400%." },
          { t: "Missed-Call Text", d: "Automatically text callers when you're busy, keeping the lead warm." },
          { t: "SMS Automation", d: "Scale campaigns while maintaining a 1-to-1 conversational feel." }
        ]
      }
    }[slug as keyof typeof pageContent];

    if (!pageContent) return renderHome();

    return (
      <div className="pt-24 sm:pt-32 pb-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-7xl mx-auto">
          <button onClick={() => setCurrentPage('home')} className="mb-8 text-blue-600 flex items-center font-black text-xs uppercase tracking-widest hover:translate-x-[-4px] transition-transform">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </button>
          
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">{pageContent.title}</h1>
              <p className="text-xl sm:text-2xl text-blue-600 font-black tracking-tight leading-tight">{pageContent.hero}</p>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium">
                Elevate your business communication with our {pageContent.title.toLowerCase()}. We combine cutting-edge large language models with enterprise reliability.
              </p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto px-8 py-4.5 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all text-sm uppercase tracking-widest text-center">
                Get Started
              </a>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white order-1 lg:order-2">
              <img src={pageContent.image} className="w-full h-[300px] sm:h-[450px] object-cover" alt={service.title} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {pageContent.features.map((f, i) => (
              <div key={i} className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-black mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">0{i + 1}</div>
                <h4 className="text-xl font-black mb-4 tracking-tight">{f.t}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderPortfolio = () => (
    <div className="pt-24 sm:pt-32 pb-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => setCurrentPage('home')} className="mb-8 text-blue-600 flex items-center font-black text-xs uppercase tracking-widest hover:translate-x-[-4px] transition-transform">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Home
        </button>
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">Software & Web Development</h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">Custom software and websites we’ve built for clients. Click any project to open it in a new tab.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PORTFOLIO_SITES.map((site) => (
            <a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-100 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <svg className="w-12 h-12 text-slate-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{site.name}</h3>
                <p className="text-sm text-slate-400 font-medium truncate">{new URL(site.url).hostname}</p>
                <span className="inline-flex items-center mt-3 text-blue-600 font-bold text-xs uppercase tracking-widest">
                  Open site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4.5 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all text-sm uppercase tracking-widest">
            Get Started — Book a Call
          </a>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="pt-24 sm:pt-32 pb-20 px-6 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-20">
        <div className="space-y-10 sm:space-y-16">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Get in Touch</h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-medium">
              Ready to transform your communication? Our experts are standing by to help you design the perfect AI infrastructure.
            </p>
          </div>
          
          <div className="space-y-10">
            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-100 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Email Us</p>
                <a href="mailto:team@astridscale.com" className="text-xl sm:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors">team@astridscale.com</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Call Our Office</p>
                <a href="tel:2144224939" className="text-xl sm:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors">214-422-4939</a>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
            <h4 className="text-lg font-black mb-3 tracking-tight">Office Locations</h4>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">Headquartered in Dallas, TX. Serving clients globally with decentralized AI nodes for low-latency performance.</p>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full"></div>
          <form className="relative bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl space-y-6 border border-slate-100">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="jane@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message</label>
              <textarea rows={5} className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600 resize-none transition-all font-medium" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-sm uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen gradient-bg selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      
      <main className="relative z-10">
        {currentPage === 'home' && renderHome()}
        {['voice-receptionist', 'lead-generation', 'text-messaging'].includes(currentPage) && renderServicePage(currentPage)}
        {currentPage === 'software-and-web' && renderPortfolio()}
        {currentPage === 'contact' && renderContact()}
      </main>

      {/* Footer */}
      <footer className="py-16 sm:py-20 bg-white border-t border-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 sm:gap-16">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-100">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Astrid<span className="text-blue-600">Scale</span></span>
            </div>
            <p className="text-slate-400 font-medium max-w-sm text-sm leading-relaxed">The leading platform for AI-driven business communications and lead generation. We build the future of voice interactions for enterprise scale.</p>
            <div className="space-y-3">
              <p className="text-sm font-black text-slate-900 tracking-tight">team@astridscale.com</p>
              <p className="text-sm font-black text-slate-900 tracking-tight">214-422-4939</p>
            </div>
          </div>
          
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">Solutions</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><button onClick={() => setCurrentPage('voice-receptionist')} className="hover:text-blue-600 transition-colors">Voice Receptionist</button></li>
              <li><button onClick={() => setCurrentPage('lead-generation')} className="hover:text-blue-600 transition-colors">Lead Generation</button></li>
              <li><button onClick={() => setCurrentPage('text-messaging')} className="hover:text-blue-600 transition-colors">Text Messaging</button></li>
              <li><button onClick={() => setCurrentPage('software-and-web')} className="hover:text-blue-600 transition-colors">Software Development</button></li>
              <li><button onClick={() => setCurrentPage('software-and-web')} className="hover:text-blue-600 transition-colors">Websites</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">Resources</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-blue-600 transition-colors">Contact Us</button></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-slate-50 text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
          © {new Date().getFullYear()} Astrid Scale Inc. • Engineering Growth Through Intelligence
        </div>
      </footer>

      <AstridAssistant />
    </div>
  );
};

export default App;
