import { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import jazirehHome from "../assets/jazireh/jazireh1.png";
import jazirehData from "../assets/jazireh/jazireh2.png";
import jazirehRadar from "../assets/jazireh/jazireh4.png";
import type { SiteCopy } from "../content";

type JazirehProjectProps = {
  copy: SiteCopy;
};

const jazirehScreens = [
  {
    id: "home",
    image: jazirehHome,
    width: 3200,
    height: 1579,
  },
  {
    id: "data",
    image: jazirehData,
    width: 3200,
    height: 1595,
  },
  {
    id: "radar",
    image: jazirehRadar,
    width: 3200,
    height: 1585,
  },
] as const;

export function JazirehProject({ copy }: JazirehProjectProps) {
  const shouldReduceMotion = useReducedMotion();
  const tablistLabelId = useId();
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen = jazirehScreens[activeScreenIndex];
  const activeCopy = copy.jazireh.screens[activeScreenIndex];

  return (
    <section
      id="jazireh"
      className="jazireh-section relative isolate px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="jazireh-title"
    >
      <div className="jazireh-orbit" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl gap-9 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:items-center lg:gap-14">
        <motion.article
          className="jazireh-media"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          aria-label={copy.jazireh.mediaLabel}
        >
          <div className="jazireh-media-bar">
            <span aria-hidden="true" />
            <p>{activeCopy.note}</p>
          </div>
          <div className="jazireh-browser-frame">
            <motion.img
              key={activeScreen.id}
              src={activeScreen.image}
              width={activeScreen.width}
              height={activeScreen.height}
              alt={activeCopy.alt}
              decoding="async"
              loading="lazy"
              initial={{ opacity: 0.2, scale: shouldReduceMotion ? 1 : 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div
            className="jazireh-screen-selector"
            role="tablist"
            aria-labelledby={tablistLabelId}
          >
            <p id={tablistLabelId}>{copy.jazireh.mediaNote}</p>
            {jazirehScreens.map((screen, index) => (
              <button
                key={screen.id}
                type="button"
                role="tab"
                aria-selected={activeScreenIndex === index}
                className={activeScreenIndex === index ? "is-active" : ""}
                onClick={() => setActiveScreenIndex(index)}
              >
                {copy.jazireh.screens[index].label}
              </button>
            ))}
          </div>
        </motion.article>

        <motion.div
          className="jazireh-story text-start"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.58, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold text-accent">{copy.jazireh.eyebrow}</p>
          <h2
            id="jazireh-title"
            className="mt-4 max-w-3xl text-balance text-[clamp(2.2rem,4.6vw,4.8rem)] font-semibold leading-[1.01] tracking-normal text-primary"
          >
            {copy.jazireh.title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-secondary">
            {copy.jazireh.intro}
          </p>
          <p className="mt-4 text-pretty text-base leading-7 text-secondary">
            {copy.jazireh.supporting}
          </p>
          <dl className="jazireh-meta mt-8">
            {copy.jazireh.details.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
