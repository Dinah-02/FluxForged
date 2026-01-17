"use client"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  Terminal, 
  Shield, 
  Activity, 
  CreditCard,
  Code,
  Container,
  Lock,
  Users,
  LineChart,
  Clock,
  Wallet,
  TrendingUp
} from "lucide-react";

const featureCategories = [
  {
    title: "CI/CD Engine",
    description: "Powerful, flexible pipeline execution",
    icon: Terminal,
    features: [
      { icon: Code, name: "YAML Pipelines", desc: "Define pipelines as code" },
      { icon: Container, name: "Kubernetes Execution", desc: "Native K8s pod runners" },
    ],
  },
  {
    title: "Security & Multi-Tenancy",
    description: "Enterprise-grade isolation",
    icon: Shield,
    features: [
      { icon: Lock, name: "Keycloak OAuth", desc: "SSO and RBAC built-in" },
      { icon: Users, name: "Tenant Isolation", desc: "Complete workspace separation" },
    ],
  },
  {
    title: "Observability",
    description: "Full visibility into your pipelines",
    icon: Activity,
    features: [
      { icon: LineChart, name: "Real-time Logs", desc: "Stream logs as they happen" },
      { icon: Clock, name: "Execution History", desc: "Complete audit trail" },
    ],
  },
  {
    title: "Usage-Based Billing",
    description: "Pay only for what you use",
    icon: CreditCard,
    features: [
      { icon: Wallet, name: "Transparent Pricing", desc: "No hidden fees" },
      { icon: TrendingUp, name: "Usage Dashboard", desc: "Track costs in real-time" },
    ],
  },
];

const CoreFeatures = () => {
  return (
    <section id="features" className="py-24 relative bg-[#0D1117]">
      <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10">
        
        {/* Section Header - Left Aligned */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#E6EDF3]">
            Core Features
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl font-light">
            Everything you need to build, test, and deploy with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCategories.map((category) => (
            <div 
              key={category.title}
              style={{ backgroundColor: '#1F2937', borderColor: '#30363D' }}
              className="p-8 rounded-2xl border transition-all duration-300 hover:border-[#2F81F7]/50 group"
            >
              {/* Category Header */}
              <div className="flex items-start gap-5 mb-8">
                <div 
                  style={{ backgroundColor: '#161B22', borderColor: '#30363D' }}
                  className="p-3 rounded-xl border text-[#2F81F7] group-hover:scale-110 transition-transform duration-300"
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#E6EDF3]">{category.title}</h3>
                  <p className="text-[#9CA3AF] text-sm">{category.description}</p>
                </div>
              </div>

              {/* Nested Feature Cards */}
              <div className="space-y-4">
                {category.features.map((feature) => (
                  <div 
                    key={feature.name} 
                    style={{ backgroundColor: '#0D1117', borderColor: '#30363D' }}
                    className="flex items-start gap-4 p-5 rounded-xl border transition-colors hover:border-[#2F81F7]/30"
                  >
                    <feature.icon className="w-5 h-5 text-[#2F81F7] mt-1" />
                    <div>
                      <div className="font-medium text-sm text-[#E6EDF3]">{feature.name}</div>
                      <div className="text-[#6B7280] text-xs mt-1">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;