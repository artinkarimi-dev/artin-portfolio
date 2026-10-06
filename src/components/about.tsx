import { profile } from "@/data/profile";
import { headings } from "@/data/site";
import { localAssetExists } from "@/lib/assets";
import { Container, Arrow } from "./ui";
export function About() {
  return (
    <section id="about" className="section about-section">
      <Container>
        <div className="about-grid">
          <div>
            <p className="eyebrow">
              <span>{headings.about.number} /</span>
              {headings.about.label}
            </p>
            <h2>{headings.about.title}</h2>
            <p className="about-signature">
              {profile.name}
              <span>{profile.location}</span>
            </p>
          </div>
          <div className="about-copy">
            {profile.longBio.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {localAssetExists(profile.resume) ? (
              <a
                className="button button-secondary"
                href={profile.resume}
                download
              >
                Download résumé
                <Arrow />
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
