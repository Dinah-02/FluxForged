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
    <section id="docs" style={{ backgroundColor: '#0D1117' }} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 style={{ color: '#E6EDF3' }} className="text-3xl sm:text-4xl font-bold mb-4">
            Documentation & Learning
          </h2>
          <p style={{ color: '#9CA3AF' }} className="text-lg max-w-2xl font-light">
            Learn how it all works. We believe in transparency and education.
          </p>
        </div>

        {/* Resource Cards - Strictly Static with Hover Outlines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              style={{ backgroundColor: '#1F2937' }}
              className="p-7 rounded-2xl border border-[#30363D] transition-all duration-300 block group hover:border-[#2F81F7]/60 hover:shadow-[0_0_30px_rgba(47,129,247,0.05)]"
            >
              <div 
                style={{ backgroundColor: '#161B22', borderColor: '#30363D' }}
                className="w-12 h-12 flex items-center justify-center rounded-xl border mb-6 text-[#2F81F7] transition-all duration-300 group-hover:border-[#2F81F7]/50 group-hover:shadow-[0_0_15px_rgba(47,129,247,0.2)]"
              >
                <resource.icon className="w-5 h-5" />
              </div>
              <h3 style={{ color: '#E6EDF3' }} className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p style={{ color: '#9CA3AF' }} className="text-sm mb-6 leading-relaxed font-light">{resource.description}</p>
              <span className="text-[#2F81F7] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                {resource.linkText}
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;