import BenefitCard from "@/components/BenefitCard";
import { Hand, Heart, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const BenefitsSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4e107723-5ad3-4aee-abe0-1d443825b87c.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
          {t('benefits.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            icon={Hand}
            title={t('benefits.connection.title')}
            description={t('benefits.connection.description')}
          />
          <BenefitCard
            icon={Heart}
            title={t('benefits.transformation.title')}
            description={t('benefits.transformation.description')}
          />
          <BenefitCard
            icon={Sparkles}
            title={t('benefits.miracles.title')}
            description={t('benefits.miracles.description')}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;