import { useState, useEffect } from "react";
import { Play, CheckCircle2, Clock, Circle, Terminal } from "lucide-react";

const logLines = [
  { time: "00:00:01", level: "info", message: "Pipeline triggered by push to main" },
  { time: "00:00:02", level: "info", message: "Cloning repository..." },
  { time: "00:00:05", level: "success", message: "Repository cloned successfully" },
  { time: "00:00:06", level: "info", message: "Installing dependencies..." },
  { time: "00:00:12", level: "success", message: "Dependencies installed (423 packages)" },
  { time: "00:00:13", level: "info", message: "Running unit tests..." },
  { time: "00:00:28", level: "success", message: "All tests passed (147 tests, 0 failures)" },
  { time: "00:00:29", level: "info", message: "Building Docker image..." },
  { time: "00:00:45", level: "success", message: "Image built: registry.io/app:v1.2.3" },
  { time: "00:00:46", level: "info", message: "Deploying to staging..." },
  { time: "00:00:58", level: "success", message: "Deployment complete. Pipeline finished." },
];

const pipelineStages = [
  { name: "Clone", status: "complete", duration: "3s" },
  { name: "Install", status: "complete", duration: "6s" },
  { name: "Test", status: "complete", duration: "15s" },
  { name: "Build", status: "complete", duration: "16s" },
  { name: "Deploy", status: "complete", duration: "12s" },
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
      case "success": return "text-success";
      case "error": return "text-destructive";
      case "warning": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="demo" className="py-24 bg-secondary/30 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Live Pipeline Demo</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See a real pipeline execution in action. Read-only demo showing real-time logs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pipeline Stages */}
            <div className="card-glass p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                Pipeline Stages
              </h3>
              <div className="space-y-3">
                {pipelineStages.map((stage, index) => (
                  <div
                    key={stage.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50"
                  >
                    <div className="flex items-center gap-3">
                      {visibleLogs > (index * 2 + 1) ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : visibleLogs > (index * 2) ? (
                        <Circle className="w-5 h-5 text-primary animate-pulse" />
                      ) : (
                        <Clock className="w-5 h-5 text-muted-foreground" />
                      )}
                      <span className="font-medium">{stage.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{stage.duration}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handlePlay}
                className="w-full mt-6 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Play className="w-4 h-4" />
                {isPlaying ? "Restart Demo" : "Run Pipeline"}
              </button>
            </div>

            {/* Log Output */}
            <div className="lg:col-span-2 terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-destructive" />
                <div className="terminal-dot bg-warning" />
                <div className="terminal-dot bg-success" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">pipeline-logs — main @ abc1234</span>
              </div>
              <div className="terminal-body h-80 overflow-y-auto">
                {logLines.slice(0, visibleLogs).map((log, index) => (
                  <div key={index} className="flex gap-4 mb-1 animate-fade-in">
                    <span className="text-muted-foreground/50 shrink-0">{log.time}</span>
                    <span className={`shrink-0 ${getLevelColor(log.level)}`}>
                      [{log.level.toUpperCase()}]
                    </span>
                    <span className="text-foreground">{log.message}</span>
                  </div>
                ))}
                {isPlaying && visibleLogs < logLines.length && (
                  <span className="inline-block w-2 h-4 bg-primary animate-terminal-blink" />
                )}
                {visibleLogs === 0 && !isPlaying && (
                  <span className="text-muted-foreground">Click "Run Pipeline" to see a live demo...</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
