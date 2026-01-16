"use client"

import React from 'react';
import { GitBranch, Upload, Cpu, Monitor, Bell } from "lucide-react";

const steps = [
  {
    icon: GitBranch,
    title: "Connect Repository",
    description: "Link GitHub, GitLab, or Bitbucket with a single click.",
  },
  {
    icon: Upload,
    title: "Push Code",
    description: "Every git push triggers your pipeline automatically.",
  },
  {
    icon: Cpu,
    title: "Pipeline Executes",
    description: "Kubernetes-native execution runs your YAML stages.",
  },
  {
    icon: Monitor,
    title: "Real-Time Logs",
    description: "Monitor progress with live streaming logs and status.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Instant alerts via Slack, email, or webhooks.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative bg-[#0B0F14]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#E5E7EB]">How It Works</h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto font-light">
            From code push to deployment in minutes. Simple, automated, reliable.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Static Connection line - Subtle Titanium Trace */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1F2937] hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-center gap-8 md:gap-14 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Balanced Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div 
                    className="inline-block p-7 rounded-2xl border border-white/5 bg-[#161B22]/60 backdrop-blur-sm max-w-[380px] shadow-xl"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#E5E7EB]">
                      {step.title}
                    </h3>
                    <p className="text-[#9CA3AF] leading-relaxed text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Static Step Indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0B0F14] border-2 border-[#94A3B8] flex items-center justify-center text-[#F3F4F6] font-bold text-base shadow-[0_0_15px_rgba(148,163,184,0.1)]">
                    {index + 1}
                  </div>
                </div>

                {/* Balanced Icon Container */}
                <div className="flex-1 hidden md:block">
                  <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-14 h-14 rounded-xl bg-[#161B22] border border-white/10 flex items-center justify-center text-[#94A3B8]">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;