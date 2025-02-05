import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
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
import DynamicTitle from '@/components/DynamicTitle';

const Index = () => {
  const { t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Try to autoplay the audio when component mounts
    const playAudio = () => {
      if (iframeRef.current) {
        iframeRef.current.allow = "autoplay";
      }
    };

    playAudio();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <iframe 
        ref={iframeRef}
        src="./lovable-uploads/music-background.MP3"
        style={{ display: 'none' }}
        loop="true"
        allow="autoplay"
        />
      <DynamicTitle />
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
