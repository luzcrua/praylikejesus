import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import DevotionalSection from "@/components/sections/DevotionalSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SubscriptionForm from "@/components/sections/SubscriptionForm";
import Footer from "@/components/Footer";
import PrayerGuideSection from "@/components/sections/PrayerGuideSection";
import TransformationSection from "@/components/sections/TransformationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black/95">
      <HeroSection />
      <BenefitsSection />
      <DevotionalSection />
      <PrayerGuideSection />
      <TransformationSection />
      <TestimonialsSection />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Index;