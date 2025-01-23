import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
      <Globe className="w-4 h-4 text-white" />
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-transparent text-white text-sm focus:outline-none cursor-pointer"
      >
        <option value="pt">{t('languageSelector.pt')}</option>
        <option value="en">{t('languageSelector.en')}</option>
        <option value="es">{t('languageSelector.es')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;