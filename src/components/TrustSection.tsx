import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const companies = [
    "DIFC Licensed",
    "ADGM Regulated", 
    "CBUAE Registered",
    "SOC 2 Certified",
    "ISO 27001",
    "PCI DSS"
  ];

  return (
    <section ref={ref} className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Trusted By:
          </p>
        </div>

        {/* Trust badges with staggered animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={index}
              className={`text-center py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-700 hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
