import { ArrowRight, CheckCircle2 } from "lucide-react";
import ShinyButton from "@/components/ShinyButton";

const TransformationSection = () => {
  const transformations = [
    "Maior paz interior e clareza mental",
    "Fortalecimento da fé e confiança em Deus",
    "Desenvolvimento de uma rotina de oração efetiva",
    "Superação de obstáculos através da oração",
    "Crescimento espiritual acelerado",
    "Conexão mais profunda com Deus"
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/67c83adf-d794-4c6e-a56c-db6d99a5094a.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="container relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
          Transforme Sua Vida Através da Oração
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {transformations.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 bg-white/5 backdrop-blur-lg p-4 rounded-lg border border-white/10 hover:border-neon-purple/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-neon-purple flex-shrink-0" />
                <p className="text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <ShinyButton 
              variant="neon"
              onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
              className="group"
            >
              Comece Sua Transformação Hoje
              <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;