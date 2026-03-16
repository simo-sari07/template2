"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "Do you accept new patients as a primary care doctor?",
    answer:
      "Yes, we are currently accepting new patients. During your first visit, we will review your complete medical history to ensure optimal follow-up care tailored to your needs.",
  },
  {
    question: "Do you accept insurance and direct billing?",
    answer:
      "Absolutely. Our clinic is equipped for direct billing. We process insurance claims on the social security portion. For supplemental insurance, an advance payment may be required depending on your provider.",
  },
  {
    question: "How should I handle a medical emergency?",
    answer:
      "For life-threatening emergencies, call 911 immediately. For day-to-day urgent cases such as minor trauma, slots are reserved each day — call the front desk as soon as we open.",
  },
  {
    question: "Do you offer video consultations (telemedicine)?",
    answer:
      "Yes, telemedicine slots are available for prescription renewals, blood test result reviews, and any consultation that does not require a physical examination.",
  },
  {
    question: "What are your typical appointment waiting times?",
    answer:
      "For routine consultations, the average wait is 2–4 days. For acute situations such as infections or fever, we always do our best to see you within 24–48 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) =>
    setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden relative">
      {/* Subtle bg blob */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

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
            + FAQ
          </span>
          <h2 className="text-4xl md:text-[2.8rem] font-bold text-[#0B1B3D] leading-tight">
            Frequently Asked{" "}
            <span className="text-brand">Questions</span>
          </h2>
          <p className="text-gray-400 mt-4 text-[15px] max-w-md mx-auto">
            Find practical information about our clinic, services, and consultation procedures.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Image + stats card */}
          <div className="relative w-full max-w-[480px] mx-auto lg:mx-0 lg:sticky lg:top-28">

            {/* Dot decoration */}
            <div className="absolute -top-4 left-6 w-2.5 h-2.5 rounded-full bg-brand z-10" />

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[1.75rem] overflow-hidden w-full h-[460px] shadow-[0_20px_60px_rgba(45,106,79,0.12)] relative"
            >
              <Image
                src="https://xcare-demo.pbminfotech.com/demo10/wp-content/uploads/sites/17/2023/08/service-img-01-1010x615.jpg"
                alt="FAQ dental"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Stats card overlay */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute bottom-0 left-4 right-4 md:right-auto md:w-[340px] bg-brand rounded-[1.25rem] p-6 shadow-[0_16px_48px_rgba(45,106,79,0.35)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white/70 text-[12px] uppercase tracking-widest mb-1">Patients Satisfied</p>
                  <p className="text-white text-3xl font-extrabold leading-none">98%</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-white/70 text-[12px] uppercase tracking-widest mb-1">Years Experience</p>
                  <p className="text-white text-3xl font-extrabold leading-none">15+</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-white/70 text-[12px] uppercase tracking-widest mb-1">Specialists</p>
                  <p className="text-white text-3xl font-extrabold leading-none">24</p>
                </div>
              </div>
              <div className="w-full h-px bg-white/20 mb-4" />
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-[13px] font-semibold transition-colors group"
              >
                Still have questions? Contact us
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3 pt-2"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-brand/30 bg-brand/5 shadow-[0_4px_20px_rgba(45,106,79,0.08)]"
                      : "border-gray-100 bg-white hover:border-brand/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span
                      className={`font-semibold text-[15px] leading-snug transition-colors ${
                        isOpen ? "text-brand" : "text-[#0B1B3D]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-brand text-white rotate-0"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 text-gray-500 text-[14.5px] leading-relaxed border-t border-brand/10 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}