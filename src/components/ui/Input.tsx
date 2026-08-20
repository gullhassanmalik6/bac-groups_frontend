import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type = "text", id, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <input
          id={id}
          type={type}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={error && id ? `${id}-error` : undefined}
          className={cn(
            "flex h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-royal-500 focus-visible:ring-2 focus-visible:ring-royal-500/20 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
            className,
          )}
          {...props}
        />
        {error ? (
          <p id={id ? `${id}-error` : undefined} className="text-xs text-red-600 dark:text-red-400">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
