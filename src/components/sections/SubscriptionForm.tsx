import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ShinyButton from "@/components/ShinyButton";
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

const ZAPIER_WEBHOOK_URL = "YOUR_ZAPIER_WEBHOOK_URL";

const SubscriptionForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!ZAPIER_WEBHOOK_URL || ZAPIER_WEBHOOK_URL === "YOUR_ZAPIER_WEBHOOK_URL") {
      toast({
        title: "Erro de Configuração",
        description: "Por favor, configure a URL do webhook do Zapier primeiro.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Enviando dados para o Zapier:", values);

    try {
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...values,
          timestamp: new Date().toISOString(),
          source: window.location.origin,
        }),
      });

      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas orações em breve.",
      });

      form.reset();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        variant: "destructive",
        title: "Erro ao realizar inscrição",
        description: "Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="form" className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4bf0c246-5410-41d7-a50e-65e7b1cfe25d.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="container relative z-10 px-4">
        <div className="max-w-xl mx-auto bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
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
                    <FormLabel className="text-white">Nome</FormLabel>
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
                    <FormLabel className="text-white">E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ShinyButton 
                type="submit" 
                variant="neon" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "COMEÇAR MINHA JORNADA DE ORAÇÃO AGORA →"}
              </ShinyButton>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;