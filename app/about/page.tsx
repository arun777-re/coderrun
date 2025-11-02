import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import AboutIntro from '../components/AboutIntro'
import MissionVision from '../components/MissionVision'
import WhyChooseUs from '../components/WhyChooseUs'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Coderrun",
  description:
    "Learn more about Coderrun — delivering high-performance full-stack and automation solutions with precision.",
  keywords: ["about coderrun", "nextjs experts", "mern stack developers"],
  openGraph: {
    title: "About Coderrun",
    description:
      "We build robust full-stack web applications and automation systems for businesses.",
    url: "https://coderrun.info/about",
    siteName: "Coderrun",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Coderrun",
      },
    ],
    type: "website",
  },
};


const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <Banner title='About CoderRun' subtitle='Building Scalable Digital Experiences'/>
    <AboutIntro/>
    <MissionVision/>
    <WhyChooseUs/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default AboutPage