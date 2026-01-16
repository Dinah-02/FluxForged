import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'py-3 bg-[#161B22]/65 backdrop-blur-md border-white/5 shadow-2xl shadow-black/40' 
          : 'py-5 bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* 1. Brand - Using Titanium Gray Accent */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-[#94A3B8] rounded-lg flex items-center justify-center text-[#0B0F14] font-bold shadow-lg shadow-white/5 group-hover:bg-[#CBD5E1] transition-all duration-300">
            CF
          </div>
          <span className="text-xl font-bold text-[#E5E7EB] tracking-tight">
            CloudFlow
          </span>
        </div>

        {/* 2. Navigation Links - Clean Fade Interaction */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Architecture', 'Demo', 'Docs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#9CA3AF] hover:text-[#F3F4F6] transition-all duration-300 relative group/link"
            >
              {item}
              {/* Titanium Underline Reveal */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#94A3B8] transition-all duration-500 group-hover/link:w-full opacity-40"></span>
            </a>
          ))}
        </div>

        {/* 3. Actions - Matching Hero Button Style */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-sm font-medium text-[#9CA3AF] hover:text-[#E5E7EB] transition-all">
            Sign In
          </button>
          
          <button 
            className="px-5 py-2.5 bg-[#94A3B8] hover:bg-[#CBD5E1] text-[#0B0F14] rounded-lg text-sm font-bold transition-all duration-300 shadow-lg shadow-white/5 transform hover:-translate-y-0.5 active:scale-95"
          >
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;