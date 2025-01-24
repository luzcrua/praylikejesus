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
          return "before:from-[#D946EF] before:via-[#8B5CF6] before:to-[#D946EF] after:from-[#D946EF]/30 after:via-[#8B5CF6]/30 after:to-[#D946EF]/30 bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-[0_0_15px_rgba(139,92,246,0.5)]";
        case "gold":
          return "before:from-gold-light before:via-gold before:to-gold-light after:from-gold-light/30 after:via-gold/30 after:to-gold-light/30 bg-gold hover:bg-gold-dark";
        default:
          return "before:from-primary-light before:via-primary before:to-primary-light after:from-primary-light/30 after:via-primary/30 after:to-primary-light/30 bg-primary hover:bg-primary-dark";
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:animate-shine before:-z-10",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:animate-shine-inner after:z-10",
          "hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          getVariantStyles(),
          "transform hover:scale-105 active:scale-95",
          "z-10 whitespace-normal text-sm md:text-base",
          className
        )}
        {...props}
      >
        <span className="relative z-20">{children}</span>
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;