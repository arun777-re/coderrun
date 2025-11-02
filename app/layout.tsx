import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const geistOswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "CoderRun | Full-Stack Development & Automation Solutions",
description:
    "Coderrun helps you build scalable full-stack web apps, APIs, and automation systems with precision and performance.",
  keywords: [
    "coderrun",
    "web development",
    "full stack developer",
    "nextjs developer",
    "mern stack expert",
    "automation systems",
  ],
  openGraph: {
    title: "Coderrun",
    description:
      "Smart, scalable, and high-performance web development solutions.",
    url: "https://coderrun.info",
    siteName: "Coderrun",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coderrun",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AOS = dynamic(()=>import("@/app/components/AOS"),{ssr:false});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistOswald.variable}  antialiased`}
      >
        <AOS/>
        {children}
      </body>
    </html>
  );
}
