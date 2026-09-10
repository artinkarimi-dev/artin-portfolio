import { useEffect, useId, useState } from "react";
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
        <FeaturedWork copy={copy} />
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
      className="site-header fixed inset-x-0 top-0 z-30 px-4 pt-5 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-start gap-4 md:grid-cols-[1fr_auto_1fr]" aria-label="Primary navigation">
        <a
          href="#top"
          className="identity-mark group grid min-w-0 gap-1 py-1 text-start outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          <span className="flex items-center gap-3">
            <span className="identity-rule" aria-hidden="true" />
            <span className="truncate text-sm font-semibold text-primary">
              {copy.nav.identity}
            </span>
          </span>
          <span className="truncate ps-8 text-xs text-secondary">{copy.nav.role}</span>
        </a>

        <div className="nav-axis hidden items-center gap-6 text-sm text-secondary md:flex">
          <a
            href="#featured-work"
            className="nav-link outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            {copy.nav.work}
          </a>
          <span className="nav-note">{copy.nav.thinking}</span>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            className="language-switch min-h-11 outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            onClick={onLanguageChange}
            aria-label={copy.nav.languageLabel}
          >
            <span className={language === "en" ? "is-active" : ""}>EN</span>
            <span aria-hidden="true">/</span>
            <span className={language === "fa" ? "is-active" : ""}>فا</span>
          </button>
          <a
            href="#contact-intent"
            className="contact-link hidden min-h-11 items-center outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:inline-flex"
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
  const springX = useSpring(pointerX, { stiffness: 118, damping: 27, mass: 0.38 });
  const springY = useSpring(pointerY, { stiffness: 118, damping: 27, mass: 0.38 });
  const fieldX = useTransform(springX, [-1, 1], [-14, 14]);
  const fieldY = useTransform(springY, [-1, 1], [-10, 10]);
  const rotateY = useTransform(springX, [-1, 1], [-4.5, 4.5]);
  const rotateX = useTransform(springY, [-1, 1], [3.5, -3.5]);

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
      className="hero-section relative isolate flex min-h-dvh items-center px-4 pb-10 pt-28 sm:px-6 lg:px-8"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="workspace-grid" aria-hidden="true" />
      <motion.div
        className="workspace-line workspace-line-a"
        style={shouldReduceMotion ? undefined : { x: fieldX }}
        aria-hidden="true"
      />
      <motion.div
        className="workspace-line workspace-line-b"
        style={shouldReduceMotion ? undefined : { y: fieldY }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.62fr)] lg:gap-12">
        <motion.div
          className="hero-copy relative max-w-5xl text-start"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-eyebrow">{copy.hero.eyebrow}</p>
          <h1 className="hero-title">
            <span>{copy.hero.titleAccent}</span>
            {copy.hero.title}
          </h1>
          <p className="hero-body">{copy.hero.body}</p>

          <div id="contact-intent" className="hero-actions">
            <a href="#contact-intent" className="action-primary">
              {copy.hero.primaryCta}
            </a>
            <a href="#featured-work" className="action-secondary">
              {copy.hero.secondaryCta}
            </a>
          </div>
          <p className="hero-contact-note">{copy.hero.contactNote}</p>
        </motion.div>

        <motion.aside
          className="hero-field"
          style={shouldReduceMotion ? undefined : { rotateX, rotateY }}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.54, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          aria-label={copy.hero.statusValue}
        >
          <div className="field-signature" aria-hidden="true">
            AK
          </div>
          <div className="field-notes">
            <p>
              <span>{copy.hero.statusLabel}</span>
              {copy.hero.statusValue}
            </p>
            <p>
              <span>{copy.hero.detailLabel}</span>
              {copy.hero.detailValue}
            </p>
          </div>
          <div id="first-proof" className="field-proof-line" tabIndex={-1}>
            <span>{copy.hero.proofOne}</span>
            <span>{copy.hero.proofTwo}</span>
            <span>{copy.hero.proofThree}</span>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function FeaturedWork({ copy }: { copy: SiteCopy }) {
  const shouldReduceMotion = useReducedMotion();
  const detailId = useId();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 130, damping: 30, mass: 0.35 });
  const springY = useSpring(pointerY, { stiffness: 130, damping: 30, mass: 0.35 });
  const rotateY = useTransform(springX, [-1, 1], [-3.5, 3.5]);
  const rotateX = useTransform(springY, [-1, 1], [3, -3]);

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
      id="featured-work"
      className="featured-work relative isolate px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="featured-work-title"
    >
      <div className="section-axis" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(24rem,1fr)] lg:items-start">
        <motion.div
          className="work-intro text-start"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-kicker">{copy.featuredWork.sectionLabel}</p>
          <h2 id="featured-work-title">{copy.featuredWork.title}</h2>
          <p>{copy.featuredWork.summary}</p>

          <dl className="work-meta">
            <div>
              <dt>{copy.featuredWork.resultLabel}</dt>
              <dd>{copy.featuredWork.resultValue}</dd>
            </div>
            <div>
              <dt>{copy.featuredWork.roleLabel}</dt>
              <dd>{copy.featuredWork.roleValue}</dd>
            </div>
          </dl>

          <button
            type="button"
            className="story-toggle"
            aria-expanded={isDetailOpen}
            aria-controls={detailId}
            onClick={() => setIsDetailOpen((current) => !current)}
          >
            {copy.featuredWork.actionLabel}
          </button>
          <motion.p
            id={detailId}
            className="story-note"
            initial={false}
            animate={{
              opacity: isDetailOpen ? 1 : 0.74,
              y: shouldReduceMotion || isDetailOpen ? 0 : -2,
            }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {isDetailOpen
              ? copy.featuredWork.activeDetail
              : copy.featuredWork.actionDetail}
          </motion.p>
        </motion.div>

        <motion.article
          className="artifact-stage"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          aria-label={copy.featuredWork.mediaLabel}
        >
          <motion.div
            className="artifact-plane"
            style={shouldReduceMotion ? undefined : { rotateX, rotateY }}
          >
            {/* Replace .artifact-map with an approved real Innoverse screenshot later. */}
            <div className="artifact-map">
              <div className="artifact-title-row">
                <span>{copy.featuredWork.eyebrow}</span>
                <strong>{copy.featuredWork.resultValue}</strong>
              </div>
              <div className="flow-thread" aria-hidden="true" />
              <ul className="artifact-nodes">
                {copy.featuredWork.artifactItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="artifact-caption">
                <span>{copy.featuredWork.artifactTitle}</span>
                <p>{copy.featuredWork.artifactNote}</p>
              </div>
            </div>

            <div className="artifact-annotation">
              <span>{copy.featuredWork.scopeLabel}</span>
              <p>{copy.featuredWork.scopeValue}</p>
            </div>

            <div className="work-system">
              <h3>{copy.featuredWork.systemTitle}</h3>
              <ul>
                {copy.featuredWork.systemItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="work-stack" aria-label={copy.featuredWork.stackLabel}>
              {copy.featuredWork.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
