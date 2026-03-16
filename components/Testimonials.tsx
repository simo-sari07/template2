"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "I want to say thank you to my doctor! The care and attention I received was truly exceptional. The team made me feel comfortable and at ease throughout my entire treatment.",
    author: "Marie L.",
    role: "Graphic Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    rating: 5,
    text: "Finally a clinic where you feel listened to! Booking an appointment is quick, the team is warm and reassuring. The facilities are spotlessly clean. I recommend without hesitation.",
    author: "Thomas B.",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    rating: 4,
    text: "I've been treated here for a chronic condition for years and found the human and medical support I needed. Thank you to the entire team for your daily kindness and professionalism.",
    author: "Sophie Y.",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle bg blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-brand font-bold text-[11px] uppercase tracking-[0.18em] mb-3 block">
            + Testimonial
          </span>
          <h2 className="text-4xl md:text-[2.8rem] font-bold text-[#0B1B3D] leading-tight">
            What our{" "}
            <span className="text-brand">Client Say</span>
          </h2>
          <p className="text-gray-400 mt-4 text-[15px] max-w-md mx-auto">
            We are committed to sustainability and eco-friendly initiatives.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Image + Rating card */}
          <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">

            {/* Dot decoration */}
            <div className="absolute -top-4 left-6 w-2.5 h-2.5 rounded-full bg-brand z-10" />

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[1.75rem] overflow-hidden w-full h-[420px] shadow-[0_20px_60px_rgba(45,106,79,0.12)]"
            >
              <Image
                src="https://html.awaikenthemes.com/dentaire/images/testimonials-img.jpg"
                alt="Patient testimonial"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Rating card overlay */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute bottom-0 left-4 right-4 md:right-auto md:w-[340px] bg-brand rounded-[1.25rem] p-5 shadow-[0_16px_48px_rgba(45,106,79,0.35)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-white text-3xl font-extrabold leading-none">4.7/5</span>
                <p className="text-white/80 text-[13px] leading-snug">
                  This rate is given by users<br />after visiting our location
                </p>
              </div>
              <div className="w-full h-px bg-white/20 mb-4" />
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-5 h-5 text-white/40" />
                <span className="text-white/80 text-[13px] ml-2 font-medium">For Excellence Services</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Testimonial content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            {/* Quote icon */}
            <div className="mb-6">
              <svg width="48" height="40" viewBox="0 0 48 40" fill="none">
                <path d="M0 40V24.8C0 18.4 1.6 13.2 4.8 9.2C8 5.07 12.8 2.13 19.2 0.4L21.6 4.4C18.4 5.6 15.87 7.47 14 10C12.27 12.4 11.33 15.2 11.2 18.4H20V40H0ZM28 40V24.8C28 18.4 29.6 13.2 32.8 9.2C36 5.07 40.8 2.13 47.2 0.4L49.6 4.4C46.4 5.6 43.87 7.47 42 10C40.27 12.4 39.33 15.2 39.2 18.4H48V40H28Z"
                  fill="#2d6a4f" fillOpacity="0.15"/>
              </svg>
            </div>

            {/* Animated testimonial text */}
            <div className="relative min-h-[160px] mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="text-[#0B1B3D] text-lg md:text-xl font-medium leading-relaxed"
                >
                  "{current.text}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-brand/20 flex-shrink-0 relative">
                  <Image
                    src={current.avatar}
                    alt={current.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#0B1B3D] text-[15px]">{current.author}</p>
                  <p className="text-gray-400 text-[13px]">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-200"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center text-white hover:bg-brand/80 transition-all duration-200"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2 ml-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-6 bg-brand" : "w-2 bg-brand/25"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}