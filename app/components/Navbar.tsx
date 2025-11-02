"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileNav,setMobileNav] = React.useState<boolean>(false)
  const pathname = usePathname();

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/10 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative w-36 h-16">
          <Image
            src="/images/logocompany.png"
            alt="company-logo"
            fill
            className="object-contain object-center"
            priority
          />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`relative text-font uppercase tracking-wide transition duration-300 ${
                  pathname === link.href
                    ? "text-accent font-semibold"
                    : "hover:text-accent"
                }`}
              >
                {link.name}
                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-accent scale-x-0 origin-left transition-transform duration-300 ${
                    pathname === link.href ? "scale-x-100" : "hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu (optional later) */}
        <div className="md:hidden">
          <button onClick={()=>setMobileNav(true)} className="text-accent text-2xl">☰</button>
          {mobileNav && (
            <nav className="w-full px-4 relative h-auto">
              <ul className="flex flex-col gap-4 items-center justify-center relative w-full">
                    {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`relative text-font uppercase tracking-wide transition duration-300 ${
                  pathname === link.href
                    ? "text-accent font-semibold"
                    : "hover:text-accent"
                }`}
              >
                {link.name}
                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-accent scale-x-0 origin-left transition-transform duration-300 ${
                    pathname === link.href ? "scale-x-100" : "hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
