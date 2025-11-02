import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutSection from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonial";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

const TechStack = dynamic(()=>import('@/app/components/TechStack'))
const Services = dynamic(()=>import('@/app/components/Service'))

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
