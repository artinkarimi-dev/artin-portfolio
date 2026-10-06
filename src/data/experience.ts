import { profile } from "./profile";

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  type: string;
}

export const experience: Experience[] = [
  {
    role: profile.role,
    company: profile.company,
    period: "Current · approximately one year",
    description:
      "I help learners work through frontend and backend concepts, review their code, diagnose implementation problems, and explain the tools and decisions behind a working solution. The most useful conversations usually start with the exact point where something stopped making sense.",
    type: "MENTORING",
  },
  {
    role: "Web Developer",
    company: "Independent & team projects",
    period: "Approximately three years",
    description:
      "I've contributed to client work and collaborative products across React interfaces, PHP and Node.js development, REST integration, testing, debugging, and deployment preparation. The projects above show the individual contributions and technical scope in more detail.",
    type: "DEVELOPMENT",
  },
];
