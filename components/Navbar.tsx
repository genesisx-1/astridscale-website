
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xl">A</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Astrid<span className="text-blue-600">Scale</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors">Benefits</a>
          <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all transform hover:scale-105">Get Started</a>
        </div>

        <button className="md:hidden text-slate-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
