import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Clinic from "@/components/Clinic";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative grain overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Experience />
      <Education />
      <Testimonials />
      <Clinic />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  );
}
