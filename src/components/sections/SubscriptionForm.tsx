import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSubscriptionSchema, type SubscriptionFormData } from "@/schemas/subscriptionSchema";
import { submitToMailchimp, type SubscriptionData } from "@/services/mailchimpService";
import SubscriptionFormFields from "@/components/form/SubscriptionFormFields";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ShinyButton from "@/components/ShinyButton";
import { Loader2 } from "lucide-react";

const SubscriptionForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(true);
  const [showTelegramButton, setShowTelegramButton] = useState(false);
  const audioRef = useRef<HTMLIFrameElement>(null);
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

  useEffect(() => {
    if (showSuccessDialog) {
      // Reset states when dialog opens
      setIsAudioLoading(true);
      setShowTelegramButton(false);

      // Start timer for Telegram button
      const timer = setTimeout(() => {
        setShowTelegramButton(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [showSuccessDialog]);

  const handleIframeLoad = () => {
    setIsAudioLoading(false);
  };

  const onSubmit = async (values: SubscriptionFormData) => {
    setIsSubmitting(true);
    console.log("Enviando dados para o Mailchimp:", values);

    try {
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

  const handleContinue = () => {
    window.location.href = t('form.success.buttonUrl');
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
        onOpenChange={() => {}}
      >
        <DialogContent 
          className="bg-black/95 border-neon-purple text-white w-[95%] max-w-3xl p-0 overflow-hidden mx-auto my-4 md:my-8"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <div className="relative">
            <div 
              className="absolute inset-0 bg-[url('/lovable-uploads/080a95bc-cc2a-45ec-a4e1-26f02a9731b3.png')] 
                         bg-cover bg-center opacity-40"
            />
            
            <div className="relative z-10 p-4 sm:p-6 md:p-8 text-center space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary animate-fade-up">
                  {t('form.success.title')}
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed animate-fade-up" style={{animationDelay: "0.2s"}}>
                  {t('form.success.subtitle')}
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mt-4 md:mt-6 animate-fade-up" style={{animationDelay: "0.4s"}}>
                  <p className="text-base sm:text-lg font-medium text-neon-purple mb-2">
                    {t('form.success.audioMessage')}
                  </p>
                  <p className="text-sm sm:text-base text-white/80">
                    {t('form.success.audioInstruction')}
                  </p>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto mb-4 md:mb-6 animate-fade-up relative" style={{animationDelay: "0.6s"}}>
                {isAudioLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                    <div className="text-center">
                      <Loader2 className="h-8 w-8 animate-spin text-neon-purple mx-auto mb-2" />
                      <p className="text-sm text-white/90">{t('form.success.loading')}</p>
                    </div>
                  </div>
                )}
                {showSuccessDialog && (
                  <iframe 
                    ref={audioRef}
                    src={t('form.success.audioUrl')}
                    width="100%" 
                    height="100" 
                    allow="autoplay"
                    className="rounded-lg shadow-lg"
                    onLoad={handleIframeLoad}
                  />
                )}
              </div>

              {showTelegramButton && (
                <ShinyButton
                  variant="neon"
                  onClick={handleContinue}
                  className="w-full max-w-md mx-auto text-sm sm:text-base animate-fade-up"
                  style={{animationDelay: "0.8s"}}
                >
                  {t('form.success.buttonText')}
                </ShinyButton>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubscriptionForm;