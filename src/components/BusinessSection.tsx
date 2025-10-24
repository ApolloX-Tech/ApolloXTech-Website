import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Building2, Zap, TrendingUp } from "lucide-react";

const BusinessSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: Building2,
      title: "Enterprise APIs",
      description: "Integrate seamlessly with institutional-grade infrastructure"
    },
    {
      icon: Zap,
      title: "Real-Time Settlement",
      description: "Process cross-border payments instantly with minimal fees"
    },
    {
      icon: TrendingUp,
      title: "Scale Globally",
      description: "Expand your business across borders with confidence"
    }
  ];

  return (
    <section id="business" ref={ref} className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter leading-[0.95] uppercase">
              Built For<br />Business
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Power your fintech, e-commerce, or enterprise with our licensed 
              digital foreign exchange infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`space-y-4 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-12 h-12 stroke-1" />
                  <h3 className="text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className={`pt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <Button size="lg" className="uppercase tracking-wider">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
