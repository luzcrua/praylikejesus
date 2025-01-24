import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useEffect } from 'react';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Detecta o idioma do navegador automaticamente na primeira visita
    const detectedLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['pt', 'en', 'es', 'fr', 'it', 'de'];
    
    // Se o idioma detectado for suportado e ainda não houver idioma definido
    if (!localStorage.getItem('i18nextLng') && supportedLanguages.includes(detectedLanguage)) {
      i18n.changeLanguage(detectedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    if (lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
      <Globe className="w-4 h-4 text-white" />
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-transparent text-white text-sm focus:outline-none cursor-pointer"
      >
        <option value="">🌐</option>
        <option value="pt">🇧🇷</option>
        <option value="en">🇺🇸</option>
        <option value="es">🇪🇸</option>
        <option value="fr">🇫🇷</option>
        <option value="it">🇮🇹</option>
        <option value="de">🇩🇪</option>
      </select>
    </div>
  );
};

export default LanguageSelector;