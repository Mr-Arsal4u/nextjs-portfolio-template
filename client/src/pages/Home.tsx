import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import SocialMenu from "@/components/SocialMenu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />           {/* Hero Section */}
        <Services />       {/* Our Services */}
        <WhyChooseUs />    {/* Why Choose Us (separate section) */}
        <AboutUs />        {/* Our Mission */}
        <About />          {/* About Suza Labs (below Our Mission) */}
        <Portfolio />      {/* Portfolio */}
        <Contact />        {/* Get in touch */}
      </main>
      <Footer />
      <SocialMenu />
    </div>
  );
}
