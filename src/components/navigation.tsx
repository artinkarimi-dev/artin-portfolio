"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { Arrow } from "./ui";
import { navigation as links } from "@/data/site";
export function Navigation({
  name,
  brandName,
}: {
  name: string;
  brandName: string;
}) {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.menuOpen = "true";
    lenis?.stop();
    const media = window.matchMedia("(min-width: 1100px)");
    const close = () => setOpen(false);
    const focusFrame = requestAnimationFrame(() => {
      panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    });
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          trigger.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        if (event.shiftKey && document.activeElement === items[0]) {
          event.preventDefault();
          items.at(-1)?.focus();
        } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
          event.preventDefault();
          items[0]?.focus();
        }
      }
    };
    document.addEventListener("keydown", keydown);
    media.addEventListener("change", close);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previous;
      delete document.body.dataset.menuOpen;
      lenis?.start();
      document.removeEventListener("keydown", keydown);
      media.removeEventListener("change", close);
    };
  }, [lenis, open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link
          className="wordmark"
          href="/"
          onClick={() => setOpen(false)}
          aria-label={`${name} home`}
        >
          <span className="brand-mark" aria-hidden="true">
            a<span>.</span>
          </span>
          <span>
            {brandName}
            <span className="wordmark-dot">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
          <Link href="/#contact" className="nav-contact">
            Let’s talk <Arrow diagonal />
          </Link>
        </nav>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && (
        <>
          <button
            className="menu-scrim"
            aria-label="Close navigation"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <nav
            ref={panel}
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            data-lenis-prevent
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget) &&
                event.relatedTarget !== trigger.current
              )
                setOpen(false);
            }}
          >
            {[...links, ["Contact", "/#contact"]].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>
                {label}
                <Arrow diagonal />
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}
