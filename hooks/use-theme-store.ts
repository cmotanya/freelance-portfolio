"use client";

import { useEffect, useSyncExternalStore } from "react";

export type ThemeMode = "light" | "dark";

const UPDATE_THEME_EVENT = "update-theme";
const getMediaQuery = () =>
  typeof window != "undefined"
    ? window.matchMedia("(prefers-color-scheme:dark)")
    : null;

function applyTheme(mode: ThemeMode) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(mode);
  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.style.colorScheme = mode;
}

const themeStore = {
  subscribe(callback: () => void) {
    window.addEventListener("storage", callback);
    window.addEventListener(UPDATE_THEME_EVENT, callback);

    const mediaQuery = getMediaQuery();
    mediaQuery?.addEventListener("change", callback);

    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener(UPDATE_THEME_EVENT, callback);
      mediaQuery?.removeEventListener("change", callback);
    };
  },

  getSnapshot(): ThemeMode {
    if (typeof window === "undefined") return "light";

    const stored = localStorage.getItem("theme") as ThemeMode | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
  },

  getServerSnapshot(): ThemeMode {
    return "light";
  },

  setTheme(next: ThemeMode) {
    localStorage.setItem("theme", next);
    applyTheme(next);

    window.dispatchEvent(new Event(UPDATE_THEME_EVENT));
  },
};

export function useTheme() {
  const mode = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  return { mode, setTheme: themeStore.setTheme };
}
