import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";
import "./polish.css";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const description =
  "Artin Karimi is a full-stack developer with strong React and Next.js experience, practical backend work, and a reviewed AI-assisted development workflow.";
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — Full-Stack Developer | AI-Assisted Development`,
    template: `%s | ${profile.name}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — Full-Stack Developer`,
    description,
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full-Stack Developer`,
    description,
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`}>
      <body id="top">
        <SmoothScroll>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Navigation name={profile.name} brandName={profile.brandName} />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
