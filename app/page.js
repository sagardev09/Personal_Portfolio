
import { HeroParallax } from "./components/Hero";
import { Bio } from "./components/Bio";
import Projects from "../app/components/Projects"
import MacbookScrollDemo from "./components/OnlineResume"

export default function Home() {
  return (
    <main>
      <HeroParallax />
      <Bio />
      <Projects />
      <MacbookScrollDemo />
    </main>
  );
}
