
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
