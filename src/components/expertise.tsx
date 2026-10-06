import { expertise, headings } from "@/data/site";
import { Container, SectionHeader } from "./ui";
export function Expertise() {
  return (
    <section className="section expertise-section">
      <Container>
        <SectionHeader {...headings.expertise} />
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article className="expertise-item" key={item.title}>
              <span className="item-number">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
