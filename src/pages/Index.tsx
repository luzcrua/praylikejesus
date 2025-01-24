import { useTranslation } from 'react-i18next';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import DevotionalSection from '@/components/sections/DevotionalSection';
import PrayerGuideSection from '@/components/sections/PrayerGuideSection';
import TransformationSection from '@/components/sections/TransformationSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SubscriptionForm from '@/components/sections/SubscriptionForm';
import Footer from '@/components/Footer';
import LanguageSelector from '@/components/LanguageSelector';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      <LanguageSelector />
      <main>
        <HeroSection />
        <BenefitsSection />
        <DevotionalSection />
        <PrayerGuideSection />
        <TransformationSection />
        <TestimonialsSection />
        <SubscriptionForm />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;