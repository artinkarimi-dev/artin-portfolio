import type { ReactNode } from "react";
import { contactHref } from "@/lib/content";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="icon icon-arrow"
      aria-hidden="true"
      focusable="false"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
export function SectionHeader({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
export function SocialLinks({
  github,
  linkedin,
  email,
  instagram,
}: {
  github: string;
  linkedin: string;
  email?: string;
  instagram?: string;
}) {
  return (
    <div className="social-links">
      {[
        ["GitHub", github],
        ["LinkedIn", linkedin],
        ["Instagram", instagram],
        ["Email", email],
      ].map(([label, value]) => {
        if (value === undefined) return null;
        const href = contactHref(value, label === "Email");
        return href ? (
          <a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
          >
            {label}
            <Arrow diagonal />
          </a>
        ) : null;
      })}
    </div>
  );
}
