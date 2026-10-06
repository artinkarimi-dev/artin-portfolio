import { experience } from "@/data/experience";
import { headings } from "@/data/site";
import { Container, SectionHeader } from "./ui";
export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <Container>
        <SectionHeader {...headings.experience} />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={item.role}>
              <div className="experience-period">
                <span>{item.period}</span>
              </div>
              <div>
                <p className="eyebrow">{item.type}</p>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
              </div>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
