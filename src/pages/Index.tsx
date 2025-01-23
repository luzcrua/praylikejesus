import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import DevotionalSection from "@/components/sections/DevotionalSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import SubscriptionForm from "@/components/sections/SubscriptionForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black/95">
      <HeroSection />
      <BenefitsSection />
      <DevotionalSection />
      <TestimonialsSection />
      <CommunitySection />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Index;