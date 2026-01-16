import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ease = [0.25, 1, 0.5, 1]; // extremely natural

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const fadeItem = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2.4,
      ease,
    },
  },
};

const buttonFade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2.0,
      ease,
    },
  },
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B0F14]">

      {/* Background Backlight */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[600px] h-[600px] bg-[#94A3B8] rounded-full blur-[160px] 
        transition-opacity duration-[2500ms] pointer-events-none z-0 
        ${isHovered ? 'opacity-20' : 'opacity-5'}`}
      />

      <motion.div
        className="container mx-auto px-6 relative z-10 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* LINE 1 */}
        <motion.h1
          variants={fadeItem}
          className="text-5xl lg:text-7xl font-bold tracking-tight text-[#E5E7EB] mb-2"
        >
          Cloud-Native CI/CD Platform
        </motion.h1>

        {/* LINE 2 */}
        <motion.h1
          variants={fadeItem}
          className="text-5xl lg:text-7xl font-bold tracking-tight text-[#94A3B8] mb-6"
        >
          for Modern DevOps Teams
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeItem}
          className="max-w-2xl mx-auto text-lg text-[#9CA3AF] mb-10 leading-relaxed"
        >
          Deploy with confidence using Kubernetes-native pipelines. Automated
          builds, real-time logs, and seamless integrations — all powered by
          Tekton and Argo Workflows.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={container}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            variants={buttonFade}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full sm:w-auto px-8 py-4 bg-[#94A3B8] hover:bg-[#CBD5E1]
            text-[#0B0F14] rounded-xl font-bold transition-all duration-300
            shadow-lg shadow-white/5 transform hover:-translate-y-1"
          >
            Get Started Free →
          </motion.button>

          <motion.button
            variants={buttonFade}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold
            text-[#E5E7EB] transition-all duration-300 transform hover:-translate-y-1"
            style={{
              background: 'rgba(22, 27, 34, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.45)',
            }}
          >
            View Architecture
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
