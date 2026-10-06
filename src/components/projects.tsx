import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { headings } from "@/data/site";
import { localAssetExists } from "@/lib/assets";
import { Arrow, Container, SectionHeader } from "./ui";
function ProjectVisual({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <>
      <div className="project-browser">
        <span>PROJECT / {String(index + 1).padStart(2, "0")}</span>
        <span>{project.kicker}</span>
      </div>
      {localAssetExists(project.image) ? (
        <Image
          className={
            project.imageFit === "cinematic"
              ? "project-visual-cinematic"
              : undefined
          }
          src={project.image}
          alt={project.imageAlt || project.title}
          width={project.imageWidth || 1440}
          height={project.imageHeight || 1000}
          sizes="(max-width: 900px) 90vw, 700px"
        />
      ) : (
        <div className="project-image-placeholder">
          <span className="image-frame-icon" aria-hidden="true">
            !
          </span>
          <p>Project visual unavailable</p>
          <span>The case study remains available.</span>
        </div>
      )}
    </>
  );
}
export function SelectedWork() {
  return (
    <section id="work" className="section work-section">
      <Container>
        <SectionHeader {...headings.work} />
        {projects.slice(0, 4).map((project, index) => (
          <article
            className="project-feature"
            key={project.slug}
          >
            <Link
              className="project-image"
              href={`/work/${project.slug}/`}
              aria-label={`Read the ${project.title} case study`}
            >
              <ProjectVisual project={project} index={index} />
            </Link>
            <div className="project-copy">
              <p className="eyebrow">
                {String(index + 1).padStart(2, "0")} / {project.role}
              </p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="tags" aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-note">
                <span>WHAT WAS BUILT</span>
                <p>{project.implementation || project.solution}</p>
              </div>
              <Link className="text-link" href={`/work/${project.slug}/`}>
                Read the case study
                <Arrow diagonal />
              </Link>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
