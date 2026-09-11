import Lenis from "lenis";
import { type ReactNode, useEffect } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

const anchorSelector = 'a[href^="#"]:not([href="#"])';

function getHeaderOffset() {
  const rawOffset = getComputedStyle(document.documentElement)
    .getPropertyValue("--sticky-offset")
    .trim();
  const offset = Number.parseFloat(rawOffset);

  return Number.isFinite(offset) ? offset * -1 : -104;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (reduceMotion.matches || coarsePointer.matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.02,
      easing: (time: number) => 1 - Math.pow(1 - time, 3),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.82,
    });

    let frameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    }

    function handleAnchorClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        anchorSelector,
      );

      if (!anchor || anchor.origin !== window.location.origin || anchor.pathname !== window.location.pathname) {
        return;
      }

      const target = document.getElementById(decodeURIComponent(anchor.hash.slice(1)));

      if (!target) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", anchor.hash);
      lenis.scrollTo(target, {
        offset: getHeaderOffset(),
        duration: 1,
        immediate: false,
      });
    }

    frameId = window.requestAnimationFrame(raf);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
