import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FeaturesSection = () => {
  const section1 = useScrollAnimation(0.2);
  const section2 = useScrollAnimation(0.2);

  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          <div 
            ref={section1.ref}
            className={`space-y-8 transition-all duration-1000 ${
              section1.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter leading-[0.95] uppercase">
              Consumer Adoption at Scale
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Multi-currency wallets for individuals. Hold, exchange, and transfer across 40+ currencies 
              with instant settlement and full regulatory protection.
            </p>
          </div>

          <div 
            ref={section2.ref}
            className={`space-y-8 pt-20 transition-all duration-1000 ${
              section2.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter leading-[0.95] uppercase">
              Enterprise Infrastructure
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Institutional-grade APIs for real-time settlement. Built for fintech, e-commerce, 
              and businesses scaling across borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
