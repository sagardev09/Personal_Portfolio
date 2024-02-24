
import { HeroParallax } from "./components/Hero";
import { Bio } from "./components/Bio";
import { FollowingPointerDemo } from "./components/ProjectCard";

export default function Home() {
  return (
    <main>
      <HeroParallax />
      <Bio />
      <FollowingPointerDemo />
    </main>
  );
}
