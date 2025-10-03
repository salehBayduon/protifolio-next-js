import React from "react";
import SectionNav from "./components/SectionNav";
import HeroSection from "./components/HeroSection";
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className=" text-white min-h-screen">
      <SectionNav/>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
