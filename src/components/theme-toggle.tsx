"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

const emptySubscribe = () => () => {};

/** True only once mounted on the client — avoids a hydration mismatch on the theme icon. */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle({ ariaLabel = "Toggle color theme" }: { ariaLabel?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={ariaLabel}
      className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
    >
      {mounted && resolvedTheme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}
