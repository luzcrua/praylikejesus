import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ShinyButton from "@/components/ShinyButton";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTranslation } from "react-i18next";
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

const ZAPIER_WEBHOOK_URL = "YOUR_ZAPIER_WEBHOOK_URL";

const SubscriptionForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackFormSubmission, trackEvent } = useAnalytics();
  
  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('form.validation.nameRequired'),
    }),
    email: z.string().email({
      message: t('form.validation.emailRequired'),
    }),
  });

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
        title: t('form.error'),
        description: t('form.errorMessage'),
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

      trackFormSubmission(values);

      toast({
        title: t('form.success'),
        description: t('form.successMessage'),
      });

      form.reset();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      
      trackEvent({
        action: 'form_error',
        category: 'Error',
        label: error instanceof Error ? error.message : 'Unknown error'
      });

      toast({
        variant: "destructive",
        title: t('form.error'),
        description: t('form.errorMessage'),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="form" className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4bf0c246-5410-41d7-a50e-65e7b1cfe25d.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 px-4">
        <div className="max-w-xl mx-auto bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">
            {t('form.title')}
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">{t('form.name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.namePlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">{t('form.email')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.emailPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <ShinyButton 
                type="submit" 
                variant="neon" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : t('form.submit')}
              </ShinyButton>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;