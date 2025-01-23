import { Heart, Hands, Sparkles } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import ShinyButton from "@/components/ShinyButton";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('/photo-1473177104440-ffee2f376098')] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container relative z-10 px-4 py-32 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Descubra Como Orar Como Jesus e Transforme Sua Vida Espiritual
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Receba orações exclusivas para se conectar profundamente com Deus
          </p>
          <ShinyButton
            variant="gold"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Receber Orações Agora
          </ShinyButton>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
            Por que Orar como Jesus?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={Hands}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
            Vidas Transformadas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Maria Silva"
              text="Depois que aprendi a orar como Jesus, minha vida espiritual ganhou um novo significado."
            />
            <TestimonialCard
              name="João Santos"
              text="As orações exclusivas me ajudaram a desenvolver uma conexão mais profunda com Deus."
            />
            <TestimonialCard
              name="Ana Oliveira"
              text="Nunca imaginei que poderia ter uma vida de oração tão poderosa. Sou muito grata!"
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 bg-primary">
        <div className="container px-4">
          <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">
              Receba Suas Orações Exclusivas
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <ShinyButton type="submit" className="w-full">
                Quero Orar Como Jesus!
              </ShinyButton>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container px-4 text-center">
          <p className="text-sm">
            © 2024 Ore Como Jesus. Todos os direitos reservados.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-gold">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-gold">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;