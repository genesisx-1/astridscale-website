
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { SERVICES } from '../constants';

interface NavbarProps {
  onPageChange: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: Page) => {
    onPageChange(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => navigate('home')} className="flex items-center space-x-2 z-[70] group relative">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-blue-200 shadow-lg">
            <span className="text-white font-black text-lg">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Astrid<span className="text-blue-600">Scale</span></span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <button onClick={() => navigate('home')} className={`hover:text-blue-600 transition-colors ${currentPage === 'home' ? 'text-blue-600' : ''}`}>Home</button>
          <div className="relative group">
            <button className={`flex items-center hover:text-blue-600 transition-colors ${['voice-receptionist', 'lead-generation', 'text-messaging'].includes(currentPage) ? 'text-blue-600' : ''}`}>
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-3 translate-y-2 group-hover:translate-y-0 overflow-hidden">
              {SERVICES.map((s) => (
                <button key={s.id} onClick={() => navigate(s.slug)} className="w-full text-left px-5 py-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors flex items-center group/item">
                  <div className="mr-3 p-2 bg-slate-50 rounded-xl group-hover/item:bg-blue-100 transition-colors text-blue-600">
                    {/* Fix: Explicitly cast to ReactElement with optional className to satisfy cloneElement typing */}
                    {React.cloneElement(s.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                  </div>
                  <span className="font-bold text-sm tracking-tight">{s.title}</span>
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => navigate('contact')} className={`hover:text-blue-600 transition-colors ${currentPage === 'contact' ? 'text-blue-600' : ''}`}>Contact</button>
          <button onClick={() => navigate('contact')} className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-md text-xs uppercase tracking-widest font-bold">Get Started</button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-[70] text-slate-900 p-2 relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[65] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none translate-x-4'}`}>
        <div className="h-full pt-24 px-6 pb-12 overflow-y-auto bg-slate-50/30">
          <div className="max-w-md mx-auto space-y-10">
            
            {/* Header section in menu */}
            <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
              <h2 className="text-blue-600 font-extrabold tracking-[0.2em] uppercase text-[10px]">Our Expertise</h2>
              <h3 className="text-2xl font-black text-slate-900 leading-tight">Communication Engineered for Growth</h3>
            </div>

            {/* Detailed Service Links */}
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      {/* Fix: Explicitly cast to ReactElement with optional className to satisfy cloneElement typing */}
                      {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900">{service.title}</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => navigate(service.slug)}
                    className="flex items-center text-blue-600 font-black text-xs uppercase tracking-widest group pt-2"
                  >
                    Explore {service.title}
                    <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Navigation Links */}
            <div className="pt-6 border-t border-slate-200 flex flex-col space-y-5 animate-in fade-in duration-500 delay-300">
              <button 
                onClick={() => navigate('home')} 
                className={`text-xl font-bold text-left px-2 ${currentPage === 'home' ? 'text-blue-600' : 'text-slate-900'}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigate('contact')} 
                className={`text-xl font-bold text-left px-2 ${currentPage === 'contact' ? 'text-blue-600' : 'text-slate-900'}`}
              >
                Contact Us
              </button>
            </div>

            {/* Bottom Contact Widget */}
            <div className="bg-slate-900 p-6 rounded-[2.5rem] text-white space-y-5 shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] text-center">Contact Directly</p>
              <div className="flex flex-col items-center space-y-1">
                <a href="mailto:team@astridscale.com" className="block text-blue-400 font-bold text-base hover:text-blue-300 transition-colors">team@astridscale.com</a>
                <a href="tel:2144224939" className="block text-white font-black text-2xl tracking-tight">214-422-4939</a>
              </div>
              <button 
                onClick={() => navigate('contact')}
                className="w-full py-4.5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-blue-500/30 active:scale-95 transition-all mt-4"
              >
                Book a Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
