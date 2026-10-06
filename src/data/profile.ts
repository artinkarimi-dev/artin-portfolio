export interface Profile {
  name: string;
  brandName: string;
  professionalTitle: string;
  complementaryTitle: string;
  shortBio: string;
  longBio: string[];
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  company: string;
  role: string;
  resume: string;
  portrait: string;
  availability: string;
  location: string;
  currentFocus: string;
  coreStack: string[];
  siteUrl: string;
}

export const profile: Profile = {
  name: "Artin Karimi",
  brandName: "ArtinKarimi",
  professionalTitle: "Full-Stack Developer",
  complementaryTitle: "AI-Assisted Development",
  shortBio:
    "I build web products from the interface through to the APIs behind it. React is where I feel most at home; thoughtful implementation, clear communication, and a useful finished product are what matter to me.",
  longBio: [
    "I'm Artin, a full-stack developer based in Tehran. Over roughly three years in web development, I've worked on everything from content platforms and e-commerce to interactive applications and a team-built coding competition system. I like the part where a good interface and the technical work behind it finally meet.",
    "My strongest work is on the frontend, especially with React and Next.js, but I also work with APIs, backend code, and data when the product needs them. I want to understand the problem before choosing the tools. A polished screen means more when the whole journey works.",
    "AI is part of how I explore and build. It helps me test ideas and move through implementation faster; I still make the technical decisions, review the code, and check the result. I'm also pursuing a bachelor's degree in Software Engineering and mentoring learners at Aiolearn.",
  ],
  email: "artinkarimy1385@gmail.com",
  github: "https://github.com/artinkarimi-dev",
  linkedin: "https://www.linkedin.com/in/artin-karimi/",
  instagram: "https://www.instagram.com/made.byartin/",
  company: "Aiolearn",
  role: "Technical Mentor",
  resume: "/resume.pdf",
  portrait: "/images/Me.webp",
  availability:
    "Open to selected freelance projects, technical collaborations, and meaningful professional connections.",
  location: "Tehran, Iran",
  currentFocus: "Building useful products across the stack.",
  coreStack: ["React", "Next.js", "TypeScript", "Node.js"],
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://frontend-portfolio-studio.artinkarimy1385.chatgpt.site",
};
