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
        "bg-white/5 backdrop-blur-md p-6 rounded-xl",
        "border border-white/10 hover:border-neon-purple/30",
        "hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300",
        "animate-fade-up",
        className
      )}
    >
      <p className="text-gray-300 italic mb-4">&quot;{text}&quot;</p>
      <p className="text-neon-pink font-semibold">{name}</p>
    </div>
  );
};

export default TestimonialCard;