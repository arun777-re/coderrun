"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import CoderrunLogo from "../__components/Logo";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileNav, setMobileNav] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* logo */}
     <CoderrunLogo/>
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`relative text-secondary uppercase tracking-wide text-sm transition duration-300 ${
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

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileNav(!mobileNav)}
          className="md:hidden text-accent focus:outline-none"
        >
          {mobileNav ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileNav(false)}
                >
                  <Link
                    href={link.href}
                    className={`relative text-lg uppercase tracking-wide ${
                      pathname === link.href
                        ? "text-accent font-semibold"
                        : "text-font hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
