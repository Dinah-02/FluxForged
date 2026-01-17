"use client"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Shield, Key, Users, Lock } from "lucide-react";

const securityFeatures = [
  {
    icon: Key,
    title: "OAuth Login",
    description: "Secure authentication via Keycloak with SSO support for enterprise teams.",
  },
  {
    icon: Shield,
    title: "Token-Based Auth",
    description: "JWT tokens with configurable expiration and refresh policies.",
  },
  {
    icon: Users,
    title: "Tenant Isolation",
    description: "Complete namespace and resource isolation between tenants.",
  },
  {
    icon: Lock,
    title: "Secrets Encryption",
    description: "AES-256 encryption for all secrets at rest and in transit.",
  },
];

const SecurityTrust = () => {
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
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="security" style={{ backgroundColor: '#0D1117' }} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10">
        
        {/* Section Header - Left Aligned */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ color: '#E6EDF3' }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Security & Trust
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ color: '#9CA3AF' }}
            className="text-lg max-w-2xl font-light"
          >
            Enterprise-grade security built into every layer. Your code and secrets are protected.
          </motion.p>
        </div>

        {/* Feature Cards with Static Blue Outlines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={silkVariants}
              style={{ 
                backgroundColor: '#1F2937', 
                borderColor: '#2F81F74D' // Static thin blue outline
              }}
              className="p-8 rounded-2xl border-2 transition-all duration-300 group shadow-2xl"
            >
              <div 
                style={{ backgroundColor: '#161B22', borderColor: '#30363D' }}
                className="w-12 h-12 flex items-center justify-center rounded-xl border mb-6 text-[#2F81F7] group-hover:border-[#2F81F7]/50 transition-colors"
              >
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 style={{ color: '#E6EDF3' }} className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p style={{ color: '#9CA3AF' }} className="text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators - Aligned with GitHub Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div 
            style={{ backgroundColor: '#161B22', borderColor: '#30363D' }}
            className="inline-flex flex-wrap justify-center items-center gap-8 px-10 py-6 rounded-2xl border shadow-xl"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2F81F7]">SOC 2</div>
              <div className="text-xs text-[#6B7280] font-mono uppercase tracking-widest mt-1">Compliant</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#30363D]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2F81F7]">GDPR</div>
              <div className="text-xs text-[#6B7280] font-mono uppercase tracking-widest mt-1">Ready</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#30363D]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2F81F7]">99.9%</div>
              <div className="text-xs text-[#6B7280] font-mono uppercase tracking-widest mt-1">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityTrust;