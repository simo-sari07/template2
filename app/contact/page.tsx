"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappContact from "@/components/WhatsappContact";
import ScrollToTop from "@/components/ScrollToTop";

const infoCards = [
  {
    icon: MapPin,
    title: "Visit Us On",
    lines: ["24/11 Robert Road,", "New York, USA"],
  },
  {
    icon: Phone,
    title: "Contact Us",
    lines: ["(+01) 789 854 856", "(+01) 789 854 856"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon to Fri : 10:00 To 6:00", "Sat : 10:00AM To 3:00PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@domainname.com", "sales@domainname.com"],
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Header Section */}
        <section className="bg-[#F4F7F9] pt-44 pb-24 px-4 relative overflow-hidden">
          {/* Sparkle decoration */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-brand/20 animate-pulse">
            <svg width="40" height="40" viewBox="0 0 28 28" fill="currentColor">
              <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0B1B3D] mb-4 tracking-tight">
              Contact <span className="text-brand">Us</span>
            </h1>
            <nav className="flex justify-center items-center gap-2 text-[15px] font-medium">
              <Link href="/" className="text-gray-400 hover:text-brand transition-colors">Home</Link>
              <span className="text-brand/40">/</span>
              <span className="text-[#0B1B3D]">Contact Us</span>
            </nav>
          </div>

          {/* Right side accent */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-12 bg-brand/5 rounded-l-full blur-sm" />
        </section>

        {/* SECTION 1 — Info cards (left) + Map (right) */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-brand font-bold text-[11px] uppercase tracking-[0.18em] mb-4 block">
                  + Contact Info
                </span>
                <h2 className="text-4xl md:text-[2.6rem] font-bold text-[#0B1B3D] leading-tight mb-4">
                  <span className="text-brand">Connecting</span> Near &amp; Far
                </h2>
                <p className="text-gray-400 text-[14.5px] leading-relaxed mb-10 max-w-md">
                  For emergency dental care or to schedule an appointment, contact
                  our office or visit our clinic.
                </p>

                {/* 2×2 info cards */}
                <div className="grid grid-cols-2 gap-4">
                  {infoCards.map(({ icon: Icon, title, lines }, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}
                      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(45,106,79,0.1)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full border border-brand/25 flex items-center justify-center text-brand mb-3">
                        <Icon className="w-4 h-4" strokeWidth={1.8} />
                      </div>
                      <p className="font-bold text-[#0B1B3D] text-[14px] mb-1.5">
                        {title}
                      </p>
                      {lines.map((line, i) => (
                        <p
                          key={i}
                          className="text-gray-400 text-[13px] leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT — Map */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full h-[480px] rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_rgba(45,106,79,0.1)] border border-gray-100"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1683267568529!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Image (left) + Contact Form (right) */}
        <section className="py-20 bg-[#EEF4F0] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* LEFT — Image */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-[480px] rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_rgba(45,106,79,0.12)]"
              >
                <Image
                  src="https://html.awaikenthemes.com/dentaire/images/contact-us-img.jpg"
                  alt="Contact us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              {/* RIGHT — Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-brand font-bold text-[11px] uppercase tracking-[0.18em] mb-4 block">
                  + Contact Us
                </span>
                <h2 className="text-4xl md:text-[2.6rem] font-bold text-[#0B1B3D] leading-tight mb-10">
                  <span className="text-brand">Get</span> In Touch With Us
                </h2>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-100 text-[14px] text-[#0B1B3D] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-sm"
                    />
                    <input
                      type="email"
                      placeholder="Enter Email"
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-100 text-[14px] text-[#0B1B3D] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-100 text-[14px] text-[#0B1B3D] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-sm"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-100 text-[14px] text-[#0B1B3D] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-sm"
                    />
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-100 text-[14px] text-[#0B1B3D] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-sm resize-none"
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 bg-brand text-white pl-7 pr-2 py-2 rounded-full font-bold text-[12px] uppercase tracking-[0.1em] hover:bg-brand/90 transition-all shadow-[0_10px_28px_rgba(45,106,79,0.28)] group mt-2"
                  >
                    Send Message
                    <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappContact />
      <ScrollToTop />
    </div>
  );
}
