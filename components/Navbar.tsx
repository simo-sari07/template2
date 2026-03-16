"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Search,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PORTFOLIO", href: "/#portfolio" },
  { name: "BLOG", href: "/#blog" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-4 px-4 sm:pt-6 sm:px-6 lg:px-8">
      {/* 
        The actual navbar is NOT a full width bar. 
        It sits over the Hero which has rounded corners.
        We match the exact reference layout: Left Logo Box (white), center links (white text), right actions.
      */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Logo Box with Cutout - keeping it at the top */}
        <div className="relative z-20 -mt-8 -ml-8 lg:-ml-16 bg-white pt-8 pl-8 sm:pt-10 sm:pl-10 lg:pl-16 pr-12 pb-8 rounded-br-[2.5rem] self-start shadow-sm">
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-10">
              <Image
                src="https://html.awaikenthemes.com/dentaire/images/logo.svg"
                alt=" Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {links.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wider hover:text-white/70 transition-colors flex items-center gap-1.5"
            >
              {link.name}
              {i !== links.length - 1 && (
                <span className="w-1 h-1 bg-white/40 rounded-full ml-6 2xl:ml-8" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Phone Pill */}
          <Link
            href="tel:+1212255511"
            className="bg-white hover:bg-gray-50 text-text-dark pl-2 pr-5 py-2 rounded-full font-bold text-xs inline-flex items-center gap-3 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-[#F4F7F9] flex items-center justify-center text-brand">
              <Phone className="w-3.5 h-3.5" fill="currentColor" />
            </div>
            +1(212)255-511
          </Link>

          <Link
            href="#appointment"
            className="ml-2 bg-white text-brand border-2 border-transparent hover:border-brand hover:bg-brand hover:text-white px-8 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-wider inline-flex items-center gap-2 transition-all duration-300 group shadow-sm"
          >
            MAKE AN APPOINTMENT
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden pt-4 relative z-50">
          <button
            className="bg-white p-3 rounded-full text-text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden z-50"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-text-dark font-bold text-sm tracking-wider uppercase border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4  flex flex-col gap-3">
                <Link
                  href="tel:+1212255511"
                  className="bg-[#F4F7F9] text-text-dark w-full px-5 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-brand text-brand" />
                  <span>+1(212)255-511</span>
                </Link>
                <Link
                  href="#appointment"
                  className="bg-brand text-white w-full px-5 py-3 rounded-xl font-bold text-sm text-center uppercase tracking-wider"
                >
                  Make an Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
