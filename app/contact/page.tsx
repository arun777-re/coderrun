import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ContactFormSection from "../components/ContactFormSection";
import MapSection from "../components/MapSection";

export const metadata: Metadata = {
  // Browser tab title and HTML <title> tag
  title: "Contact Us | Coderrun",

  // Meta description (appears in Google search results)
  description:
    "Get in touch with Coderrun for full-stack web development, automation solutions, and custom Next.js or MERN projects. Let’s build something powerful together.",

  // Meta keywords (optional but helps search context)
  keywords: [
    "contact coderrun",
    "web development services",
    "nextjs developer contact",
    "mern stack developer",
    "automation solutions",
  ],

  // Open Graph data for social media link preview
  openGraph: {
    title: "Contact Coderrun | Full-Stack Development & Automation Solutions",
    description:
      "Reach out to Coderrun for scalable, high-performance web applications and automation systems.",
    url: "https://coderrun.info/contact",
    images: [
      {
        url: "/og-contact.jpg", // ideally a relevant OG image
        width: 1200,
        height: 630,
        alt: "Coderrun Contact Page",
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Contact Us" subtitle="Let us Build Something Together" />
      <ContactFormSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default ContactPage;
