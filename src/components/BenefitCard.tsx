import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const BenefitCard = ({ icon: Icon, title, description, className }: BenefitCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-8 rounded-xl",
        "bg-white/10 backdrop-blur-lg border border-white/20",
        "hover:bg-white/20 hover:border-neon-purple/30 transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] animate-fade-up",
        className
      )}
    >
      <Icon className="w-12 h-12 text-neon-purple mb-4 animate-pulse" />
      <h3 className="text-xl font-serif font-bold text-white mb-2 hover:text-neon-pink transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default BenefitCard;