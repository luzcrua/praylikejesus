import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ShinyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold";
}

const ShinyButton = forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:animate-shine",
          variant === "primary"
            ? "before:from-primary-light before:via-primary before:to-primary-light bg-primary hover:bg-primary-dark"
            : "before:from-gold-light before:via-gold before:to-gold-light bg-gold hover:bg-gold-dark",
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