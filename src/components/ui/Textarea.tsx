import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <textarea
          id={id}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={error && id ? `${id}-error` : undefined}
          className={cn(
            "flex min-h-32 w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-royal-500 focus-visible:ring-2 focus-visible:ring-royal-500/20 disabled:cursor-not-allowed disabled:opacity-50",
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

Textarea.displayName = "Textarea";
