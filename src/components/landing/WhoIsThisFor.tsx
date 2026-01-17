"use client"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Code2, Server, Layers, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Code2,
    title: "Backend Engineers",
    description: "Build and deploy microservices with confidence. Automated testing, containerization, and deployment workflows.",
  },
  {
    icon: Server,
    title: "DevOps Engineers",
    description: "Infrastructure as code, GitOps workflows, and full observability. Integrate with your existing Kubernetes clusters.",
  },
  {
    icon: Layers,
    title: "Platform Teams",
    description: "Provide self-service CI/CD to your organization. Multi-tenant, secure, and scalable by design.",
  },
  {
    icon: GraduationCap,
    title: "Learners & Architects",
    description: "Open architecture and comprehensive documentation. Perfect for understanding modern CI/CD patterns.",
  },
];

const WhoIsThisFor = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const silkVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="audience" style={{ backgroundColor: '#0D1117' }} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ color: '#E6EDF3' }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Who Is This For?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ color: '#9CA3AF' }}
            className="text-lg max-w-2xl font-light"
          >
            Designed for engineers who value transparency, reliability, and learning.
          </motion.p>
        </div>

        {/* Grid with Static Professional Outlines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, idx) => (
            <motion.div
              key={audience.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={silkVariants}
              style={{ 
                backgroundColor: '#1F2937', 
                borderColor: '#2F81F74D' // Static 30% opacity Blue Outline
              }}
              className="p-8 text-center rounded-2xl border-2 transition-all duration-500 group shadow-2xl"
            >
              {/* Icon Container with Permanent Blue Border */}
              <div 
                style={{ 
                  backgroundColor: '#161B22', 
                  borderColor: '#2F81F780' // Stronger blue for icon border
                }}
                className="w-16 h-16 mx-auto mb-6 rounded-xl border-2 flex items-center justify-center text-[#2F81F7] shadow-[0_0_15px_rgba(47,129,247,0.1)]"
              >
                <audience.icon className="w-8 h-8" />
              </div>
              
              <h3 style={{ color: '#E6EDF3' }} className="text-lg font-semibold mb-3">{audience.title}</h3>
              <p style={{ color: '#9CA3AF' }} className="text-sm leading-relaxed font-light">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;