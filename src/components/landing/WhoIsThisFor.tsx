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
  return (
    <section id="audience" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who Is This For?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed for engineers who value transparency, reliability, and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="card-glass p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="feature-icon w-16 h-16 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{audience.title}</h3>
              <p className="text-muted-foreground text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
