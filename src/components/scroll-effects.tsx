"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  ".section-heading",
  ".project-feature",
  ".about-grid",
  ".expertise-grid",
  ".process-layout",
  ".ai-grid",
  ".experience-list",
  ".stack-grid",
  ".collaboration-panel",
  ".contact-panel",
  ".case-intro-grid",
  ".case-body > section",
].join(",");

/**
 * Adds one-shot entrance motion without subscribing to the scroll event.
 * IntersectionObserver lets the browser batch visibility work and, unlike
 * scroll-linked transforms, stops doing animation work after an element is shown.
 */
export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );

    if (elements.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.scrollReveal = "visible";
      });
      return;
    }

    const viewportHeight = window.innerHeight;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          element.dataset.scrollReveal = "visible";
          observer.unobserve(element);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.06,
      },
    );

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Never hide content already visible when hydration finishes. This avoids
      // a flash/reveal on the hero or on browser back/forward restoration.
      if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
        element.dataset.scrollReveal = "visible";
        return;
      }

      element.dataset.scrollReveal = "pending";
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
