'use client';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
  const links = ['Home', 'About', 'Services', 'Contact'];
  const socials = [
    { icon: <BsWhatsapp size={15} />, href: 'https://wa.me/918000000000' },
    { icon: <BsFacebook size={15} />, href: 'https://facebook.com/coderrun' },
    { icon: <BsInstagram size={15} />, href: 'https://instagram.com/coderrun' },
    { icon: <BsLinkedin size={15} />, href: 'https://linkedin.com/company/coderrun' },
  ];

  return (
    <footer className="w-full bg-surface/80 text-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* --- Brand Section --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">CoderRun</h3>
          <p className="text-sm text-secondary leading-relaxed">
            At CoderRun, we craft high-performance digital experiences — from modern web apps to scalable e-commerce
            solutions — using clean code and solid architecture.
          </p>
        </div>

        {/* --- Address --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Our Address</h3>
          <p className="text-sm text-secondary leading-relaxed">
            CoderRun Tech Solutions <br />
            Sonipat, Haryana, India <br />
            contact@coderrun.info
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {links.map((link, i) => (
              <Link
                key={i}
                href={ link === 'Home' ? '/' :`/${link.toLowerCase()}` }
                className="text-sm text-secondary hover:text-accent transition-colors duration-300 ease-in-out"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>

        {/* --- Socials --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
          <div className="flex items-center gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: 'tween', ease:"easeIn", duration:0.6 }}
                className="bg-background text-accent rounded-full h-10 w-10
                 flex items-center justify-center hover:bg-accent hover:text-white transition"
                target="_blank"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-muted mt-6">
        <p className="text-center text-secondary text-sm py-4">
          © {new Date().getFullYear()} CoderRun Tech Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
