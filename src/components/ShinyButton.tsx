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
          return "before:from-transparent before:via-[#D946EF]/30 before:to-transparent bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-[0_0_15px_rgba(139,92,246,0.5)]";
        case "gold":
          return "before:from-transparent before:via-gold/30 before:to-transparent bg-gold hover:bg-gold-dark";
        default:
          return "before:from-transparent before:via-primary-light/30 before:to-transparent bg-primary hover:bg-primary-dark";
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:animate-shine before:bg-[length:200%_100%]",
          "hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          getVariantStyles(),
          "transform hover:scale-105 active:scale-95",
          "z-10 whitespace-normal text-sm md:text-base",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;