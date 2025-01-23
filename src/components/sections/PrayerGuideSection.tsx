import ShinyButton from "@/components/ShinyButton";
import { BookOpen, Star, Download } from "lucide-react";

const PrayerGuideSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4e107723-5ad3-4aee-abe0-1d443825b87c.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="container relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
          Guia Completo de Oração
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-neon-purple/30 transition-all duration-300 group">
            <BookOpen className="w-12 h-12 text-neon-purple mb-6 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-serif font-bold text-white mb-4">E-book Gratuito</h3>
            <p className="text-gray-300 mb-6">
              Baixe nosso guia completo com técnicas e exemplos práticos de oração para transformar sua vida espiritual.
            </p>
            <ShinyButton 
              variant="neon" 
              className="w-full"
              onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            >
              BAIXAR GUIA DE ORAÇÃO GRATUITO →
            </ShinyButton>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-neon-pink/30 transition-all duration-300 group">
            <Star className="w-12 h-12 text-neon-pink mb-6 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Dicas Exclusivas</h3>
            <p className="text-gray-300 mb-6">
              Receba dicas práticas e insights poderosos para fortalecer sua conexão espiritual através da oração.
            </p>
            <ShinyButton 
              variant="neon" 
              className="w-full"
              onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            >
              RECEBER DICAS PODEROSAS DE ORAÇÃO →
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerGuideSection;