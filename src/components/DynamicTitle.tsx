import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const DynamicTitle = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('siteTitle');
  }, [t, i18n.language]);

  return null;
};

export default DynamicTitle;