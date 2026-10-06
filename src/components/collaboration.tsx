import { collaboration } from "@/data/collaboration";
import { profile } from "@/data/profile";
import { Container, SocialLinks } from "./ui";
export function Collaboration() {
  return (
    <section id="collaboration" className="collaboration-section">
      <Container>
        <div className="collaboration-panel">
          <div className="collaboration-copy">
            <p className="eyebrow">
              <span>08 /</span>
              {collaboration.eyebrow}
            </p>
            <h2>{collaboration.title}</h2>
            <p>{collaboration.message}</p>
            <SocialLinks
              github={profile.github}
              linkedin={profile.linkedin}
              instagram={profile.instagram}
              email={profile.email}
            />
          </div>
          <div className="collaboration-invitation">
            <span className="conversation-mark" aria-hidden="true">
              hello, world<span>↗</span>
            </span>
            <h3>{collaboration.invitation}</h3>
            <ul>
              {collaboration.topics.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>{collaboration.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
