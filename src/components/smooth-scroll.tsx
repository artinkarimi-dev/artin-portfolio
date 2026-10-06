"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { LenisOptions } from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollEffects } from "./scroll-effects";

const LENIS_OPTIONS = {
  autoRaf: true,
  autoResize: true,
  smoothWheel: true,
  // A slightly higher lerp keeps the premium interpolation while removing the
  // "page is catching up with the wheel" feeling of the previous 0.115 value.
  lerp: 0.17,
  wheelMultiplier: 1,
  syncTouch: false,
  gestureOrientation: "vertical",
  orientation: "vertical",
  overscroll: false,
  anchors: {
    offset: -96,
    lerp: 0.18,
  },
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
} satisfies LenisOptions;

function getHeaderOffset() {
  const header = document.querySelector<HTMLElement>(".site-header");
  return -(header?.offsetHeight ?? 82) - 18;
}

function RouteScrollSync() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const frame = requestAnimationFrame(() => {
      lenis.resize();

      // Let Next.js/browser restoration own normal route navigation. For a
      // cross-route hash, align the target below the sticky header once the
      // destination DOM exists.
      if (window.location.hash) {
        lenis.scrollTo(window.location.hash, {
          offset: getHeaderOffset(),
          immediate: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [lenis, pathname]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      <RouteScrollSync />
      <ScrollEffects />
      {children}
    </ReactLenis>
  );
}
