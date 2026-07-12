import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <Pricing />
        <Process />
        <Testimonials />
        <Stats />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
