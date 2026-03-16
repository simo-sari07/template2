"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://xcare-demo.pbminfotech.com/demo10/wp-content/uploads/sites/17/2024/05/demo-10-slider-01.jpg",
    tagline: "ADVICE ABOUT ORTHOTICS",
    titleLine1: "Goodbye Pain,",
    titleLine2: "Hello Freedom.",
    subtitle:
      "Care you can believe in, Compassionate Care, Advanced Medicine, Close to Home.",
  },
  {
    id: 2,
    image:
      "https://xcare-demo.pbminfotech.com/demo10/wp-content/uploads/sites/17/2024/05/demo-10-slider-02.jpg",
    tagline: "EXPERT MEDICAL STAFF",
    titleLine1: "Your Health,",
    titleLine2: "Our Priority.",
    subtitle:
      "We provide state-of-the-art medical equipment and highly skilled specialists.",
  },
  {
    id: 3,
    image:
      "https://xcare-demo.pbminfotech.com/demo10/wp-content/uploads/sites/17/2024/05/demo-10-slider-03.jpg",
    tagline: "MODERN FACILITIES",
    titleLine1: "Compassionate",
    titleLine2: "Care Daily.",
    subtitle:
      "A trusted name in healthcare emphasizing patient well-being and recovery.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white pt-4 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="relative w-full h-[80vh] min-h-[600px] lg:h-[85vh] rounded-b-[2.5rem] rounded-t-[2.5rem] overflow-hidden bg-brand shadow-2xl">
        {/* Background Slider */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt="Medical Hero"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Subtle dark overlay to ensure white text pops */}
            <div className="absolute inset-0 bg-brand/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/40 to-transparent w-full md:w-3/4" />
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Tagline Pill */}
                <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/40 backdrop-blur-sm mb-6">
                  <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {slides[currentSlide].tagline}
                  </span>
                </div>

                {/* Massive Title */}
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-semibold text-white leading-[1.1] mb-6 tracking-tight">
                  <span className="block">
                    {slides[currentSlide].titleLine1}
                  </span>
                  <span className="block">
                    {slides[currentSlide].titleLine2}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-white/90 text-[15px] md:text-lg mb-10 max-w-xl font-medium">
                  {slides[currentSlide].subtitle}
                </p>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className="bg-white text-brand hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider inline-flex items-center gap-3 transition-transform hover:-translate-y-1"
                >
                  CONTACT US
                  <ArrowUpRight className="w-4 h-4 text-brand" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- BOTTOM RIGHT CUTOUT FOR SLIDER DOTS --- */}
        <div
          className="absolute bottom-0 right-0 z-20 bg-white pt-10 pl-12 pb-10 pr-12 rounded-tl-[3rem]"
          style={{ boxShadow: "-4px -4px 20px rgba(0,0,0,0.06)" }}
        >
          {/* Fake Inward Arc Cutout top-left */}
          <div
            className="absolute -top-10 right-0 w-10 h-10 bg-transparent pointer-events-none"
            style={{
              boxShadow: "20px 20px 0 0 white",
              borderBottomRightRadius: "3rem",
            }}
          />
          <div
            className="absolute bottom-0 -left-10 w-10 h-10 bg-transparent pointer-events-none"
            style={{
              boxShadow: "20px 20px 0 0 white",
              borderBottomRightRadius: "3rem",
            }}
          />

          {/* Slider Dots Navigation */}
          <div className="flex items-center gap-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="flex items-center justify-center transition-all duration-300"
              >
                {currentSlide === index ? (
                  <span className="w-8 h-8 rounded-full border-2 border-brand flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand" />
                  </span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-brand hover:scale-110 transition-transform" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
