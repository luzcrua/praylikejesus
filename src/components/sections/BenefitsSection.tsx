import BenefitCard from "@/components/BenefitCard";
import { Hand, Heart, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4e107723-5ad3-4aee-abe0-1d443825b87c.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="container relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
          Por que Orar como Jesus?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            icon={Hand}
            title="Conexão Profunda"
            description="Desenvolva uma intimidade única com Deus através da oração"
          />
          <BenefitCard
            icon={Heart}
            title="Transformação Interior"
            description="Experimente mudanças reais em sua vida espiritual"
          />
          <BenefitCard
            icon={Sparkles}
            title="Experiências Milagrosas"
            description="Vivencie o poder sobrenatural da oração em sua vida"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;