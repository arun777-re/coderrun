import { Metadata } from 'next'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatWeOffer from '../components/WhatWeOffer'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: "Our Services | Coderrun",
  description:
    "From Next.js apps to automation workflows — explore Coderrun’s range of full-stack development services.",
  keywords: [
    "web app development",
    "nextjs development",
    "mern stack services",
    "automation systems",
  ],
  openGraph: {
    title: "Coderrun Services",
    description:
      "Smart and scalable solutions built for real-world performance.",
    url: "https://coderrun.info/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Coderrun Services",
      },
    ],
  },
};


const ServicePage = () => {
  return (
    <>
    <Navbar/>
    <Banner title='Our Services' subtitle='We build high-performance web solutions using the latest technologies'/>
    <WhatWeOffer/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default ServicePage