import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PersonalSection from "@/components/PersonalSection";
import BusinessSection from "@/components/BusinessSection";
import FeaturesSection from "@/components/FeaturesSection";
import SecuritySection from "@/components/SecuritySection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <Hero />
        <PersonalSection />
        <BusinessSection />
        <FeaturesSection />
        <SecuritySection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
