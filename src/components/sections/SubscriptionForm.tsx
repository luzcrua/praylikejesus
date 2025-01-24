import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSubscriptionSchema, type SubscriptionFormData } from "@/schemas/subscriptionSchema";
import { submitToMailchimp, type SubscriptionData } from "@/services/mailchimpService";
import SubscriptionFormFields from "@/components/form/SubscriptionFormFields";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import ShinyButton from "@/components/ShinyButton";

const SubscriptionForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { trackFormSubmission, trackEvent } = useAnalytics();

  const form = useForm<SubscriptionFormData>({
    resolver: zodResolver(createSubscriptionSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (values: SubscriptionFormData) => {
    setIsSubmitting(true);
    console.log("Enviando dados para o Mailchimp:", values);

    try {
      // Comentando temporariamente o envio real para o Mailchimp
      // const mailchimpData: SubscriptionData = {
      //   name: values.name,
      //   email: values.email,
      //   country: values.country,
      //   acceptTerms: values.acceptTerms
      // };
      // await submitToMailchimp(mailchimpData);
      
      // Simulando sucesso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      trackFormSubmission(values);
      setShowSuccessDialog(true);
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      
      trackEvent({
        action: 'form_error',
        category: 'Error',
        label: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleHelpClick = () => {
    window.location.href = `mailto:${t('form.helpEmail')}?subject=Ajuda com formulário`;
    trackEvent({
      action: 'help_button_click',
      category: 'Form',
      label: 'Help requested'
    });
  };

  return (
    <>
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
              onSubmit={onSubmit}
              t={t}
            />
          </div>
        </div>
      </section>

      <Dialog 
        open={showSuccessDialog} 
        onOpenChange={() => {}} // Prevents dialog from closing when clicking outside or pressing ESC
      >
        <DialogContent 
          className="bg-black/95 border-neon-purple text-white w-[95%] max-w-3xl p-0 overflow-hidden mx-auto my-4 md:my-8"
          onPointerDownOutside={(e) => e.preventDefault()} // Prevents closing on click outside
          onEscapeKeyDown={(e) => e.preventDefault()} // Prevents closing on ESC key
        >
          <div className="relative">
            <div 
              className="absolute inset-0 bg-[url('/lovable-uploads/080a95bc-cc2a-45ec-a4e1-26f02a9731b3.png')] 
                         bg-cover bg-center opacity-40"
            />
            
            <div className="relative z-10 p-4 sm:p-6 md:p-8 text-center space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary animate-fade-up">
                  Sua Jornada Espiritual Começa Agora
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed animate-fade-up" style={{animationDelay: "0.2s"}}>
                  Você está prestes a iniciar uma 
                  <span className="text-neon-purple font-semibold"> transformadora jornada </span> 
                  de conexão com Deus através da oração.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mt-4 md:mt-6 animate-fade-up" style={{animationDelay: "0.4s"}}>
                  <p className="text-base sm:text-lg font-medium text-neon-purple mb-2">
                    🎧 Sua Primeira Mensagem Especial
                  </p>
                  <p className="text-sm sm:text-base text-white/80">
                    Prepare seu coração e ouça com atenção a mensagem abaixo
                  </p>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto mb-4 md:mb-6 animate-fade-up" style={{animationDelay: "0.6s"}}>
                {showSuccessDialog && (
                  <iframe 
                    src="https://drive.google.com/file/d/1KvrcY1hMEDqwJX36_5xxSr14NWtwszK9/preview" 
                    width="100%" 
                    height="100" 
                    allow="autoplay"
                    className="rounded-lg shadow-lg"
                  />
                )}
              </div>

              <ShinyButton
                variant="neon"
                onClick={() => setShowSuccessDialog(false)}
                className="w-full max-w-md mx-auto text-sm sm:text-base animate-fade-up"
                style={{animationDelay: "0.8s"}}
              >
                CONTINUAR MINHA JORNADA
              </ShinyButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubscriptionForm;
