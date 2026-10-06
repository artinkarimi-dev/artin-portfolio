import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/projects";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Process } from "@/components/process";
import { AiTools } from "@/components/ai-tools";
import { Experience } from "@/components/experience";
import { Stack } from "@/components/stack";
import { Collaboration } from "@/components/collaboration";
import { Contact } from "@/components/contact";
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <SelectedWork />
      <About />
      <Expertise />
      <Process />
      <AiTools />
      <Experience />
      <Stack />
      <Collaboration />
      <Contact />
    </main>
  );
}
