"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-services-1.svg",
    title: "General Dental Care",
    desc: "We are excited to meet you and provide the best dental care for your family.",
    href: "#",
  },
  {
    num: "02",
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-services-2.svg",
    title: "Dental Implants",
    desc: "We are excited to meet you and provide the best dental care for your family.",
    href: "#",
  },
  {
    num: "03",
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-services-3.svg",
    title: "Cosmetic Dentistry",
    desc: "We are excited to meet you and provide the best dental care for your family.",
    href: "#",
  },
  {
    num: "04",
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-services-4.svg",
    title: "Teeth Whitening",
    desc: "We are excited to meet you and provide the best dental care for your family.",
    href: "#",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#EEF4F0] overflow-hidden relative">
      {/* Decorative sparkles */}
      <div className="absolute top-10 left-10 text-brand/20 pointer-events-none select-none">
        <svg width="22" height="22" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>
      <div className="absolute top-16 left-16 text-brand/15 pointer-events-none select-none">
        <svg width="10" height="10" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>
      {/* Plus decoration top-right */}
      <div className="absolute top-8 right-8 text-brand/20 pointer-events-none select-none">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <rect x="10" y="0" width="4" height="24" rx="2"/>
          <rect x="0" y="10" width="24" height="4" rx="2"/>
        </svg>
      </div>
      {/* Large sparkle bottom-left */}
      <div className="absolute bottom-16 left-6 text-brand/25 pointer-events-none select-none">
        <svg width="36" height="36" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-brand font-bold text-[11px] uppercase tracking-[0.18em] mb-3 block">
            + Our Services
          </span>
          <h2 className="text-4xl md:text-[2.8rem] font-bold text-[#0B1B3D] leading-tight">
            <span className="text-brand">High Quality</span> Services for You.
          </h2>
          <p className="text-gray-400 mt-4 text-[15px] max-w-md mx-auto">
            We are committed to sustainability and eco-friendly initiatives.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-[1.5rem] p-7 flex flex-col bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:bg-[#1B4332] hover:shadow-[0_20px_50px_rgba(27,67,50,0.3)] hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-[#1B4332] before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 before:ease-in-out before:rounded-[1.5rem] before:-z-0 hover:before:scale-y-100"
            >
              {/* Number watermark */}
              <span className="relative z-10 absolute top-5 right-6 text-4xl font-extrabold leading-none select-none text-[#0B1B3D]/6 group-hover:text-white/10 transition-colors duration-500">
                {svc.num}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#EEF4F0] group-hover:bg-white/10 transition-colors duration-500">
                <Image
                  src={svc.icon}
                  alt={svc.title}
                  width={32}
                  height={32}
                  className="group-hover:brightness-0 group-hover:invert transition-all duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-[17px] font-bold mb-3 leading-snug text-[#0B1B3D] group-hover:text-white transition-colors duration-500">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-[13.5px] leading-relaxed mb-6 flex-1 text-gray-400 group-hover:text-white/65 transition-colors duration-500">
                {svc.desc}
              </p>

              {/* Read More link */}
              <Link
                href={svc.href}
                className="relative z-10 inline-flex items-center gap-2 text-[13px] font-bold text-[#0B1B3D] group-hover:text-white transition-colors duration-500"
              >
                Read More
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-brand text-white group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 text-[14px] mb-6 max-w-md mx-auto">
            We believe in using the latest technology and techniques to ensure the best outcomes for our patients.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 bg-brand text-white pl-7 pr-2 py-2 rounded-full font-bold text-[12px] uppercase tracking-[0.1em] hover:bg-brand/90 transition-all shadow-[0_10px_28px_rgba(45,106,79,0.28)] group"
          >
            View All Services
            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}