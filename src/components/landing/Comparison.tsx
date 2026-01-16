import { Check, X, Minus } from "lucide-react";

const features = [
  { name: "Kubernetes-Native", us: true, github: false, gitlab: "partial" },
  { name: "Open Architecture", us: true, github: false, gitlab: "partial" },
  { name: "Learning-Focused", us: true, github: false, gitlab: false },
  { name: "Self-Hosted Option", us: true, github: false, gitlab: true },
  { name: "Event-Driven", us: true, github: "partial", gitlab: "partial" },
  { name: "Usage-Based Billing", us: true, github: true, gitlab: true },
  { name: "Real-time Logs", us: true, github: true, gitlab: true },
  { name: "YAML Pipelines", us: true, github: true, gitlab: true },
];

const Comparison = () => {
  const renderStatus = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-success" />;
    } else if (value === "partial") {
      return <Minus className="w-5 h-5 text-warning" />;
    }
    return <X className="w-5 h-5 text-muted-foreground/50" />;
  };

  return (
    <section id="comparison" className="py-24 bg-secondary/30 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Compare</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honest comparison with industry leaders. We respect these platforms — we just do some things differently.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-glass overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold">
                      <span className="text-primary">CloudPipe</span>
                    </th>
                    <th className="p-4 text-center font-semibold text-muted-foreground">GitHub Actions</th>
                    <th className="p-4 text-center font-semibold text-muted-foreground">GitLab CI</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={index !== features.length - 1 ? "border-b border-border/50" : ""}
                    >
                      <td className="p-4 font-medium">{feature.name}</td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">{renderStatus(feature.us)}</div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">{renderStatus(feature.github)}</div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">{renderStatus(feature.gitlab)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            <Check className="w-4 h-4 text-success inline-block mr-1" /> Full support
            <span className="mx-3">|</span>
            <Minus className="w-4 h-4 text-warning inline-block mr-1" /> Partial support
            <span className="mx-3">|</span>
            <X className="w-4 h-4 text-muted-foreground/50 inline-block mr-1" /> Not available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
