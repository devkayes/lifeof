"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function readTheme(): Theme | null {
  const t = document.documentElement.dataset.theme;
  return t === "dark" || t === "light" ? t : null;
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function applyTheme(theme: Theme, persist: boolean) {
  document.documentElement.dataset.theme = theme;
  if (persist) {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // storage unavailable (private mode etc.) — theme still applies for this visit
    }
  }
}

export default function ThemeToggle() {
  // null on the server; the real value is read after hydration
  const theme = useSyncExternalStore(subscribe, readTheme, () => null);

  // Follow the system setting until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {}
      if (saved !== "light" && saved !== "dark") {
        applyTheme(e.matches ? "dark" : "light", false);
      }
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(isDark ? "light" : "dark", true)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="fixed right-4 top-4 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-rule bg-bg/80 text-ink backdrop-blur transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-6 sm:top-6"
    >
      {theme === null ? null : isDark ? (
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
