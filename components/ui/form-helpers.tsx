import { cn } from "@/lib/utils";

export const getInputClass = (
  hasError: string[] | undefined,
  isTouched: boolean,
) =>
  cn(
    "h-13 ps-4 rounded-xl placeholder:text-muted-foreground/50 transition border border-border focus-visible:border-muted-foreground/50 transition",
    hasError ? "border-error/40" : isTouched && "border-success",
  );

export const errorMessage = (message: string | undefined) =>
  message && (
    <p role="alert" className="text-error mt-0.5 ml-2 text-xs font-medium">
      {message}
    </p>
  );

export const labelClass =
  "text-muted-foreground font-semibold tracking-wide uppercase";
