import Image from "next/image";
import { profile } from "@/data/profile";
import { heroCopy } from "@/data/site";
import { localAssetExists } from "@/lib/assets";
import { Arrow, Container, SocialLinks } from "./ui";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="short-line" />
              {profile.professionalTitle}
            </p>
            <h1 id="hero-title">
              {heroCopy.heading.map((line, i) => (
                <span
                  className={i === 2 ? "accent-text" : undefined}
                  key={line}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-description">{profile.shortBio}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {heroCopy.primary}
                <Arrow />
              </a>
              <a className="text-link" href="#contact">
                {heroCopy.secondary}
                <Arrow diagonal />
              </a>
            </div>
            <SocialLinks github={profile.github} linkedin={profile.linkedin} />
            <p className="hero-hello">
              {profile.complementaryTitle} · {profile.location}
            </p>
          </div>
          <aside className="identity-panel" aria-label="Developer profile">
            <div className="identity-header">
              <span>{heroCopy.panelLabel}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="identity-person">
              {localAssetExists(profile.portrait) ? (
                <Image
                  className="portrait"
                  src={profile.portrait}
                  alt={`Portrait of ${profile.name}`}
                  width={320}
                  height={480}
                  sizes="(max-width: 720px) 82px, 104px"
                  priority
                />
              ) : (
                <div className="portrait-placeholder">
                  <span className="portrait-monogram" aria-hidden="true">
                    :)
                  </span>
                  <span>Portrait unavailable</span>
                </div>
              )}
              <div>
                <p className="identity-greeting">Hello, I’m</p>
                <p className="identity-name">{profile.name}</p>
                <p className="identity-role">{profile.professionalTitle}</p>
                <p className="identity-subrole">{profile.complementaryTitle}</p>
              </div>
            </div>
            <ul className="tags identity-stack" aria-label="Core stack">
              {profile.coreStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <dl className="identity-details">
              <div>
                <dt>Currently</dt>
                <dd>
                  {profile.role} at <span>{profile.company}</span>
                </dd>
              </div>
              <div>
                <dt>On my desk</dt>
                <dd>{profile.currentFocus}</dd>
              </div>
            </dl>
            <div className="identity-availability">
              <span className="identity-status-label">
                LET’S MAKE SOMETHING USEFUL
              </span>
              <p>{profile.availability}</p>
              <a className="text-link" href="#about">
                A little more about me
                <Arrow />
              </a>
            </div>
          </aside>
        </div>
        <div className="capability-strip">
          <span className="eyebrow">HOW I CAN HELP</span>
          <ul
            tabIndex={0}
            aria-label="Capabilities"
            data-lenis-prevent
            data-lenis-prevent-horizontal
          >
            {heroCopy.capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
