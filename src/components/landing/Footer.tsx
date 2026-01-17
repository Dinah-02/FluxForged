import { Github, FileText, Map, Mail, Scale } from "lucide-react";

const footerLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: FileText, label: "Docs", href: "#docs" },
  { icon: Map, label: "Roadmap", href: "#" },
  { icon: Mail, label: "Contact", href: "#" },
  { icon: Scale, label: "License", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#30363D] bg-[#0D1117]">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo - Renamed to CloudFlow with Navbar Color */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2F81F7] flex items-center justify-center">
              <span className="text-white font-bold text-sm">CF</span>
            </div>
            <span className="font-semibold text-lg text-[#E6EDF3]">CloudFlow</span>
          </div>

          {/* Links - Hover white as requested */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2026 CloudFlow. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;