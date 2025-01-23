import ShinyButton from "@/components/ShinyButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('/lovable-uploads/5b858674-cf70-49e4-8a6f-49d95e787f76.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70" />
      <div className="container relative z-10 px-4 py-32 text-center text-white">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Descubra Como{" "}
          <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent animate-shine inline-block">
            Orar Como Jesus
          </span>{" "}
          e Transforme Sua Vida Espiritual
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-0 animate-[fade-up_0.5s_ease-out_0.3s_forwards]">
          Receba orações exclusivas{" "}
          <span className="font-bold text-neon-purple animate-pulse">
            100% GRATUITAS
          </span>{" "}
          para se conectar profundamente com Deus
        </p>
        <div className="opacity-0 animate-[fade-up_0.5s_ease-out_0.6s_forwards]">
          <ShinyButton
            variant="neon"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            className="group transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center">
              QUERO COMEÇAR MINHA JORNADA DE ORAÇÃO{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </span>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;