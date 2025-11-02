import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Service";
import TechStack from "./components/TechStack";
import dynamic from "next/dynamic";

const Process = dynamic(() => import("./components/Process"), { ssr: false });
const Testimonials = dynamic(() => import("./components/Testimonial"), { ssr: false });
const Stats = dynamic(() => import("./components/Stats"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div className="overflow-x-hidden w-screen">
      <Navbar />
      <Banner />
      <Services />
      <TechStack />
      <Process />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
