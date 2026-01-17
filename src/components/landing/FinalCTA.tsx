import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section style={{ backgroundColor: '#0D1117' }} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        style={{ background: 'linear-gradient(to top, rgba(47, 129, 247, 0.05), transparent, transparent)' }} 
        className="absolute inset-0" 
      />
      <div 
        style={{ backgroundColor: '#2F81F7' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.05] rounded-full blur-[100px]" 
      />
      
      <div className="section-container relative z-10 px-6 md:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: '#E6EDF3' }} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Modernize Your{' '}
            <span style={{ color: '#2F81F7' }}>CI/CD Workflow?</span>
          </h2>
          <p style={{ color: '#9CA3AF' }} className="text-lg mb-10 max-w-2xl mx-auto font-light">
            Join engineers who trust our platform for production deployments. 
            Start with our free tier , no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Action */}
            <Button 
              style={{ backgroundColor: '#2F81F7', color: '#FFFFFF' }} 
              size="xl"
              className="hover:bg-[#1F6FEB] transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* View Docs - Static Outline with Hover Glow */}
            <Button 
              variant="heroOutline"
              size="lg"
              style={{ 
                backgroundColor: 'transparent', 
                color: '#E6EDF3', 
                borderColor: '#2F81F780' // Static thin blue outline (50% opacity)
              }} 
              className="border-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(47,129,247,0.4)] hover:bg-[#2F81F7]/5 hover:border-[#2F81F7]"
            >
              <Book className="w-5 h-5" />
              View Docs
            </Button>

            {/* Try Demo */}
            <Button 
              variant="outline"
              size="lg"
              style={{ backgroundColor: 'transparent', color: '#9CA3AF', border: '1px solid #30363D' }} 
              className="hover:text-white hover:border-[#2F81F7]/30 transition-all"
            >
              <Play className="w-5 h-5" />
              Try Demo
            </Button>
          </div>

          <p style={{ color: '#6B7280' }} className="mt-8 text-sm">
            Free tier includes 1,000 pipeline minutes/month • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;