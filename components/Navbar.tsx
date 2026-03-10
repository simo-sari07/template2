"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Accueil", href: "#" },
  { name: "Services", href: "#services" },
  { name: "À propos", href: "#about" },
  { name: "Équipe", href: "#team" },
  { name: "Avis", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0 flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand/20 bg-brand/5 shadow-sm p-1">
              <Image
                src="/images/logo.webp"
                alt="Logo du cabinet"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="font-heading font-bold text-2xl text-brand hidden sm:block">
              Dr. Dupont
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-mid font-medium hover:text-brand relative group transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="tel:+33123456789"
              className="bg-brand hover:bg-brand/90 text-white px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>01 23 45 67 89</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 shadow-xl">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-text-dark font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  href="tel:+33123456789"
                  className="bg-brand text-white w-full px-5 py-3 rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appeler le cabinet</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
