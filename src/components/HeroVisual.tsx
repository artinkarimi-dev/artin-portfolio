import { lazy, Suspense, useEffect, useState } from "react";
import { type SiteCopy } from "../content";

const HeroThreeScene = lazy(() => import("./HeroThreeScene"));

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function useHeroEnhancement() {
  const [canEnhance, setCanEnhance] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wideEnough = window.matchMedia("(min-width: 640px)");

    function update() {
      setCanEnhance(!reduceMotion.matches && wideEnough.matches && canUseWebGL());
    }

    update();
    reduceMotion.addEventListener("change", update);
    wideEnough.addEventListener("change", update);

    return () => {
      reduceMotion.removeEventListener("change", update);
      wideEnough.removeEventListener("change", update);
    };
  }, []);

  return canEnhance;
}

function HeroInterfaceFallback() {
  return (
    <div className="hero-interface-fallback" aria-hidden="true">
      <span className="interface-plane interface-plane-one" />
      <span className="interface-plane interface-plane-two" />
      <span className="interface-plane interface-plane-three" />
      <span className="interface-line interface-line-one" />
      <span className="interface-line interface-line-two" />
    </div>
  );
}

export function HeroVisual({ copy }: { copy: SiteCopy }) {
  const canEnhance = useHeroEnhancement();

  return (
    <div className="hero-frame" aria-label={copy.hero.statusValue}>
      <div className="hero-scene" aria-hidden="true">
        <HeroInterfaceFallback />
        {canEnhance ? (
          <Suspense fallback={null}>
            <HeroThreeScene />
          </Suspense>
        ) : null}
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
  );
}
