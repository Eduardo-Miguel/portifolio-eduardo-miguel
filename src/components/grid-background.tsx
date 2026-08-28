"use client";

import { useEffect, useRef } from "react";

/** A faint grid that reveals itself in a soft spotlight around the pointer. Pure CSS + one listener, no canvas/WebGL. */
export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      node.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    };

    node.addEventListener("pointermove", handleMove);
    return () => node.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-70 transition-opacity"
      style={{
        backgroundImage:
          "linear-gradient(to right, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage:
          "radial-gradient(350px at var(--mouse-x, 50%) var(--mouse-y, 0px), black, transparent)",
        WebkitMaskImage:
          "radial-gradient(350px at var(--mouse-x, 50%) var(--mouse-y, 0px), black, transparent)",
      }}
    />
  );
}
