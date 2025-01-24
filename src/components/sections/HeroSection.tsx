import ShinyButton from "@/components/ShinyButton";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('/lovable-uploads/5b858674-cf70-49e4-8a6f-49d95e787f76.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70" />
      <div className="container relative z-10 px-4 py-32 text-center text-white">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-up" 
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-0 animate-[fade-up_0.5s_ease-out_0.3s_forwards]"
           dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}>
        </p>
        <div className="opacity-0 animate-[fade-up_0.5s_ease-out_0.6s_forwards]">
          <ShinyButton
            variant="neon"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            className="group transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center">
              {t('hero.cta')}{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </span>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;