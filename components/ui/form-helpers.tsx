import { cn } from "@/lib/utils";

export const getInputClass = (
  hasError: string[] | undefined,
  isTouched: boolean,
) =>
  cn(
    "h-13 ps-4 rounded-2xl placeholder:text-foreground/40 transition border focus-visible:border-foreground/50 transition",
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
