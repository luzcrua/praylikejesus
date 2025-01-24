import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSubscriptionSchema, type SubscriptionFormData } from "@/schemas/subscriptionSchema";
import { submitToMailchimp } from "@/services/mailchimpService";
import SubscriptionFormFields from "@/components/form/SubscriptionFormFields";

const SubscriptionForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackFormSubmission, trackEvent } = useAnalytics();

  const form = useForm<SubscriptionFormData>({
    resolver: zodResolver(createSubscriptionSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      country: "",
    },
  });

  async function onSubmit(values: SubscriptionFormData) {
    setIsSubmitting(true);
    console.log("Enviando dados para o Mailchimp:", values);

    try {
      await submitToMailchimp(values);
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
          <SubscriptionFormFields
            form={form}
            isSubmitting={isSubmitting}
            onHelpClick={handleHelpClick}
            t={t}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;