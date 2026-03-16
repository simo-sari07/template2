"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/#team" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ", href: "/services#faq" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Teeth Whitening", href: "/services" },
  { name: "Dental Implants", href: "/services" },
  { name: "Orthodontics", href: "/services" },
  { name: "Root Canal", href: "/services" },
  { name: "Dental Crowns", href: "/services" },
  { name: "Emergency Care", href: "/services" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B4332] text-white/70 overflow-hidden relative">

      {/* Top CTA Banner */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-brand origin-top"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large faint circle top-right */}
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full border-[60px] border-white/5" />
          {/* Medium circle bottom-left */}
          <div className="absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full border-[40px] border-white/5" />
          {/* Small filled dot accents */}
          <div className="absolute top-6 left-1/3 w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute bottom-8 left-1/2 w-1.5 h-1.5 rounded-full bg-white/15" />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-white/10" />
          {/* Diagonal line texture */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left: text */}
            <div className="flex items-center gap-6">

              <div>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.22em] font-bold mb-1.5">
                  + Get In Touch
                </p>
                <h3 className="text-white text-2xl md:text-[1.9rem] font-bold leading-tight">
                  Book Your{" "}
                  <span className="relative inline-block">
                    Free Consultation
                    <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-white/30 rounded-full" />
                  </span>{" "}
                  Today
                </h3>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Phone quick-call pill */}
              <div className="hidden lg:flex items-center gap-3 bg-white/10 border border-white/15 rounded-full px-5 py-3">
                <Phone className="w-4 h-4 text-white/70" />
                <span className="text-white text-[13px] font-semibold tracking-wide">+(123) 698-5245</span>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-brand pl-7 pr-2 py-2 rounded-full font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-white/92 transition-all shadow-[0_8px_24px_rgba(0,0,0,0.15)] group"
              >
                Make An Appointment
                <span className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">

          {/* Col 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <Link href="#" className="inline-block">
              <Image
                src="https://html.awaikenthemes.com/dentaire/images/logo.svg"
                alt="Dentaire Logo"
                width={140}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 leading-relaxed text-[14px]">
              Providing friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-brand hover:border-brand hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-[15px] mb-6 relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-brand before:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/50 hover:text-brand transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-[15px] mb-6 relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-brand before:rounded-full">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-[14px] text-white/50 hover:text-brand transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-[15px] mb-6 relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-brand before:rounded-full">
              Contact Info
            </h4>
            <ul className="space-y-5">
              {[
                { icon: MapPin, text: "15 Rue de la Paix, 75002 Paris, France" },
                { icon: Phone, text: "+(123) 698-5245" },
                { icon: Mail, text: "info@domain.com" },
                { icon: Clock, text: "Mon to Sat 9:00AM to 9:00PM" },
              ].map(({ icon: Icon, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand/30 flex items-center justify-center text-brand mt-0.5">
                    <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                  </div>
                  <span className="text-[13.5px] text-white/50 leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12.5px] text-white/30"
        >
          <p>© {currentYear} Dentaire. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Legal Notice</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}