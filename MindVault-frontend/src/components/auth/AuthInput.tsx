import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className, icon, error, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-lg border border-border bg-secondary/50 px-4 py-3.5 text-foreground placeholder:text-muted-foreground",
            "transition-all duration-300 ease-out",
            "focus:outline-none focus:border-primary input-glow",
            "hover:border-muted-foreground/50",
            icon && "pl-12",
            error && "border-destructive",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export { AuthInput };
