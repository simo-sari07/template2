"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, ArrowRight } from "lucide-react";

// Using an SVG component for the exact icon in the reference
function TestAdminIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HeartCareIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

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
    <section id="about" className="py-24 bg-[#F4F7F9] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: EXACT Split Image Design (Based on new reference) */}
          <div className="relative flex h-[500px] md:h-[650px] w-full max-w-lg mx-auto lg:mx-0">
            {/* Left Image Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute left-0 bottom-0 w-[45%] h-[85%] rounded-[2rem] overflow-hidden rounded-br-none"
            >
              <Image
                src="https://xcare-demo.pbminfotech.com/demo4/wp-content/uploads/sites/9/2024/03/about-img.jpg"
                alt="Medical Professionals"
                fill
                className="object-cover object-[20%_center]"
                sizes="(max-w-768px) 50vw, 25vw"
                priority
              />
              {/* Bottom Right Inward Arc Cutout */}
              <div className="absolute -bottom-0 -right-0 w-16 h-16 bg-[#F4F7F9] rounded-tl-[2rem] translate-x-full translate-y-full" />
            </motion.div>

            {/* Gap logic via absolute positioning offsets */}

            {/* Right Image Panel */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute right-0 top-0 w-[50%] h-[85%] rounded-[2rem] overflow-hidden rounded-tl-none"
            >
              <Image
                src="https://xcare-demo.pbminfotech.com/demo4/wp-content/uploads/sites/9/2024/03/about-img.jpg"
                alt="Medical Professionals"
                fill
                className="object-cover object-[80%_center]"
                sizes="(max-w-768px) 50vw, 25vw"
                priority
              />
              {/* Top Left Inward Arc Cutout */}
              <div className="absolute -top-0 -left-0 w-16 h-16 bg-[#F4F7F9] rounded-br-[2rem] -translate-x-full -translate-y-full" />
            </motion.div>

            {/* Background Shape to fake the continuous curve cutouts */}
            <div className="absolute left-[45%] bottom-0 w-[5%] h-16 bg-[#F4F7F9] z-10 rounded-tl-[1.5rem]" />
            <div className="absolute right-[50%] top-0 w-[5%] h-16 bg-[#F4F7F9] z-10 rounded-br-[1.5rem]" />
            <div className="absolute left-[45%] top-0 bottom-0 w-[5%] bg-[#F4F7F9] z-0" />
          </div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex flex-col mb-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-2 mt-4 self-start">
                <span className="text-brand font-bold text-[10px] uppercase tracking-[0.15em]">
                  ABOUT US
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-heading font-medium text-text-dark mb-6 leading-[1.1] tracking-tight">
              The Heart and Science <br className="hidden md:block" />
              of Medic Test
            </h2>

            <p className="text-text-mid mb-12 text-[15px] leading-[1.8] max-w-xl">
              There are many variations of passages of Lorem Ipsum available,
              but the maj ority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center justify-center text-brand">
                  <TestAdminIcon />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-text-dark mb-2">
                    Professional Experts
                  </h4>
                  <p className="text-text-mid text-[13px] leading-[1.6]">
                    We prioritize each patient's unique
                    <br />
                    needs and preferences.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center justify-center text-brand">
                  <HeartCareIcon />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-text-dark mb-2">
                    Patient-centered Care
                  </h4>
                  <p className="text-text-mid text-[13px] leading-[1.6]">
                    We prioritize each patient's unique
                    <br />
                    needs and preferences.
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.1em] hover:bg-brand/90 transition-all shadow-[0_8px_20px_rgba(45,106,79,0.25)] mt-2 group"
            >
              KNOW MORE
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Ticker Section - EXACT Match from new image */}
      <div className="relative pt-12 pb-8 overflow-hidden bg-[#F4F7F9]">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration:20000 /* Incredibly slow speed to match the request */,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center w-max"
          >
            {[
              ...tickerItems,
              ...tickerItems,
              ...tickerItems,
              ...tickerItems,
              ...tickerItems,
              ...tickerItems,
            ].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <span
                  className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-normal capitalize"
                  style={{
                    WebkitTextStroke: "1.5px #0B1B3D", // Dark navy outline matching the screenshot perfectly
                    color: "transparent",
                  }}
                >
                  {item}
                </span>
                <div className="px-8 md:px-12 lg:px-16">
                  {/* Heavy dark Plus sign acting as the separator */}
                  <div className="text-[#0B1B3D] flex items-center justify-center font-black text-6xl px-4 font-sans">
                    +
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
