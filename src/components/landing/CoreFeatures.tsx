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
    <section id="features" style={{ backgroundColor: '#0D1117' }} className="py-24 relative">
      <div className="section-container px-6 md:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 style={{ color: '#E6EDF3' }} className="text-3xl sm:text-4xl font-bold mb-4">Core Features</h2>
          <p style={{ color: '#9CA3AF' }} className="text-lg max-w-2xl mx-auto font-light">
            Everything you need to build, test, and deploy with confidence.
          </p>
        </div>

        {/* Grid with Hover Outline Logic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCategories.map((category) => (
            <div 
              key={category.title} 
              style={{ backgroundColor: '#1F2937', borderColor: '#30363D' }}
              className="border p-8 rounded-2xl group transition-colors duration-300 hover:border-[#2F81F7]/50"
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-6">
                <div 
                  style={{ backgroundColor: '#161B22' }}
                  className="p-3 rounded-lg text-[#2F81F7] group-hover:bg-[#2F81F7]/10 transition-colors"
                >
                  <category.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 style={{ color: '#E6EDF3' }} className="text-xl font-semibold mb-1">{category.title}</h3>
                  <p style={{ color: '#9CA3AF' }} className="text-sm">{category.description}</p>
                </div>
              </div>

              {/* Inner Cards with Matching Borders */}
              <div className="space-y-4">
                {category.features.map((feature) => (
                  <div 
                    key={feature.name} 
                    style={{ backgroundColor: '#0D1117', borderColor: '#30363D' }}
                    className="flex items-start gap-3 p-3 rounded-lg border transition-colors group-hover:border-[#2F81F7]/20"
                  >
                    <feature.icon className="w-5 h-5 text-[#2F81F7] mt-0.5" />
                    <div>
                      <div style={{ color: '#E6EDF3' }} className="font-medium text-sm">{feature.name}</div>
                      <div style={{ color: '#6B7280' }} className="text-xs">{feature.desc}</div>
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