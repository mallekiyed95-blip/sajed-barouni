import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Services from "@/components/landing/Services";
import Results from "@/components/landing/Results";
import HowItWorks from "@/components/landing/HowItWorks";

import About from "@/components/landing/About";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      
      <Results />
      <HowItWorks />
      
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
