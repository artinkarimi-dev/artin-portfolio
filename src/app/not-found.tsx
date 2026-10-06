import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>This page isn’t here.</h1>
      <p>Head back to the portfolio to explore the work.</p>
      <Link className="button button-primary" href="/">
        Back to home →
      </Link>
    </main>
  );
}
