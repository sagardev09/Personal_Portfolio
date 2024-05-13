"use client"
import { HeroParallax } from "./components/Hero";
import { Bio } from "./components/Bio";
import Projects from "../app/components/Projects"
import { Skills } from "./components/Skills"
import { Footer } from "./components/Footer"
import ReactGA from "react-ga4";

ReactGA.initialize("G-XMYQLQYHSK");

ReactGA.send({
  hitType: "pageview",
  page: "/",
});

export default function Home() {
  return (
    <main className="">
      <HeroParallax />
      <Bio />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
