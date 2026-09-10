import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { siteCopy, type Language, type SiteCopy } from "./content";

const languageStorageKey = "artin-portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.localStorage.getItem(languageStorageKey) === "fa" ? "fa" : "en";
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = siteCopy[language];

  useEffect(() => {
    document.documentElement.lang = copy.meta.lang;
    document.documentElement.dir = copy.meta.dir;
    window.localStorage.setItem(languageStorageKey, language);
  }, [copy.meta.dir, copy.meta.lang, language]);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-portfolio text-primary antialiased">
      <SiteHeader
        copy={copy}
        language={language}
        onLanguageChange={() => setLanguage(language === "en" ? "fa" : "en")}
      />
      <main>
        <Hero copy={copy} />
      </main>
    </div>
  );
}

type HeaderProps = {
  copy: SiteCopy;
  language: Language;
  onLanguageChange: () => void;
};

function SiteHeader({ copy, language, onLanguageChange }: HeaderProps) {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 rounded-shell border border-subtle bg-surface/88 px-3 py-2 shadow-shell backdrop-blur-xl sm:px-4"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-3 rounded-control px-2 py-2 text-start outline-none transition focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          <span
            className="grid size-10 shrink-0 place-items-center rounded-control border border-subtle bg-elevated text-sm font-semibold text-primary shadow-inner-soft transition group-hover:border-accent/45"
            aria-hidden="true"
          >
            AK
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-normal">
              {copy.nav.identity}
            </span>
            <span className="block truncate text-xs text-secondary">
              {copy.nav.role}
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-control border border-subtle bg-elevated/70 p-1 text-sm text-secondary md:flex">
          <span className="rounded-[0.65rem] px-3 py-2 text-primary">
            {copy.nav.work}
          </span>
          <span className="px-3 py-2">{copy.nav.thinking}</span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="relative inline-flex min-h-11 items-center rounded-control border border-subtle bg-elevated px-1 text-sm font-medium text-secondary outline-none transition hover:border-accent/45 hover:text-primary focus-visible:ring-2 focus-visible:ring-accent/70"
            onClick={onLanguageChange}
            aria-label={copy.nav.languageLabel}
          >
            <span
              className={`rounded-[0.65rem] px-2.5 py-2 transition ${
                language === "en" ? "bg-accent text-accent-ink" : ""
              }`}
            >
              EN
            </span>
            <span
              className={`rounded-[0.65rem] px-2.5 py-2 transition ${
                language === "fa" ? "bg-accent text-accent-ink" : ""
              }`}
            >
              فا
            </span>
          </button>
          <a
            href="#contact-intent"
            className="hidden min-h-11 items-center rounded-control border border-accent/45 bg-accent px-4 text-sm font-semibold text-accent-ink outline-none transition hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-accent/70 sm:inline-flex"
          >
            {copy.nav.contact}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

function Hero({ copy }: { copy: SiteCopy }) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.4 });
  const rotateY = useTransform(springX, [-1, 1], [-8, 8]);
  const rotateX = useTransform(springY, [-1, 1], [7, -7]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set((x - 0.5) * 2);
    pointerY.set((y - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh items-center px-4 pb-8 pt-24 sm:px-6 sm:pt-28 lg:px-8"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-light" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.8fr)] lg:gap-12">
        <motion.div
          className="max-w-4xl text-start"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex min-h-10 items-center rounded-full border border-subtle bg-elevated/70 px-4 text-sm font-medium text-secondary">
            {copy.hero.eyebrow}
          </p>
          <h1 className="max-w-5xl text-balance text-[clamp(2.55rem,5vw,4.85rem)] font-semibold leading-[0.97] tracking-normal text-primary">
            <span className="block text-accent">{copy.hero.titleAccent}</span>
            <span className="block">{copy.hero.title}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-secondary sm:text-xl sm:leading-9">
            {copy.hero.body}
          </p>
          <div id="contact-intent" className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact-intent"
                className="inline-flex min-h-12 items-center justify-center rounded-control bg-accent px-5 text-sm font-semibold text-accent-ink outline-none transition hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                href="#first-proof"
                className="inline-flex min-h-12 items-center justify-center rounded-control border border-subtle bg-elevated px-5 text-sm font-semibold text-primary outline-none transition hover:-translate-y-0.5 hover:border-accent/45 focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">
              {copy.hero.contactNote}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hero-stage mx-auto w-full max-w-[30rem] lg:max-w-none"
          style={
            shouldReduceMotion
              ? undefined
              : {
                  rotateX,
                  rotateY,
                }
          }
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          aria-label={copy.hero.statusValue}
        >
          <div className="hero-frame">
            <div className="hero-orbit" />
            <div className="hero-photo-slot" aria-hidden="true">
              <span>AK</span>
            </div>
            <div className="hero-panel hero-panel-primary">
              <span>{copy.hero.statusLabel}</span>
              <strong>{copy.hero.statusValue}</strong>
            </div>
            <div className="hero-panel hero-panel-secondary">
              <span>{copy.hero.detailLabel}</span>
              <strong>{copy.hero.detailValue}</strong>
            </div>
            <div id="first-proof" className="hero-proof-strip" tabIndex={-1}>
              <span>{copy.hero.proofOne}</span>
              <span>{copy.hero.proofTwo}</span>
              <span>{copy.hero.proofThree}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
