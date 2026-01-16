import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Modernize Your{' '}
            <span className="gradient-text">CI/CD Workflow?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join engineers who trust our platform for production deployments. 
            Start with our free tier — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              <Book className="w-5 h-5" />
              View Docs
            </Button>
            <Button variant="outline" size="lg">
              <Play className="w-5 h-5" />
              Try Demo
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Free tier includes 1,000 pipeline minutes/month • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
