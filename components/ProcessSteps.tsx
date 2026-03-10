"use client";

import { motion } from "framer-motion";

export default function ProcessSteps() {
  const steps = [
    {
      title: "Prise de RDV",
      desc: "Contactez-nous par téléphone ou via Doctolib pour fixer un créneau qui vous convient.",
    },
    {
      title: "Consultation",
      desc: "Un échange approfondi et humain pour comprendre vos besoins et vos symptômes.",
    },
    {
      title: "Diagnostic",
      desc: "Des examens précis si nécessaire pour établir un diagnostic médical fiable.",
    },
    {
      title: "Suivi",
      desc: "Un accompagnement sur le long terme pour s'assurer de votre guérison ou suivi chronique.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Votre Parcours
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            Un accompagnement pas à pas
          </h2>
          <p className="text-text-mid">
            Nous avons simplifié votre parcours de soins pour vous offrir l'expérience la plus sereine possible.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-brand/10 -z-10"></div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connecting Line for Mobile */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute top-20 bottom-[-3rem] left-1/2 w-[2px] bg-brand/10 -translate-x-1/2 -z-10"></div>
                )}

                {/* Circle Number */}
                <div className="w-20 h-20 rounded-full bg-white border-4 border-brand/10 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300 shadow-sm relative z-10">
                  <span className="text-2xl font-bold font-heading text-brand group-hover:text-accent transition-colors">
                    {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {step.title}
                </h3>
                
                <p className="text-text-mid text-sm leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
