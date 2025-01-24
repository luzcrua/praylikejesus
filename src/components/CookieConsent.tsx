import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <ToastProvider>
      <Toast className="fixed bottom-4 right-4 w-96 bg-black border-neon-purple">
        <div className="grid gap-1">
          <ToastTitle className="text-white">{t('cookies.title')}</ToastTitle>
          <ToastDescription className="text-gray-300">
            {t('cookies.description')}
          </ToastDescription>
        </div>
        <ToastClose />
        <ToastAction altText="Accept cookies" onClick={handleAccept} className="bg-neon-purple text-white hover:bg-purple-600">
          {t('cookies.accept')}
        </ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export default CookieConsent;