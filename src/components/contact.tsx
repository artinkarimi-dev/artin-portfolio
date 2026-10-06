import { profile } from "@/data/profile";
import { contactCopy } from "@/data/site";
import { contactHref } from "@/lib/content";
import { Container, Arrow, SocialLinks } from "./ui";
export function Contact() {
  const email = contactHref(profile.email, true);
  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="contact-panel">
          <div>
            <p className="eyebrow">
              <span>09 /</span>
              {contactCopy.eyebrow}
            </p>
            <h2>{contactCopy.title}</h2>
            <p>{contactCopy.description}</p>
            <p className="contact-prompt">{contactCopy.prompt}</p>
          </div>
          <div className="contact-actions">
            {email ? (
              <a className="contact-email" href={email}>
                <span>{contactCopy.emailLabel}</span>
                {profile.email}
                <Arrow diagonal />
              </a>
            ) : (
              <div className="contact-email">
                <span>{contactCopy.emailLabel}</span>
                <span className="placeholder-text">{profile.email}</span>
              </div>
            )}
            <SocialLinks
              github={profile.github}
              linkedin={profile.linkedin}
              instagram={profile.instagram}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
