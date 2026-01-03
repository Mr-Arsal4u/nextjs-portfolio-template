import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import SocialMenu from "@/components/SocialMenu";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <OpenSource /> */}
        <Certifications />
        <Contact />
      </main>
      <SocialMenu />
    </div>
  );
}
