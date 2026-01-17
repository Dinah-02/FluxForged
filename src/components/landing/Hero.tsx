"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Ensures the browser is ready to capture the ultra-slow silk glide
    const timer = setTimeout(() => setMounted(true), 150)
    return () => clearTimeout(timer)
  }, [])

  // THE SILK FORMULA: 
  // 2.5s duration for a heavy feel, 150px downside start for travel distance.
  const silkVariants = {
    hidden: { 
      opacity: 0, 
      y: 150, 
      filter: "blur(15px)" 
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2.5,           
        ease: [0.16, 1, 0.3, 1], 
        delay: delay
      },
    })
  }

  return (
    <section 
      style={{ backgroundColor: '#0D1117' }} 
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-start"
    >
      {/* 🔵 INTERACTIVE BACKGROUND GLOW */}
      {/* Intensifies from 0.1 to 0.2 opacity on button hover */}
      <motion.div 
        animate={{ 
          opacity: isHovered ? 0.2 : 0.1,
          scale: isHovered ? 1.1 : 1 
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ backgroundColor: '#2F81F7' }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none z-0" 
      />

      {/* Professional Grid Overlay (#30363D) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: `linear-gradient(#30363D 1px, transparent 1px), linear-gradient(90deg, #30363D 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }}
      />

      <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10">
        
        {/* WAVE 1: THE FIRST LINE - Primary Text #E6EDF3 */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            custom={0.2}
            variants={silkVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            style={{ color: '#E6EDF3' }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            Cloud-Native CI/CD Platform
          </motion.h1>
        </div>

        {/* WAVE 2: THE SECOND LINE - Muted Title #9CA3AF */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            custom={0.8}
            variants={silkVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            style={{ color: '#9CA3AF' }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            for Modern DevOps Teams
          </motion.h1>
        </div>

        {/* WAVE 3: THE DESCRIPTION - Muted Text #6B7280 */}
        <div className="overflow-hidden mb-12 max-w-xl text-left">
          <motion.p
            custom={1.4}
            variants={silkVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            style={{ color: '#6B7280' }}
            className="text-lg md:text-xl leading-relaxed font-light"
          >
            Automate your infrastructure with Kubernetes-native pipelines. 
            Deploy with confidence using real-time logs and seamless integrations.
          </motion.p>
        </div>

        {/* WAVE 4: THE INTERACTIVE BUTTON */}
        {mounted && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.2 }}
          >
            <motion.button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ 
                y: -4, 
                backgroundColor: '#30363D',
                borderColor: '#2F81F7' // Subtle blue border on hover
              }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                backgroundColor: '#1F2937', 
                color: '#E6EDF3', 
                border: '1px solid #30363D' 
              }}
              className="px-10 py-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-2xl shadow-black/50"
            >
              Get Started →
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}