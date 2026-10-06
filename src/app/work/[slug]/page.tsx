import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { localAssetExists } from "@/lib/assets";
import { Arrow, Container } from "@/components/ui";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title || "Project",
    description: project?.summary,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      title: project?.title,
      description: project?.summary,
      url: `/work/${slug}/`,
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <main id="main" className="case-study">
      <Container>
        <Link className="text-link" href="/#work">
          ← Back to selected work
        </Link>
        <p className="eyebrow case-eyebrow">CASE STUDY / {project.kicker}</p>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.description}</p>
        <dl className="case-meta">
          <div>
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Project context</dt>
            <dd>
              {project.year ? `${project.year} · ` : ""}
              {project.kicker.toLowerCase()}
            </dd>
          </div>
        </dl>
        <ul className="tags">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {localAssetExists(project.image) && (
          <Image
            className="case-cover"
            src={project.image}
            alt={project.imageAlt || `${project.title} — interface overview`}
            width={project.imageWidth || 1440}
            height={project.imageHeight || 1000}
            sizes="(max-width: 1280px) 90vw, 1200px"
          />
        )}
        <div className="case-body">
          <div className="case-intro-grid">
            <section>
              <p className="eyebrow">WHAT I CONTRIBUTED</p>
              <h2>My role in the work</h2>
              <p>{project.contribution}</p>
            </section>
            <section>
              <p className="eyebrow">DELIVERED</p>
              <h2>What was built</h2>
              <p>{project.implementation}</p>
            </section>
          </div>
          <section>
            <p className="eyebrow">THE ENGINEERING PROBLEM</p>
            <h2>The challenge</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <p className="eyebrow">THE APPROACH</p>
            <h2>How the system was shaped</h2>
            <p>{project.solution}</p>
          </section>
          <section>
            <p className="eyebrow">TECHNICAL ARCHITECTURE</p>
            <h2>How the pieces connect</h2>
            <p>{project.architecture}</p>
          </section>
          <section>
            <p className="eyebrow">IMPLEMENTATION</p>
            <h2>Implementation decisions</h2>
            <ul>
              {project.technicalHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className="eyebrow">OUTCOME</p>
            <h2>What the project demonstrates</h2>
            <p>{project.outcome}</p>
          </section>
          {project.validation && (
            <section className="case-scope-note">
              <p className="eyebrow">SCOPE & LIMITS</p>
              <h2>A note on scope</h2>
              <p>{project.validation}</p>
            </section>
          )}
          {project.images?.filter(localAssetExists).map((src) => (
            <Image
              className="case-cover"
              key={src}
              src={src}
              alt={`${project.title} — implementation detail`}
              width={1440}
              height={1000}
              sizes="90vw"
            />
          ))}
          <div className="hero-actions">
            {project.demo && (
              <a
                className="button button-primary"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.demoLabel || "View website"} <Arrow diagonal />
              </a>
            )}
            {project.repository && (
              <a
                className="text-link"
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code <Arrow diagonal />
              </a>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
