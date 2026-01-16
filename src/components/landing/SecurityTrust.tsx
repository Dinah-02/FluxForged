import { Shield, Key, Users, Lock } from "lucide-react";

const securityFeatures = [
  {
    icon: Key,
    title: "OAuth Login",
    description: "Secure authentication via Keycloak with SSO support for enterprise teams.",
  },
  {
    icon: Shield,
    title: "Token-Based Auth",
    description: "JWT tokens with configurable expiration and refresh policies.",
  },
  {
    icon: Users,
    title: "Tenant Isolation",
    description: "Complete namespace and resource isolation between tenants.",
  },
  {
    icon: Lock,
    title: "Secrets Encryption",
    description: "AES-256 encryption for all secrets at rest and in transit.",
  },
];

const SecurityTrust = () => {
  return (
    <section id="security" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Security & Trust</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade security built into every layer. Your code and secrets are protected.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="card-glass p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="feature-icon mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-secondary/50 border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">SOC 2</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">GDPR</div>
              <div className="text-xs text-muted-foreground">Ready</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
