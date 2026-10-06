import { aiTools, aiCopy } from "@/data/ai-tools";
import { headings } from "@/data/site";
import { Container, SectionHeader } from "./ui";
export function AiTools() {
  return (
    <section id="ai-tools" className="section ai-section">
      <Container>
        <SectionHeader
          {...headings.ai}
          title={aiCopy.title}
          description={aiCopy.description}
        />
        <div className="ai-grid">
          {aiTools.map((group, index) => (
            <article className="ai-item" key={group.category}>
              <p className="eyebrow">0{index + 1} /</p>
              <h3>{group.category}</h3>
              <p>{group.description}</p>
              <ul className="tool-list">
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <details className="tool-example">
                <summary>
                  Example use case<span aria-hidden="true">+</span>
                </summary>
                <p>{group.example}</p>
              </details>
            </article>
          ))}
        </div>
        <p className="ai-note">
          <span aria-hidden="true">↳</span>
          {aiCopy.note}
        </p>
      </Container>
    </section>
  );
}
