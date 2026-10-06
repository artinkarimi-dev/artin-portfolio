import { stack, headings } from "@/data/site";
import { Container, SectionHeader } from "./ui";
export function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <span id="skills" className="anchor-alias" />
      <Container>
        <SectionHeader {...headings.stack} />
        <div className="stack-grid">
          {stack.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
