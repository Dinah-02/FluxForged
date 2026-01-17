"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, Clock, Circle, Terminal, RefreshCw } from "lucide-react";

const logLines = [
  { time: "00:00:01", level: "info", message: "Pipeline triggered by push to main" },
  { time: "00:00:02", level: "info", message: "Cloning repository..." },
  { time: "00:00:05", level: "success", message: "Repository cloned successfully" },
  { time: "00:00:06", level: "info", message: "Installing dependencies..." },
  { time: "00:01:12", level: "success", message: "Dependencies installed (423 packages)" },
  { time: "00:01:13", level: "info", message: "Running unit tests..." },
  { time: "00:01:28", level: "success", message: "All tests passed (147 tests, 0 failures)" },
  { time: "00:01:29", level: "info", message: "Building Docker image..." },
  { time: "00:01:45", level: "success", message: "Image built: registry.io/app:v1.2.3" },
  { time: "00:01:46", level: "info", message: "Deploying to staging..." },
  { time: "00:01:58", level: "success", message: "Deployment complete. Pipeline finished." },
];

const pipelineStages = [
  { name: "Clone", duration: "3s" },
  { name: "Install", duration: "6s" },
  { name: "Test", duration: "15s" },
  { name: "Build", duration: "16s" },
  { name: "Deploy", duration: "12s" },
];

const LiveDemo = () => {
  const [visibleLogs, setVisibleLogs] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && visibleLogs < logLines.length) {
      const timer = setTimeout(() => {
        setVisibleLogs((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, visibleLogs]);

  const handlePlay = () => {
    setVisibleLogs(0);
    setIsPlaying(true);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "success": return "#238636"; // Solid GitHub Green
      case "error": return "#F85149";   // Solid GitHub Red
      case "info": return "#2F81F7";    // Solid GitHub Blue
      default: return "#8B949E"; 
    }
  };

  return (
    <section id="demo" style={{ backgroundColor: '#0D1117' }} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10">
        
        {/* Compact Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3 text-[#E6EDF3]">Live Pipeline Demo</h2>
          <p className="text-[#9CA3AF] text-base max-w-xl font-light">
            Real-time execution logs from our Kubernetes-native engine.
          </p>
        </div>

        <div className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* COMPACT Pipeline Sidebar */}
            <div 
              style={{ backgroundColor: '#1F2937', borderColor: '#30363D' }}
              className="p-5 rounded-xl border shadow-2xl h-fit"
            >
              <h3 className="text-sm font-bold mb-5 flex items-center gap-2 text-[#E6EDF3] uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-[#2F81F7]" />
                Stages
              </h3>
              
              <div className="space-y-3">
                {pipelineStages.map((stage, index) => {
                  const isDone = visibleLogs > (index * 2 + 1);
                  const isActive = visibleLogs > (index * 2) && !isDone;

                  return (
                    <div
                      key={stage.name}
                      style={{ backgroundColor: '#0D1117', borderColor: isActive ? '#2F81F7' : '#30363D' }}
                      className="flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-[#238636]" />
                        ) : isActive ? (
                          <RefreshCw className="w-4 h-4 text-[#2F81F7] animate-spin" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#30363D]" />
                        )}
                        <span className={`text-sm font-medium ${isDone ? 'text-[#E6EDF3]' : 'text-[#8B949E]'}`}>
                          {stage.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#6B7280] font-mono">{stage.duration}</span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handlePlay}
                style={{ backgroundColor: '#2F81F7' }}
                className="w-full mt-6 flex items-center justify-center gap-2 py-3 rounded-lg text-white font-bold text-xs hover:bg-[#1F6FEB] transition-all active:scale-95 shadow-lg shadow-[#2F81F7]/20"
              >
                <Play className="w-3 h-3 fill-current" />
                {isPlaying ? "RESTART" : "RUN PIPELINE"}
              </button>
            </div>

            {/* Terminal Window with VIBRANT dots */}
            <div className="lg:col-span-2">
              <div 
                style={{ backgroundColor: '#161B22', borderColor: '#30363D' }}
                className="rounded-xl border overflow-hidden shadow-2xl h-[450px] flex flex-col"
              >
                {/* Header with SOLID vibrant colors */}
                <div style={{ backgroundColor: '#0D1117', borderBottom: '1px solid #30363D' }} className="px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.2)]" /> {/* Vibrant Red */}
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.2)]" /> {/* Vibrant Yellow */}
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.2)]" /> {/* Vibrant Green */}
                  </div>
                  <span className="text-[10px] text-[#6B7280] font-mono tracking-widest">
                    bash — 80×24
                  </span>
                </div>

                <div className="p-5 font-mono text-[13px] overflow-y-auto flex-grow">
                  {logLines.slice(0, visibleLogs).map((log, index) => (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={index} className="flex gap-3 mb-1.5">
                      <span className="text-[#30363D] shrink-0">{log.time}</span>
                      <span style={{ color: getLevelColor(log.level) }} className="shrink-0 font-bold uppercase text-[11px]">
                        {log.level}
                      </span>
                      <span className="text-[#C9D1D9]">{log.message}</span>
                    </motion.div>
                  ))}
                  
                  {isPlaying && visibleLogs < logLines.length && (
                    <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-2 h-4 bg-[#2F81F7] ml-1" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;