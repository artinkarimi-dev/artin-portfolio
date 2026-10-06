export interface Collaboration {
  eyebrow: string;
  title: string;
  message: string;
  invitation: string;
  topics: string[];
  note: string;
}

export const collaboration: Collaboration = {
  eyebrow: "FOR CLIENTS, DEVELOPERS & TEAMS",
  title: "A good conversation can be a useful start.",
  message:
    "If you're planning a product, improving an existing one, or looking for someone to build with, feel free to get in touch. You don't need a finished brief to begin a conversation.",
  invitation: "What could we work on?",
  topics: [
    "A new web product or feature",
    "An existing app that needs help",
    "A technical collaboration",
    "Ideas, feedback, or a simple hello",
  ],
  note: "I value clear scope, honest progress updates, and work that solves a real problem.",
};
