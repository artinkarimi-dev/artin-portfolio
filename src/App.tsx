import { useEffect, useId, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import innoverseLogin from "./assets/innoverse/innoverse1.png";
import innoverseDashboard from "./assets/innoverse/innoverse2.png";
import innoverseProblems from "./assets/innoverse/innoverse3.png";
import innoverseLeaderboard from "./assets/innoverse/innoverse4.png";
import { siteCopy, type Language, type SiteCopy } from "./content";

const languageStorageKey = "artin-portfolio-language";

const innoverseScreens = [
  {
    id: "entry",
    image: innoverseLogin,
  },
  {
    id: "dashboard",
    image: innoverseDashboard,
  },
  {
    id: "problems",
    image: innoverseProblems,
  },
  {
    id: "leaderboard",
    image: innoverseLeaderboard,
  },
] as const;

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
    <div className="min-h-dvh overflow-x-clip bg-portfolio text-primary antialiased">
      <SiteHeader
        copy={copy}
        language={language}
        onLanguageChange={() => setLanguage(language === "en" ? "fa" : "en")}
      />
      <main>
        <Hero copy={copy} />
        <FeaturedWork copy={copy} />
        <HowIWork copy={copy} />
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
      className="sticky inset-x-0 top-0 z-30 px-4 pt-3 sm:px-6 lg:px-8"
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
          <a
            href="#featured-work"
            className="inline-flex min-h-10 items-center rounded-[0.65rem] px-3 text-primary outline-none transition hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            {copy.nav.work}
          </a>
          <a
            href="#thinking"
            className="inline-flex min-h-10 items-center rounded-[0.65rem] px-3 outline-none transition hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            {copy.nav.thinking}
          </a>
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
      className="relative isolate flex min-h-[calc(100dvh-5.5rem)] items-center px-4 pb-8 pt-6 sm:px-6 sm:pt-8 lg:px-8"
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
          <div className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#featured-work"
                className="inline-flex min-h-12 items-center justify-center rounded-control bg-accent px-5 text-sm font-semibold text-accent-ink outline-none transition hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                href="#innoverse-screen"
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

function FeaturedWork({ copy }: { copy: SiteCopy }) {
  const shouldReduceMotion = useReducedMotion();
  const screenshotLabelId = useId();
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 130, damping: 28, mass: 0.35 });
  const springY = useSpring(pointerY, { stiffness: 130, damping: 28, mass: 0.35 });
  const rotateY = useTransform(springX, [-1, 1], [-3.5, 3.5]);
  const rotateX = useTransform(springY, [-1, 1], [2.5, -2.5]);
  const activeScreen = innoverseScreens[activeScreenIndex];

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

  function handleScreenSelectorClick(event: React.MouseEvent<HTMLDivElement>) {
    const directButton = (event.target as Element).closest<HTMLButtonElement>(
      "button[data-screen-index]",
    );

    if (directButton) {
      setActiveScreenIndex(Number(directButton.dataset.screenIndex));
      return;
    }

    const buttons = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>("button[data-screen-index]"),
    );
    const fallbackButton = buttons.find((button) => {
      const rect = button.getBoundingClientRect();
      return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );
    });

    if (fallbackButton) {
      setActiveScreenIndex(Number(fallbackButton.dataset.screenIndex));
    }
  }

  return (
    <section
      id="featured-work"
      className="featured-work relative isolate px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="featured-work-title"
    >
      <div className="work-connector" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-3xl text-start">
            <p className="mb-3 text-sm font-semibold text-accent">
              {copy.featuredWork.sectionLabel}
            </p>
            <h2
              id="featured-work-title"
              className="text-balance text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-tight tracking-normal text-primary"
            >
              {copy.featuredWork.title}
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.42fr)_minmax(18rem,0.58fr)] lg:items-start">
          <motion.article
            className="work-showcase"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            aria-label={copy.featuredWork.mediaLabel}
          >
            <motion.div
              className="work-media"
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotateX,
                      rotateY,
                }
              }
            >
              <div className="work-window-bar">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <p>{copy.featuredWork.mediaNote}</p>
              </div>
              <div className="work-screenshot-shell">
                <motion.img
                  key={activeScreen.id}
                  src={activeScreen.image}
                  width="3200"
                  height="1800"
                  alt={copy.featuredWork.screens[activeScreenIndex].alt}
                  id="innoverse-screen"
                  decoding="async"
                  fetchPriority={activeScreenIndex === 0 ? "high" : "auto"}
                  initial={{ opacity: 0.2, scale: shouldReduceMotion ? 1 : 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div
                className="work-screen-selector"
                role="tablist"
                aria-labelledby={screenshotLabelId}
                onClick={handleScreenSelectorClick}
              >
                <p id={screenshotLabelId}>{copy.featuredWork.mediaPlaceholder}</p>
                {innoverseScreens.map((screen, index) => (
                  <button
                    key={screen.id}
                    type="button"
                    role="tab"
                    aria-selected={activeScreenIndex === index}
                    aria-controls="innoverse-screen"
                    data-screen-index={index}
                    className={activeScreenIndex === index ? "is-active" : ""}
                    onClick={() => setActiveScreenIndex(index)}
                  >
                    {copy.featuredWork.screens[index].label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.article>

          <motion.aside
            className="work-detail"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold text-accent">
              {copy.featuredWork.eyebrow}
            </p>
            <p className="mt-4 text-lg leading-8 text-secondary">
              {copy.featuredWork.summary}
            </p>

            <dl className="work-meta mt-8">
              <div>
                <dt>{copy.featuredWork.resultLabel}</dt>
                <dd>{copy.featuredWork.resultValue}</dd>
              </div>
              <div>
                <dt>{copy.featuredWork.roleLabel}</dt>
                <dd>{copy.featuredWork.roleValue}</dd>
              </div>
              <div>
                <dt>{copy.featuredWork.scopeLabel}</dt>
                <dd>{copy.featuredWork.scopeValue}</dd>
              </div>
            </dl>

            <div className="mt-7">
              <h3>{copy.featuredWork.systemTitle}</h3>
              <ul className="mt-3 grid gap-2">
                {copy.featuredWork.systemItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted">
                {copy.featuredWork.stackLabel}
              </p>
              <p className="work-stack-line mt-2">{copy.featuredWork.stack.join(" / ")}</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function HowIWork({ copy }: { copy: SiteCopy }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="thinking"
      className="thinking-section relative isolate px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="thinking-title"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(18rem,0.48fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          className="thinking-intro text-start"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold text-accent">{copy.howIWork.eyebrow}</p>
          <h2
            id="thinking-title"
            className="mt-4 max-w-2xl text-balance text-[clamp(2.15rem,4.4vw,4.6rem)] font-semibold leading-[1.02] tracking-normal text-primary"
          >
            {copy.howIWork.title}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-secondary">
            {copy.howIWork.intro}
          </p>
        </motion.div>

        <div className="proof-ledger" aria-label={copy.howIWork.eyebrow}>
          {copy.howIWork.proofs.map((proof, index) => (
            <motion.article
              key={proof.number}
              className="proof-row"
              tabIndex={0}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="proof-index" aria-hidden="true">
                {proof.number}
              </div>
              <div className="proof-content">
                <p className="proof-context">{proof.context}</p>
                <h3>{proof.title}</h3>
                <p>{proof.evidence}</p>
                <ul className="proof-trace" aria-label={proof.context}>
                  {proof.trace.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
