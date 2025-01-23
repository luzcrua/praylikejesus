import { Heart, Hand, Sparkles, Star, BookOpen, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import BenefitCard from "@/components/BenefitCard";
import ShinyButton from "@/components/ShinyButton";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
});

const Index = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Erro ao se inscrever");
      }

      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá nossas orações em breve.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao realizar inscrição",
        description: "Por favor, tente novamente mais tarde.",
      });
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('/lovable-uploads/5b858674-cf70-49e4-8a6f-49d95e787f76.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 py-32 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Descubra Como Orar Como Jesus e Transforme Sua Vida Espiritual
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Receba orações exclusivas para se conectar profundamente com Deus
          </p>
          <ShinyButton
            variant="neon"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Receber Orações Agora
          </ShinyButton>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4e107723-5ad3-4aee-abe0-1d443825b87c.png')] bg-cover bg-center opacity-10" />
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

      {/* Daily Devotional Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/67c83adf-d794-4c6e-a56c-db6d99a5094a.png')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-8">
            Devocional Diário
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-gold mx-auto mb-6" />
            <p className="text-xl mb-8">
              "Pai nosso que estás nos céus, santificado seja o teu nome..."
            </p>
            <ShinyButton variant="neon" className="mx-auto">
              Receber Devocional Diário
            </ShinyButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4bf0c246-5410-41d7-a50e-65e7b1cfe25d.png')] bg-cover bg-center opacity-10" />
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

      {/* Community Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4e107723-5ad3-4aee-abe0-1d443825b87c.png')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-8">
            Comunidade de Oração
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 text-gold mx-auto mb-6" />
            <p className="text-xl mb-8">
              Junte-se a milhares de pessoas que estão transformando suas vidas através da oração
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
                <Star className="w-8 h-8 text-gold mx-auto mb-2" />
                <h3 className="font-bold text-2xl text-primary">5000+</h3>
                <p className="text-gray-600">Membros Ativos</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
                <Heart className="w-8 h-8 text-gold mx-auto mb-2" />
                <h3 className="font-bold text-2xl text-primary">10000+</h3>
                <p className="text-gray-600">Orações Compartilhadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="relative py-20">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4bf0c246-5410-41d7-a50e-65e7b1cfe25d.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4">
          <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">
              Receba Suas Orações Exclusivas
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ShinyButton type="submit" variant="neon" className="w-full">
                  Quero Orar Como Jesus!
                </ShinyButton>
              </form>
            </Form>
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