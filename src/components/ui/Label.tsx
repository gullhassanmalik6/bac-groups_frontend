import { forwardRef, type LabelHTMLAttributes } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

export const Label = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }
>(({ className, children, required, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn("text-sm font-medium text-foreground", className)}
    {...props}
  >
    {children}
    {required ? <span className="ms-0.5 text-red-500">*</span> : null}
  </LabelPrimitive.Root>
));

Label.displayName = "Label";
