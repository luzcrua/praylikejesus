import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container px-4 text-center">
        <p className="text-sm">
          {t('footer.rights')}
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-sm text-gray-400 hover:text-gold">
            {t('footer.privacy')}
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-gold">
            {t('footer.terms')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;