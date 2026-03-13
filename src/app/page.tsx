import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden bg-black selection:bg-white/10 selection:text-white">
      <div className="w-full max-w-3xl px-6 md:px-0 flex flex-col gap-32 relative z-10">
        <Hero id="hero" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Education id="education" />
        <Achievements id="achievements" />
        <Contact id="contact" />
        <Footer />
      </div>
    </main>
  );
}
