export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  role: string;
  contribution: string;
  year?: string;
  technologies: string[];
  image?: string;
  images?: string[];
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageFit?: "standard" | "cinematic";
  problem: string;
  solution: string;
  architecture: string;
  technicalHighlights: string[];
  outcome: string;
  validation?: string;
  repository?: string;
  demo?: string;
  demoLabel?: string;
  implementation: string;
};

export const projects: Project[] = [
  {
    slug: "jazireh",
    title: "Jazireh — Astronomy Platform",
    kicker: "CLIENT PLATFORM / RTL EXPERIENCE",
    summary:
      "A Persian RTL astronomy product that pairs a custom React experience with WordPress publishing and server-managed space-data integrations.",
    description:
      "Jazireh is a responsive astronomy platform built for a real client. Its React frontend covers science news, NASA's Astronomy Picture of the Day, videos, sky information, and interactive exploration while WordPress remains the source of truth for content, administration, and authentication.",
    role: "Frontend development & WordPress integration",
    contribution:
      "I designed and developed the product experience, built the responsive Persian RTL frontend, and connected it to the custom WordPress theme and jazireh-core plugin. My work covered the interface, content flows, REST integration, and the failure states around external astronomy services.",
    year: "2026",
    technologies: [
      "React",
      "Vite",
      "Three.js",
      "WordPress",
      "PHP",
      "MySQL",
      "REST API",
    ],
    image: "/projects/Jazireh.webp",
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt:
      "Jazireh astronomy platform shown across desktop and mobile interfaces, with Persian content, astronomy cards, and solar-system exploration.",
    implementation:
      "A custom React interface served by a WordPress theme, with REST endpoints for editorial content and server-side integrations for astronomy media.",
    problem:
      "The platform needed to feel like a tailored astronomy product while keeping publishing practical for the client. It also had to combine editorial content with external services whose responses and availability are outside the application's control.",
    solution:
      "I separated the visual experience from content management: React handles the interactive RTL interface, while WordPress owns editorial data, media, authentication, and administration. A custom plugin exposes the required REST resources and keeps third-party credentials and requests on the server.",
    architecture:
      "The WordPress theme serves the React application shell. The frontend reads from the custom jazireh-core REST API, which connects WordPress content and uploads with NASA APOD and YouTube. Community content enters through a signed ingestion endpoint outside normal public-page requests.",
    technicalHighlights: [
      "Built a responsive Persian RTL interface across editorial and interactive astronomy views.",
      "Used WordPress as the authoritative CMS and admin system instead of duplicating content ownership in the frontend.",
      "Implemented custom PHP REST endpoints and server-side NASA APOD and YouTube integrations so provider keys stay out of the browser.",
      "Added last-known-good caching for latest-video data and explicit fallback behavior around external services.",
      "Kept community synchronization outside public requests through a signed ingestion path that stores content in WordPress.",
      "Documented product boundaries accurately: the sky view uses a compatibility snapshot, radar is a simulation, and Explore uses authored educational data.",
    ],
    outcome:
      "A source-available client platform with a custom frontend, a practical WordPress editing workflow, and a documented build-and-deployment path for the active theme and plugin.",
    demo: "https://jazireh.artinkarimi.ir",
    demoLabel: "Visit Jazireh",
    repository: "https://github.com/artinkarimi-dev/jazireh-astronomy",
    validation:
      "The public repository and live site confirm the active WordPress architecture, RTL interface, and product routes. External astronomy feeds can be unavailable; the interface exposes that state instead of substituting fabricated live data.",
  },
  {
    slug: "innoverse-viax-code-arena",
    title: "Innoverse / ViaX Code Arena",
    kicker: "TEAM PROJECT / COMPETITION PLATFORM",
    summary:
      "An online coding competition platform connecting team workflows, problem solving, deterministic judging, rankings, and role-specific review tools.",
    description:
      "ViaX Code Arena is a collaborative full-stack competition project for participants, judges, and administrators. It brings team formation, problem access, code submission, official scoring, leaderboard state, integrity evidence, and review workflows into one role-aware product.",
    role: "Frontend development & application integration · team project",
    contribution:
      "I contributed across the React interface and application integration, helping connect participant and competition workflows to the underlying APIs and data. The platform architecture and competition system are team outcomes; this case study does not attribute every backend, judge, or AI component to me individually.",
    year: "2026",
    technologies: [
      "React 19",
      "Vite 8",
      "Tailwind CSS 4",
      "PHP",
      "MySQL",
      "FastAPI",
      "Docker Compose",
    ],
    image: "/projects/viax-code-arena.webp",
    imageWidth: 1672,
    imageHeight: 941,
    imageFit: "cinematic",
    imageAlt:
      "Cinematic ViaX Code Arena presentation showing participant, problem, leaderboard, and profile interfaces on several screens.",
    implementation:
      "Role-aware participant and judge interfaces connected to a PHP/MySQL competition backend, a queue-backed judge worker, and read-only public demo workspaces.",
    problem:
      "A competition submission cannot be treated like a normal form request. Source validation, hidden tests, score calculation, judge evidence, leaderboard state, and optional AI explanation have different trust and timing requirements, while the participant still needs clear feedback.",
    solution:
      "The application keeps official judging deterministic and moves long-running execution into a queue-backed worker. The PHP layer validates competition rules and persists the submission; the worker executes stored tests through an external provider, records per-test evidence, and commits the official verdict before any optional AI analysis runs.",
    architecture:
      "React and React Router provide separate participant, judge, and administrator workspaces. PHP endpoints enforce sessions, roles, CSRF checks, and competition rules against MySQL. A dedicated worker claims judge_jobs, stores per-test results, and calculates weighted scores. The isolated FastAPI service receives bounded, already-judged context and returns advisory reports without direct database or scoring authority.",
    technicalHighlights: [
      "The participant workspace covers teams, problems, source submissions, history, rankings, mission work, profiles, and AI feedback display.",
      "Judge-facing queues and detail views expose test results, review history, integrity signals, problem management, and competition controls.",
      "Separated HTTP submission handling from code execution with a persistent queue, retry states, stale-job recovery, and a manual-review fallback.",
      "Derived official scores and leaderboard state from deterministic test results; AI cannot execute tests, change verdicts, alter scores, or update rankings.",
      "Used server-sent events for submission-status updates rather than presenting the entire product as a real-time system.",
      "Provided read-only participant, judge, and administrator demo workspaces with seeded competition data for safe public inspection.",
    ],
    outcome:
      "A working competition demonstration with connected participant and staff workflows, a public technical repository, and a live read-only environment. The repository explicitly presents it as a portfolio and demonstration release, not a production-hardened SaaS platform.",
    demo: "https://innoverse.artinkarimi.ir/login",
    demoLabel: "Open public demo",
    repository: "https://github.com/artinkarimi-dev/viax-code-arena",
    validation:
      "The public repository and read-only role workspaces confirm the connected competition flows. Automatic execution and advisory AI still depend on configured provider keys; production hosting, monitoring, backups, and horizontal scaling are not claimed.",
  },
  {
    slug: "elarven",
    title: "Elarven — Boutique Stay Experience",
    kicker: "FRONTEND CONCEPT / TRAVEL JOURNEY",
    summary:
      "An editorial travel experience that takes a visitor from discovering a stay to reviewing a local reservation, with clear prices and responsive interactions.",
    description:
      "Elarven is a frontend-focused concept for discovering boutique stays. Its journey runs from destination search and filters through property details, pricing, and an in-browser reservation review. The catalog and availability are seeded demonstration data, not live inventory.",
    role: "Product design & frontend development",
    contribution:
      "I designed and built the interface, search and filtering journey, stay details, saved-state behavior, and local reservation flow. The work focuses on product clarity and interaction quality rather than presenting a simulated booking as a real transaction.",
    year: "2026",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    image: "/projects/elarven.webp",
    imageWidth: 1440,
    imageHeight: 900,
    imageAlt:
      "Elarven desktop homepage with an Alpine stay, editorial headline, and destination, date, and guest search controls.",
    implementation:
      "A responsive frontend concept with a typed stay catalog, shareable search state, saved stays, transparent pricing, validation, and local confirmation.",
    problem:
      "A travel interface needs to inspire interest without hiding the practical choices: where, when, for how many people, and at what total price. Those decisions also need to remain understandable on a small screen.",
    solution:
      "I kept discovery visual while making search inputs, filters, availability rules, fees, and reservation review explicit. URL parameters carry shareable search state; saved stay IDs persist locally. Contact details remain in memory for the demonstration flow.",
    architecture:
      "Next.js App Router composes the routes, while focused React components handle interactive search, map selection, gallery, saved stays, and reservation review. Typed catalog and pure domain functions hold date, guest, filtering, and pricing rules. Zod validates contact input. No booking backend or database is connected.",
    technicalHighlights: [
      "Built destination autocomplete, date and guest controls, URL-backed filters, sorting, and empty-state recovery.",
      "Created synchronized list and illustrative map views, saved stays, a keyboard-operable gallery, and responsive booking controls.",
      "Derived totals from nights, guests, selected rate, and fees, with the breakdown visible before local confirmation.",
      "Handled invalid input, blocked dates, missing properties, image failures, and keyboard focus in key interactions.",
      "Kept date, guest, filtering, and pricing rules in testable domain functions, with component and browser tests covering the main journey.",
    ],
    outcome:
      "A complete frontend demonstration of the discovery-to-review journey. It shows the interaction and product decisions without suggesting that a real stay can be booked.",
    demo: "https://elarven.artinkarimi.ir/",
    demoLabel: "Explore Elarven",
    repository: "https://github.com/artinkarimi-dev/elarven",
    validation:
      "The source uses a seeded stay catalog and demonstration availability. Saved stay IDs are stored in the browser; reservation confirmation is held in app memory. There is no authentication, payment, database persistence, email delivery, or real booking transaction.",
  },
];
