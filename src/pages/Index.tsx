import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import CoreFeatures from "@/components/landing/CoreFeatures";
//import Architecture from "@/components/landing/Architecture";
import LiveDemo from "@/components/landing/LiveDemo";
import WhoIsThisFor from "@/components/landing/WhoIsThisFor";
//import Comparison from "@/components/landing/Comparison";
import SecurityTrust from "@/components/landing/SecurityTrust";
import Documentation from "@/components/landing/Documentation";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <CoreFeatures />
       
        <LiveDemo />
        <WhoIsThisFor />
       
        <SecurityTrust />
        <Documentation />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
