"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leftItems = [
  {
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-why-us-1.svg",
    title: "Experienced Doctor",
    desc: "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
  {
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-why-us-2.svg",
    title: "Personalized Care",
    desc: "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
  {
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-why-us-3.svg",
    title: "Flexible Payment Options",
    desc: "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
];

const rightItems = [
  {
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-why-us-4.svg",
    title: "Emergency Services",
    desc: "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
  {
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-why-us-5.svg",
    title: "Positive Patient Reviews",
    desc: "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
  {
    icon: "https://html.awaikenthemes.com/dentaire/images/icon-why-us-6.svg",
    title: "Latest Technology",
    desc: "The goal of our clinic is to provide friendly, caring dentistry and the.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#EEF4F0] overflow-hidden relative">

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-brand/20 pointer-events-none select-none">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <rect x="10" y="0" width="4" height="24" rx="2"/>
          <rect x="0" y="10" width="24" height="4" rx="2"/>
        </svg>
      </div>
      <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-brand/30 pointer-events-none" />
      <div className="absolute bottom-10 left-8 text-brand/25 pointer-events-none select-none">
        <svg width="40" height="40" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-6 text-brand/15 pointer-events-none select-none">
        <svg width="22" height="22" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 text-brand/25 pointer-events-none select-none">
        <svg width="36" height="36" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>
      <div className="absolute top-16 right-16 text-brand/15 pointer-events-none select-none">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <rect x="10" y="0" width="4" height="24" rx="2"/>
          <rect x="0" y="10" width="24" height="4" rx="2"/>
        </svg>
      </div>
      {/* Bottom center plus */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand/15 pointer-events-none select-none">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <rect x="10" y="0" width="4" height="24" rx="2"/>
          <rect x="0" y="10" width="24" height="4" rx="2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand font-bold text-[11px] uppercase tracking-[0.18em] mb-3 block">
            + Why Choose Us
          </span>
          <h2 className="text-4xl md:text-[2.8rem] font-bold text-[#0B1B3D] leading-tight">
            <span className="text-brand">Diagnosis</span> of Dental Diseases
          </h2>
          <p className="text-gray-400 mt-4 text-[15px] max-w-md mx-auto">
            We are committed to sustainability and eco-friendly initiatives.
          </p>
        </motion.div>

        {/* 3-column layout: left items | center image | right items */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-center">

          {/* LEFT items */}
          <div className="space-y-10">
            {leftItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="flex flex-col items-end text-right gap-2 group"
              >
                <div className="flex items-center gap-4 justify-end">
                  <div>
                    <h3 className="font-bold text-[#0B1B3D] text-[16px] mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed max-w-[220px] ml-auto">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-brand/15 flex items-center justify-center shadow-sm group-hover:bg-brand transition-colors duration-300">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={26}
                      height={26}
                      className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER — circular image with orbit dots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center mx-auto"
          >
            {/* Outer orbit ring */}
            <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-brand/20" />

            {/* Orbit dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-brand/40"
                style={{
                  transform: `rotate(${deg}deg) translateY(-170px)`,
                }}
              />
            ))}

            {/* Inner white circle + image */}
            <div className="relative w-[270px] h-[270px] rounded-full bg-white shadow-[0_20px_60px_rgba(45,106,79,0.15)] flex items-center justify-center overflow-hidden border-4 border-white">
              <Image
                src="https://html.awaikenthemes.com/dentaire/images/why-choose-us-img.png"
                alt="Why Choose Us"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT items */}
          <div className="space-y-10">
            {rightItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="flex flex-col items-start text-left gap-2 group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-brand/15 flex items-center justify-center shadow-sm group-hover:bg-brand transition-colors duration-300">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={26}
                      height={26}
                      className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1B3D] text-[16px] mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed max-w-[220px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}