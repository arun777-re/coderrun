import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Service";
import AboutSection from "./components/About";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import Testimonials from "./components/Testimonial";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden mx-auto w-screen">
    <Navbar/>
    <Banner/>
    <Services/>
    <AboutSection/>
    <TechStack/>
    <Process/>
    <Testimonials/>
    <Stats/>
    <Contact/>
    <Footer/>
    </div>
  );
}
