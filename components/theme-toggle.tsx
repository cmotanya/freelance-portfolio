"use client";

import { useRef, useState } from "react";
import { SunIcon } from "./sun-icon";
import { MoonIcon } from "./moon-icon";
import { ThemeMode, useTheme } from "@/hooks/use-theme-store";

type IconPhase = "enter" | "exit";

export default function ThemeToggle() {
  const { mode, setTheme } = useTheme();
  const [phase, setPhase] = useState<IconPhase>("enter");
  const [ripple, setRipple] = useState(false);
  const animating = useRef(false);

  function toggleMode() {
    if (animating.current) return;
    animating.current = true;

    setPhase("exit");
    setRipple(true);

    setTimeout(() => {
      const next: ThemeMode = mode === "light" ? "dark" : "light";

      setTheme(next);
      setPhase("enter");

      setTimeout(() => {
        animating.current = false;
      }, 320);
    }, 180);
  }

  const isLight = mode === "light";

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      aria-pressed={!isLight}
      className={[
        "relative size-12 cursor-pointer overflow-hidden",
        "flex items-center justify-center",
        "transition-all duration-300 ease-out",
        "hover:scale-105 focus-visible:outline-none active:scale-95",
      ].join(" ")}
      onAnimationEnd={() => setRipple(false)}
    >
      {/* Ripple */}
      {ripple && (
        <span
          aria-hidden="true"
          className={[
            "absolute inset-0 rounded-full",
            "animate-[theme-ripple_500ms_ease-out_forwards]",
          ].join(" ")}
        />
      )}

      {/* Icon */}
      <span
        aria-hidden="true"
        className={[
          "absolute flex items-center justify-center",
          phase === "enter"
            ? "animate-[theme-icon-enter_320ms_cubic-bezier(0.34,1.4,0.64,1)_forwards]"
            : "animate-[theme-icon-exit_200ms_cubic-bezier(0.4,0,1,1)_forwards]",
        ].join(" ")}
      >
        {isLight ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
