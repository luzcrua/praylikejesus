import ShinyButton from "@/components/ShinyButton";
import { BookOpen } from "lucide-react";

const DevotionalSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/67c83adf-d794-4c6e-a56c-db6d99a5094a.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="container relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-8">
          Devocional Diário
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-16 h-16 text-gold mx-auto mb-6" />
          <p className="text-xl mb-8 text-white">
            "Pai nosso que estás nos céus, santificado seja o teu nome..."
          </p>
          <ShinyButton 
            variant="neon" 
            className="mx-auto"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Quero Receber Devocionais Diários
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default DevotionalSection;