import React from 'react';
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
  return (
    <section id="security" style={{ backgroundColor: '#0D1117' }} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 style={{ color: '#E6EDF3' }} className="text-3xl sm:text-4xl font-bold mb-4">
            Security & Trust
          </h2>
          <p style={{ color: '#9CA3AF' }} className="text-lg max-w-2xl font-light">
            Enterprise-grade security built into every layer. Your code and secrets are protected.
          </p>
        </div>

        {/* Static Feature Grid with Hover Outlines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              style={{ backgroundColor: '#1F2937' }}
              className="p-8 rounded-2xl border border-[#30363D] transition-all duration-300 group hover:border-[#2F81F7]/60 hover:shadow-[0_0_30px_rgba(47,129,247,0.05)]"
            >
              <div 
                style={{ backgroundColor: '#161B22', borderColor: '#30363D' }}
                className="w-12 h-12 flex items-center justify-center rounded-xl border mb-6 text-[#2F81F7] transition-all duration-300 group-hover:border-[#2F81F7]/50 group-hover:shadow-[0_0_15px_rgba(47,129,247,0.2)]"
              >
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 style={{ color: '#E6EDF3' }} className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p style={{ color: '#9CA3AF' }} className="text-sm leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;