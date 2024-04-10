// Sections of the page
import About from "@components/About/About";
import Hero from "@components/Hero/Hero";
import Portfolio from "@components/Portfolio/Portfolio";
import ContactUs from "@components/ContactUs/ContactUs";
import Testimonials from "@components/Testimonials/Testimonials";
import Services from "@components/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ContactUs />
      <Testimonials />
    </>
  );
}
