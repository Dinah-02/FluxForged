import { Database, Server, Cloud, Workflow, BarChart3, MessageSquare } from "lucide-react";

const architectureNodes = [
  { name: "Git Webhook", icon: Cloud, position: "top" },
  { name: "API Gateway", icon: Server, position: "mid-left" },
  { name: "Spring Cloud", icon: Cloud, position: "mid-right" },
  { name: "Kafka Events", icon: MessageSquare, position: "center" },
  { name: "Tekton/Argo", icon: Workflow, position: "bottom-left" },
  { name: "PostgreSQL", icon: Database, position: "bottom-center" },
  { name: "Prometheus", icon: BarChart3, position: "bottom-right" },
];

const techStack = [
  "Spring Boot",
  "Spring Cloud",
  "Apache Kafka",
  "Kubernetes",
  "Tekton",
  "Argo Workflows",
  "Prometheus",
  "PostgreSQL",
  "Redis",
  "Keycloak",
];

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Architecture</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built on proven technologies. Event-driven, scalable, and production-ready.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-glass p-8 sm:p-12">
            <div className="relative">
              {/* Visual Architecture */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {/* Top Layer - Ingress */}
                <div className="col-span-3 flex justify-center mb-8">
                  <div className="architecture-node flex items-center gap-2 border-primary/50">
                    <Cloud className="w-4 h-4 text-primary" />
                    <span>Git Webhook / API Gateway</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="col-span-3 flex justify-center -my-4">
                  <div className="w-px h-8 bg-gradient-to-b from-primary to-primary/30" />
                </div>

                {/* Middle Layer - Services */}
                <div className="architecture-node flex items-center gap-2 text-center justify-center">
                  <Server className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">Auth Service</span>
                </div>
                <div className="architecture-node flex items-center gap-2 text-center justify-center border-primary/50">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">Kafka Events</span>
                </div>
                <div className="architecture-node flex items-center gap-2 text-center justify-center">
                  <Server className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">Pipeline Service</span>
                </div>

                {/* Arrow */}
                <div className="col-span-3 flex justify-center -my-4">
                  <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-primary/50" />
                </div>

                {/* Bottom Layer - Infrastructure */}
                <div className="architecture-node flex items-center gap-2 text-center justify-center">
                  <Workflow className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">Tekton/Argo</span>
                </div>
                <div className="architecture-node flex items-center gap-2 text-center justify-center">
                  <Database className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">PostgreSQL</span>
                </div>
                <div className="architecture-node flex items-center gap-2 text-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">Prometheus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">Powered By</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
