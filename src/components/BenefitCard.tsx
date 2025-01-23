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
        "flex flex-col items-center text-center p-6",
        "hover:transform hover:scale-105 transition-all",
        className
      )}
    >
      <Icon className="w-12 h-12 text-gold mb-4" />
      <h3 className="text-xl font-serif font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;