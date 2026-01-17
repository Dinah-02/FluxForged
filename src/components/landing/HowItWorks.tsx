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
    <section id="how-it-works" className="py-24 relative bg-[#0D1117]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#E6EDF3]">How It Works</h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto font-light">
            From code push to deployment in minutes. Simple, automated, reliable.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Static Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#30363D] hidden md:block" />

          <div className="space-y-12"> {/* Reduced vertical spacing between steps */}
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-center gap-8 md:gap-14 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card - Optimized for Rectangular Shape */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div 
                    className="inline-block px-7 py-4 rounded-xl border border-[#30363D] bg-[#1F2937] max-w-[400px] shadow-2xl"
                  >
                    <h3 className="text-lg font-semibold mb-1 text-[#E6EDF3]">
                      {step.title}
                    </h3>
                    <p className="text-[#9CA3AF] leading-snug text-[14px]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Indicator - Aligned to the new height */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#0D1117] border-2 border-[#2F81F7] flex items-center justify-center text-[#2F81F7] font-bold text-sm shadow-[0_0_15px_rgba(47,129,247,0.15)]">
                    {index + 1}
                  </div>
                </div>

                {/* Icon Container - Balanced with Compact Card */}
                <div className="flex-1 hidden md:block">
                  <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-12 h-12 rounded-lg bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#2F81F7]">
                      <step.icon className="w-5 h-5" />
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