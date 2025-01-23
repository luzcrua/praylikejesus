import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  text: string;
  className?: string;
}

const TestimonialCard = ({ name, text, className }: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg",
        "border border-white/20 hover:border-gold/20 transition-all",
        className
      )}
    >
      <p className="text-gray-700 italic mb-4">&quot;{text}&quot;</p>
      <p className="text-primary font-semibold">{name}</p>
    </div>
  );
};

export default TestimonialCard;