import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import SocialMenu from "@/components/SocialMenu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
      <SocialMenu />
    </div>
  );
}
