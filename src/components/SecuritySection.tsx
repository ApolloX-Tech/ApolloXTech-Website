import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Lock, FileCheck, Database } from "lucide-react";

const SecuritySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const certifications = [
    {
      icon: Shield,
      title: "DIFC Licensed",
      description: "Fully licensed by Dubai International Financial Centre"
    },
    {
      icon: Lock,
      title: "SOC 2 Certified",
      description: "Enterprise-grade security controls and compliance"
    },
    {
      icon: FileCheck,
      title: "ISO 27001",
      description: "International standard for information security"
    },
    {
      icon: Database,
      title: "PCI DSS",
      description: "Payment card industry data security standard"
    }
  ];

  return (
    <section id="security" ref={ref} className="py-32 bg-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter leading-[0.95] uppercase">
              Security &<br />Compliance First
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Bank-grade security with full regulatory compliance across UAE and MENA. 
              Your funds are protected by multiple layers of security and oversight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className={`space-y-4 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-12 h-12 stroke-1" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{cert.title}</h3>
                  <p className="text-lg text-muted-foreground">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
