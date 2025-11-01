import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import AOSInIt from "./components/AOS";

const geistOswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "CoderRun",
  description: "CoderRun - Providing Scalable Solutions for your Business",
};

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
        <AOSInIt/>
        {children}
      </body>
    </html>
  );
}
