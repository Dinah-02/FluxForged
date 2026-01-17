"use client"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Synchronized with Hero: Wait for the initial title glide to begin
    const timer = setTimeout(() => setMounted(true), 800);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // THE REFINED GLIDE: Matches the "Sign In" button's upward silk motion
  const refinedSilkGlide = {
    hidden: { 
      opacity: 0, 
      y: 25, 
      filter: "blur(8px)" 
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2.2, // Silk-smooth duration
        ease: [0.16, 1, 0.3, 1],
        delay: delay
      }
    })
  };

  return (
    <nav 
      style={{ 
        backgroundColor: isScrolled ? '#0D1117' : 'transparent',
        borderColor: isScrolled ? '#30363D' : 'transparent'
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? 'py-3 backdrop-blur-md shadow-2xl' : 'py-6'
      }`}
    >
      {/* 🔵 THE "LIGHTNING" BACKGROUND GLOW */}
      <motion.div 
        animate={{ 
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1.2 : 0.8 
        }}
        transition={{ duration: 0.8 }}
        style={{ backgroundColor: '#2F81F7' }}
        className="absolute right-10 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0" 
      />

      <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10 flex items-center justify-between">
        
        {/* 1. Brand Logo - Glides up from 25px */}
        <motion.div 
          variants={refinedSilkGlide}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          custom={0.1}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div 
            style={{ backgroundColor: '#1F2937', border: '1px solid #30363D' }}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#E6EDF3] font-bold transition-all duration-300 group-hover:border-[#2F81F7]"
          >
            CF
          </div>
          <span style={{ color: '#E6EDF3' }} className="text-xl font-bold tracking-tight font-sans">
            CloudFlow
          </span>
        </motion.div>

        {/* 2. Navigation Links - Same upward motion as buttons */}
        <div className="hidden md:flex items-center gap-10">
          {['Features', 'Architecture', 'Demo', 'Docs'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              variants={refinedSilkGlide}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              custom={0.2 + (index * 0.1)} // Tight staggering for professional feel
              style={{ color: '#9CA3AF' }}
              className="text-sm font-medium transition-all duration-300 relative group/link hover:text-white"
            >
              {item}
              <span 
                style={{ backgroundColor: '#2F81F7' }}
                className="absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-500 group-hover/link:w-full"
              ></span>
            </motion.a>
          ))}
        </div>

        {/* 3. Sign In Button - Final upward glide */}
        <motion.div 
          variants={refinedSilkGlide}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          custom={0.7}
          className="flex items-center"
        >
          <motion.button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
              y: -2,
              backgroundColor: '#30363D',
              borderColor: '#2F81F7'
            }}
            whileTap={{ scale: 0.97 }}
            style={{ 
              backgroundColor: '#1F2937', 
              color: '#E6EDF3', 
              border: '1px solid #30363D' 
            }}
            className="px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-xl shadow-black/40 relative z-20"
          >
            Sign In
          </motion.button>
        </motion.div>

      </div>
    </nav>
  );
};

export default Navbar;