"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const features = [
  "Experienced Team",
  "Comprehensive Services",
  "State-Of-The-Art Technology",
  "Emergency Dental Services",
];

const tickerItems = [
  "Surgery",
  "Healthcare",
  "Cardiothoracic",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Oncology",
];

export default function AboutDoctor() {
  return (
    <section
      id="about"
      className="py-24 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ─── LEFT: Two-image stacked layout with circular badge ─── */}
          <div className="relative h-[560px] md:h-[620px] w-full max-w-[520px] mx-auto lg:mx-0">

            {/* Decorative sparkle (top-left) */}
            <div className="absolute top-8 left-4 text-brand opacity-40 z-0 select-none pointer-events-none">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
              </svg>
            </div>
            {/* Decorative sparkle (bottom-left smaller) */}
            <div className="absolute bottom-20 left-8 text-brand opacity-25 z-0 select-none pointer-events-none">
              <svg width="14" height="14" viewBox="0 0 28 28" fill="currentColor">
                <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
              </svg>
            </div>

            {/* Top image — slightly larger, top-left anchored */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute top-0 left-0 w-[62%] h-[58%] rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_rgba(45,106,79,0.15)] z-10"
            >
              <Image
                src="https://html.awaikenthemes.com/dentaire/images/about-us-img-1.jpg"
                alt="Dental treatment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 30vw"
                priority
              />
            </motion.div>

            {/* Bottom image — slightly smaller, bottom-right anchored */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-[65%] h-[58%] rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_rgba(45,106,79,0.12)] z-10"
            >
              <Image
                src="https://html.awaikenthemes.com/dentaire/images/about-us-img-2.jpg"
                alt="Dental clinic"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 65vw, 33vw"
                priority
              />
            </motion.div>

            {/* Circular badge — sits at the overlap junction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: "backOut" }}
              className="absolute top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-[130px] h-[130px]"
            >
              {/* Outer rotating text ring */}
              <svg
                viewBox="0 0 130 130"
                className="w-full h-full animate-[spin_18s_linear_infinite]"
              >
                <defs>
                  <path
                    id="circle-text-path"
                    d="M 65,65 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0"
                  />
                </defs>
                <circle cx="65" cy="65" r="60" fill="#2d6a4f" />
                <text
                  fontSize="9.5"
                  fill="white"
                  fontFamily="sans-serif"
                  letterSpacing="2.8"
                  fontWeight="600"
                >
                  <textPath href="#circle-text-path">
                    15+ YEARS OF EXPERIENCE • 15+ YEARS OF EXPERIENCE •
                  </textPath>
                </text>
              </svg>
              {/* Inner half-circle icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-md">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Decorative plus cross */}
            <div className="absolute top-[22%] right-[28%] text-brand/30 z-0 select-none pointer-events-none">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <rect x="10" y="0" width="4" height="24" rx="2"/>
                <rect x="0" y="10" width="24" height="4" rx="2"/>
              </svg>
            </div>
          </div>

          {/* ─── RIGHT: Content ─── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="text-brand font-bold text-[11px] uppercase tracking-[0.18em]">
                + About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-[2.8rem] lg:text-[3.2rem] font-bold text-[#0B1B3D] mb-5 leading-[1.15] tracking-tight">
              Your Journey{" "}
              <span className="text-brand">to a Healthier</span>
              <br />
              Smile Begins Here
            </h2>

            {/* Description */}
            <p className="text-gray-500 mb-10 text-[15px] leading-[1.85] max-w-lg">
              The goal of our clinic is to provide friendly, caring dentistry and
              the highest level of general, cosmetic, and specialist dental
              treatments. With dental practices throughout the world.
            </p>

            {/* Feature checklist — 2 columns */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-12">
              {features.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <span className="text-[#0B1B3D] font-semibold text-[13.5px]">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 bg-brand text-white pl-7 pr-2 py-2 rounded-full font-bold text-[12px] uppercase tracking-[0.1em] hover:bg-brand/90 transition-all shadow-[0_10px_28px_rgba(45,106,79,0.28)] group"
            >
              Read More About Us
              <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ─── Ticker / Marquee ─── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .marquee-word {
          -webkit-text-stroke: 1.5px #0B1B3D;
          color: transparent;
          transition: color 0.25s ease, -webkit-text-stroke 0.25s ease;
        }
        .marquee-word:hover {
          color: #0B1B3D;
          -webkit-text-stroke: 0px transparent;
        }
      `}</style>
      <div className="relative pt-12 pb-8 overflow-hidden border-t border-gray-100">
        <div className="flex whitespace-nowrap cursor-default select-none">
          <div className="marquee-track items-center">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
              (item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="marquee-word text-5xl md:text-6xl lg:text-[5rem] font-bold capitalize cursor-default">
                    {item}
                  </span>
                  <div className="px-8 md:px-12 lg:px-16 text-[#0B1B3D] font-black text-6xl">
                    +
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}