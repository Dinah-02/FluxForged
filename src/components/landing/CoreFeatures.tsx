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
    <section id="features" className="py-24 bg-secondary/30 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build, test, and deploy with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCategories.map((category) => (
            <div key={category.title} className="card-glass p-8 group hover:border-primary/50 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="feature-icon group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.features.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors">
                    <feature.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">{feature.name}</div>
                      <div className="text-muted-foreground text-xs">{feature.desc}</div>
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
