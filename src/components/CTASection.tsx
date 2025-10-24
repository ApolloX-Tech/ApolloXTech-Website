import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className={`text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter leading-[0.95] uppercase transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            Start Building Today
          </h2>
          
          <div className={`flex flex-col sm:flex-row items-start gap-4 pt-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <Button size="lg" className="group uppercase tracking-wider hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="uppercase tracking-wider hover:scale-105 transition-all duration-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
