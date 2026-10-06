export interface AiToolGroup {
  category: string;
  description: string;
  tools: string[];
  example: string;
}

export const aiTools: AiToolGroup[] = [
  {
    category: "Development",
    description:
      "I use AI to explore approaches, understand existing code, work through bugs, and speed up implementation. I check what it produces against the actual codebase and requirements.",
    tools: ["ChatGPT", "OpenAI Codex", "Claude Code", "Cursor"],
    example:
      "For a tricky feature, I can give an assistant the relevant code and constraints, compare possible approaches, then implement and test the choice that fits the product.",
  },
  {
    category: "Design exploration",
    description:
      "Early visual directions and imagery help me make product ideas more concrete before committing to an interface.",
    tools: ["Google Stitch", "Flair.ai", "Midjourney"],
    example:
      "I explore visual references or interface directions, then adapt the useful parts to the product's content, layout, and real interaction needs.",
  },
  {
    category: "Creative production",
    description:
      "When a project calls for video or supporting media, I can explore and refine concepts with dedicated creative tools.",
    tools: ["Higgsfield", "Google Veo", "Captions AI"],
    example:
      "I use these tools for visual and video experiments, then review the output for consistency and suitability before it belongs in a product.",
  },
];

export const aiCopy = {
  title: "AI helps me move faster. I still own the work.",
  description:
    "A useful prompt starts with the problem, context, and constraints. I evaluate the answer, refine it, and review the final code or creative output myself.",
  note: "Technical decisions, code review, testing, and delivery stay my responsibility. Using AI in my workflow is different from building machine-learning systems.",
};
