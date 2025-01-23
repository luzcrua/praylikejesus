import TestimonialCard from "@/components/TestimonialCard";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4bf0c246-5410-41d7-a50e-65e7b1cfe25d.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
          {t('testimonials.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name={t('testimonials.testimonial1.name')}
            text={t('testimonials.testimonial1.text')}
          />
          <TestimonialCard
            name={t('testimonials.testimonial2.name')}
            text={t('testimonials.testimonial2.text')}
          />
          <TestimonialCard
            name={t('testimonials.testimonial3.name')}
            text={t('testimonials.testimonial3.text')}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;