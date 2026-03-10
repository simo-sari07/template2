"use client";

import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Activity } from "lucide-react";

export default function Services() {
  const services = [
    {
      num: "01",
      icon: Stethoscope,
      title: "Consultation Générale",
      desc: "Prise en charge complète pour adultes et enfants. Bilan de santé, diagnostic et traitement des maladies courantes.",
      tag: "Adultes & Enfants",
    },
    {
      num: "02",
      icon: HeartPulse,
      title: "Prévention & Suivi",
      desc: "Accompagnement personnalisé pour la prévention des risques cardiovasculaires, diabète et maladies chroniques.",
      tag: "Suivi Chronique",
    },
    {
      num: "03",
      icon: Activity,
      title: "Urgences Douces",
      desc: "Prise en charge rapide des traumatismes mineurs, sutures, brûlures légères et autres soins non vitaux.",
      tag: "Soins Rapides",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Notre Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            Services Médicaux Complets
          </h2>
          <p className="text-text-mid">
            Une approche globale de votre santé, alliant prévention, traitement et suivi sur le long terme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-5xl font-heading font-bold text-gray-50/80 group-hover:text-brand/5 transition-colors">
                {svc.num}
              </div>
              
              <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors text-brand">
                <svc.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-text-dark mb-3">
                {svc.title}
              </h3>
              
              <p className="text-text-mid mb-6 leading-relaxed">
                {svc.desc}
              </p>

              <div className="inline-block px-4 py-1.5 bg-gray-50 text-text-mid text-sm font-medium rounded-full border border-gray-100 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20 transition-colors">
                {svc.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
