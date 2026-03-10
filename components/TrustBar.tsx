"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  const stats = [
    { value: "+2000", label: "Patients suivis" },
    { value: "15", label: "Ans d'expérience" },
    { value: "4.9 ★", label: "Avis Google" },
    { value: "24/48h", label: "Disponibilité" },
  ];

  return (
    <section className="bg-brand py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
