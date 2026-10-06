export const navigation = [
  ["Work", "/#work"],
  ["About", "/#about"],
  ["How I work", "/#process"],
  ["Stack", "/#stack"],
  ["Experience", "/#experience"],
] as const;

export const heroCopy = {
  heading: ["I build the interface.", "And the thinking", "behind it."],
  primary: "Explore the work",
  secondary: "Let’s talk",
  panelLabel: "A LITTLE MORE ABOUT ME",
  capabilities: [
    "Custom web applications",
    "React & Next.js",
    "APIs & integration",
    "Existing product improvements",
  ],
};

export const headings = {
  work: {
    number: "01",
    label: "SELECTED WORK",
    title: "Real products, real decisions.",
    description:
      "A closer look at what each project does, what I contributed, and the boundaries of the work.",
  },
  about: {
    number: "02",
    label: "A LITTLE ABOUT ME",
    title: "Good products make sense on both sides of the screen.",
  },
  expertise: {
    number: "03",
    label: "WHAT I CAN HELP WITH",
    title: "From the first requirement to the last rough edge.",
    description:
      "I work with clients and teams on new products, useful features, and applications that need a clearer path forward.",
  },
  process: {
    number: "04",
    label: "HOW I WORK",
    title: "Keep the work visible. Keep it moving.",
    description:
      "The details change with the project, but I like a clear path from the first conversation to a working release.",
  },
  ai: { number: "05", label: "AI IN MY WORKFLOW" },
  experience: {
    number: "06",
    label: "EXPERIENCE",
    title: "Building products and helping people learn.",
    description:
      "My project case studies carry the technical detail. This is the broader work around them.",
  },
  stack: {
    number: "07",
    label: "THE TOOLKIT",
    title: "The tools I reach for.",
    description:
      "Strongest in React and modern frontend work, with practical backend, testing, and delivery experience.",
  },
};

export const expertise: { title: string; description: string }[] = [
  {
    title: "Custom web applications",
    description:
      "Build usable interfaces and the supporting application logic for dashboards, platforms, and business-specific workflows.",
  },
  {
    title: "Commerce & reservation experiences",
    description:
      "Shape clear browsing, selection, and form journeys, then connect them to the services a real product needs.",
  },
  {
    title: "APIs & full-stack integration",
    description:
      "Connect frontend features to backend services, data, authentication, and practical deployment requirements.",
  },
  {
    title: "Improve what already exists",
    description:
      "Add features, debug difficult flows, improve usability, and help move an unfinished application forward.",
  },
];

export const stack: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "PHP", "MySQL", "REST APIs", "API integration"],
  },
  {
    title: "Build & delivery",
    items: ["Git & GitHub", "Docker", "GitHub Actions", "cPanel", "Environment configuration"],
  },
  {
    title: "Design & quality",
    items: ["Figma", "Chrome DevTools", "Vitest", "ESLint & Prettier", "Lighthouse", "Accessibility & responsive testing"],
  },
];

export const contactCopy = {
  eyebrow: "FOR PROJECTS & CONNECTIONS",
  title: "Tell me what you’re working on.",
  description:
    "A new product, an existing app that needs attention, or an idea you’re still figuring out—I’d be glad to hear about it. I’m also open to meeting developers and teams who care about the work they do.",
  emailLabel: "Email me",
  prompt: "A short note about the problem is enough to start.",
};
