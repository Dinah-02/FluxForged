import { Book, GitBranch, Code, ExternalLink } from "lucide-react";

const resources = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides, tutorials, and best practices.",
    link: "#",
    linkText: "Read Docs",
  },
  {
    icon: GitBranch,
    title: "Architecture",
    description: "Deep dive into our microservices architecture.",
    link: "#architecture",
    linkText: "View Architecture",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Full REST API documentation with examples.",
    link: "#",
    linkText: "Explore API",
  },
  {
    icon: ExternalLink,
    title: "GitHub Repository",
    description: "Open source components and examples.",
    link: "#",
    linkText: "View on GitHub",
  },
];

const Documentation = () => {
  return (
    <section id="docs" className="py-24 bg-secondary/30 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Documentation & Learning</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn how it all works. We believe in transparency and education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              className="card-glass p-6 group hover:border-primary/50 transition-all duration-300 block"
            >
              <div className="feature-icon mb-4 group-hover:bg-primary/20 transition-colors">
                <resource.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                {resource.linkText}
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>

        {/* Code sample */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive" />
              <div className="terminal-dot bg-warning" />
              <div className="terminal-dot bg-success" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">pipeline.yaml</span>
            </div>
            <pre className="terminal-body text-sm overflow-x-auto">
              <code className="text-muted-foreground">
{`# Example Pipeline Configuration
apiVersion: cloudpipe.io/v1
kind: Pipeline
metadata:
  name: build-and-deploy

stages:
  - name: test
    image: node:18-alpine
    commands:
      - npm install
      - npm test

  - name: build
    image: docker:latest
    commands:
      - docker build -t $IMAGE_TAG .
      - docker push $IMAGE_TAG

  - name: deploy
    image: kubectl:latest
    commands:
      - kubectl apply -f k8s/`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
