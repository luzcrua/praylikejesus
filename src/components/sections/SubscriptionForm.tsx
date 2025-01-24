import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ShinyButton from "@/components/ShinyButton";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTranslation } from "react-i18next";
import { MessageSquare } from "lucide-react";
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

const MAILCHIMP_URL = "YOUR_MAILCHIMP_SERVER_PREFIX.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members";
const MAILCHIMP_API_KEY = "YOUR_API_KEY";

// Lista de domínios de email permitidos
const ALLOWED_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.com.br",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "ig.com.br",
  "globo.com",
  "protonmail.com",
  "aol.com"
];

const SubscriptionForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackFormSubmission, trackEvent } = useAnalytics();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('form.validation.nameRequired'),
    }),
    email: z
      .string()
      .email({
        message: t('form.validation.emailRequired'),
      })
      .refine((email) => {
        const domain = email.split('@')[1]?.toLowerCase();
        return ALLOWED_EMAIL_DOMAINS.includes(domain);
      }, {
        message: t('form.validation.emailInvalid'),
      }),
    country: z.string().min(2, {
      message: t('form.validation.countryRequired'),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!MAILCHIMP_URL || MAILCHIMP_URL.includes("YOUR_LIST_ID")) {
      toast({
        title: t('form.error'),
        description: t('form.errorMessage'),
        variant: "destructive",
        className: "bg-black border-red-500 text-red-500",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Enviando dados para o Mailchimp:", values);

    try {
      const response = await fetch(MAILCHIMP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `apikey ${MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: values.email,
          status: "subscribed",
          merge_fields: {
            FNAME: values.name,
            COUNTRY: values.country
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar para Mailchimp');
      }

      trackFormSubmission(values);

      toast({
        title: t('form.success'),
        description: t('form.successMessage'),
        className: "bg-black border-neon-purple text-neon-purple font-semibold animate-shine shadow-[0_0_15px_rgba(139,92,246,0.5)]",
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
        className: "bg-black border-red-500 text-red-500 font-semibold",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleHelpClick = () => {
    window.location.href = `mailto:${t('form.helpEmail')}?subject=Ajuda com formulário`;
    trackEvent({
      action: 'help_button_click',
      category: 'Form',
      label: 'Help requested'
    });
  };

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
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">{t('form.country')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.countryPlaceholder')} {...field} />
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
          
          <button
            onClick={handleHelpClick}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mx-auto group"
          >
            <MessageSquare className="w-4 h-4 group-hover:text-neon-purple transition-colors" />
            <span>{t('form.helpButton')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;
