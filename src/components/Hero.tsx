import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-6xl mx-auto space-y-12"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          {/* Main Headline - XION Style Massive Typography */}
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-black tracking-tighter leading-[0.9] uppercase opacity-0 animate-fade-in-up">
            Licensed Digital FX
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-in-up [animation-delay:200ms]">
            Instant cross-border transfers for the MENA region. Multi-currency accounts, 
            real-time settlement, and institutional-grade infrastructure.
          </p>

          {/* CTA Button */}
          <div className="pt-4 opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <Button size="lg" className="group uppercase tracking-wider hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />
    </section>
  );
};

export default Hero;
