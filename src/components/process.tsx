import { processSteps } from "@/data/process";
import { headings } from "@/data/site";
import { Container, SectionHeader } from "./ui";

export function Process() {
  return (
    <section id="process" className="section process-section">
      <Container>
        <SectionHeader {...headings.process} />
        <div className="process-layout">
          <p className="process-principle">
            You should know what’s done, what’s next, and where your feedback fits—
            <span>before the final delivery.</span>
          </p>
          <ol className="process-steps">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
