import { profile } from "@/data/profile";
import { Container } from "./ui";
export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
            <span className="footer-divider">/</span>
            {profile.professionalTitle}
          </p>
          <a className="back-top" href="#top">
            Back to top<span aria-hidden="true">↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
