import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ShinyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "neon";
}

const ShinyButton = forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "neon":
          return "before:from-[#D946EF] before:via-[#8B5CF6] before:to-[#D946EF] bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-[0_0_15px_rgba(139,92,246,0.5)]";
        case "gold":
          return "before:from-gold-light before:via-gold before:to-gold-light bg-gold hover:bg-gold-dark";
        default:
          return "before:from-primary-light before:via-primary before:to-primary-light bg-primary hover:bg-primary-dark";
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:animate-shine",
          "hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          getVariantStyles(),
          "transform hover:scale-105 active:scale-95",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;