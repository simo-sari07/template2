"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const infos = [
  {
    icon: MapPin,
    text: "15 Rue de la Paix, 75002 Paris, France",
  },
  {
    icon: Phone,
    text: "+(123) 698-5245",
  },
  {
    icon: Mail,
    text: "info@domain.com",
  },
  {
    icon: Clock,
    text: "Mon to Sat 9:00AM to 9:00PM",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      {/* Subtle blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Map ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full h-[480px] md:h-[540px] rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_rgba(45,106,79,0.12)] border border-gray-100"
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

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            {/* Label */}
            <span className="text-brand font-bold text-[11px] uppercase tracking-[0.18em] mb-5 block">
              + Contact Now
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-[2.8rem] lg:text-[3.2rem] font-bold text-[#0B1B3D] leading-[1.15] tracking-tight mb-10">
              Get Free{" "}
              <span className="text-brand">Professional</span>
              <br />
              Consultation
            </h2>

            {/* Info list */}
            <ul className="space-y-6 mb-12">
              {infos.map(({ icon: Icon, text }, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex items-center gap-4"
                >
                  {/* Icon circle — outline style matching reference */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-brand/30 flex items-center justify-center text-brand">
                    <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <span className="text-gray-500 text-[15px] leading-snug">{text}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 bg-brand text-white pl-7 pr-2 py-2 rounded-full font-bold text-[12px] uppercase tracking-[0.1em] hover:bg-brand/90 transition-all shadow-[0_10px_28px_rgba(45,106,79,0.28)] self-start group"
            >
              Make An Appointment
              <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}