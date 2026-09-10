import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import jazirehHome from "../assets/jazireh/jazireh1.png";
import type { SiteCopy } from "../content";

type JazirehProductionStoryProps = {
  copy: SiteCopy;
};

export function JazirehProductionStory({ copy }: JazirehProductionStoryProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const progress = `${(activeStage / (copy.jazireh.stages.length - 1)) * 100}%`;

  return (
    <section
      className="jazireh-section relative isolate px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="jazireh-title"
    >
      <div className="jazireh-orbit" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(24rem,0.72fr)] lg:items-center lg:gap-14">
        <motion.div
          className="jazireh-story text-start"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold text-accent">{copy.jazireh.eyebrow}</p>
          <h2
            id="jazireh-title"
            className="mt-4 max-w-4xl text-balance text-[clamp(2.1rem,4.6vw,4.85rem)] font-semibold leading-[1.01] tracking-normal text-primary"
          >
            {copy.jazireh.title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-secondary">
            {copy.jazireh.intro}
          </p>

          <div className="diagnostic-path mt-10">
            <div className="diagnostic-rail" aria-hidden="true">
              <motion.span
                style={{ inlineSize: shouldReduceMotion ? "100%" : progress }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            {copy.jazireh.stages.map((stage, index) => (
              <article
                key={stage.id}
                className={`diagnostic-step ${activeStage === index ? "is-active" : ""}`}
                tabIndex={0}
                onPointerEnter={() => setActiveStage(index)}
                onFocus={() => setActiveStage(index)}
              >
                <div className="diagnostic-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="diagnostic-label">{stage.label}</p>
                  <dl className="diagnostic-reading">
                    <div>
                      <dt>{copy.jazireh.technicalLabel}</dt>
                      <dd>{stage.technical}</dd>
                    </div>
                    <div>
                      <dt>{copy.jazireh.plainLabel}</dt>
                      <dd>{stage.plain}</dd>
                    </div>
                  </dl>
                  <p className="diagnostic-detail">{stage.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="jazireh-evidence"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.64, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="jazireh-media" aria-label={copy.jazireh.mediaLabel}>
            <div className="jazireh-media-bar">
              <span aria-hidden="true" />
              <p>{copy.jazireh.mediaNote}</p>
            </div>
            <motion.img
              src={jazirehHome}
              width="3200"
              height="1579"
              alt={copy.jazireh.mediaAlt}
              decoding="async"
              loading="lazy"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: activeStage === 0 ? 1.015 : activeStage === 1 ? 1.045 : 1.025,
                      x: activeStage === 1 ? "-3%" : activeStage === 2 ? "2%" : "0%",
                    }
              }
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="response-contract" aria-label={copy.jazireh.contract.receivedLabel}>
            <div>
              <p>{copy.jazireh.contract.expectedLabel}</p>
              <strong>{copy.jazireh.contract.expectedValue}</strong>
            </div>
            <span className="contract-mismatch" aria-hidden="true" />
            <div>
              <p>{copy.jazireh.contract.receivedLabel}</p>
              <ul>
                {copy.jazireh.contract.receivedValues.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="jazireh-resolution mx-auto mt-10 w-full max-w-7xl"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>{copy.jazireh.resolution}</p>
        <span>{copy.jazireh.contextLine}</span>
      </motion.div>
    </section>
  );
}
