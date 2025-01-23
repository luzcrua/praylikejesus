import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4bf0c246-5410-41d7-a50e-65e7b1cfe25d.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 px-4">
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
  );
};

export default TestimonialsSection;