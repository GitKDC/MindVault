import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}

const AuthButton = forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ className, children, loading, variant = "primary", disabled, ...props }, ref) => {
    const variants = {
      primary: cn(
        "bg-primary text-primary-foreground",
        "hover:opacity-90",
        "shadow-lg shadow-primary/25"
      ),
      secondary: cn(
        "bg-secondary text-secondary-foreground",
        "hover:bg-secondary/80",
        "border border-border"
      ),
      ghost: cn(
        "bg-transparent text-foreground",
        "hover:bg-secondary/50"
      ),
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "relative w-full rounded-lg px-6 py-3.5 font-medium",
          "transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.98]",
          variants[variant],
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Please wait...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

AuthButton.displayName = "AuthButton";

export { AuthButton };
