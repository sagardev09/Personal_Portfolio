
import { HeroParallax } from "./components/Hero";
import { Bio } from "./components/Bio";
import Projects from "../app/components/Projects"
import { Skills } from "./components/Skills"



export default function Home() {
  return (
    <main>
      <HeroParallax />
      <Bio />
      <Projects />
      <Skills />
    </main>
  );
}
