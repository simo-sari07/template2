"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Prenez-vous de nouveaux patients en tant que médecin traitant ?",
      answer: "Oui, le Dr. Dupont accepte actuellement de nouveaux patients. Lors de notre première consultation, nous ferons le point sur votre dossier médical complet pour assurer un suivi optimal."
    },
    {
      question: "Acceptez-vous la carte vitale et le tiers-payant ?",
      answer: "Absolument. Le cabinet est équipé pour la carte vitale. Nous pratiquons le tiers-payant sur la part sécurité sociale. Pour la mutuelle, selon votre organisme, une avance peut être demandée."
    },
    {
      question: "Comment gérer une urgence médicale ?",
      answer: "Pour les urgences vitales, composez immédiatement le 15. Pour des urgences du quotidien (traumatologie légère, etc.), des créneaux sont réservés chaque jour. Appelez le secrétariat dès l'ouverture."
    },
    {
      question: "Faites-vous des consultations vidéo (téléconsultation) ?",
      answer: "Oui, des créneaux de téléconsultation sont disponibles pour le renouvellement d'ordonnances simples, l'analyse de résultats sanguins, ou tout autre motif ne nécessitant pas d'examen physique."
    },
    {
      question: "Quels sont vos délais d'attente pour un rendez-vous ?",
      answer: "Pour une consultation classique, le délai moyen est de 2 à 4 jours. Néanmoins, pour des situations aiguës (infections, fièvres, etc.), nous ferons toujours notre possible pour vous recevoir sous 24 à 48h."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
              Foire Aux Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-6">
              Des réponses à vos questions
            </h2>
            <p className="text-text-mid text-lg mb-8 leading-relaxed">
              Retrouvez ici les informations pratiques concernant le fonctionnement du cabinet, nos services, et les modalités de consultation.
            </p>
            
            <div className="bg-brand/5 rounded-2xl p-8 border border-brand/10">
              <h3 className="text-xl font-bold font-heading text-brand mb-3">
                Vous avez une autre question ?
              </h3>
              <p className="text-text-mid mb-6">
                N'hésitez pas à contacter notre secrétariat. Nous nous ferons un plaisir de vous renseigner.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-brand font-medium hover:text-accent transition-colors"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === idx
                    ? "border-accent/40 bg-accent/5"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-medium text-lg pr-8 transition-colors ${
                    openIndex === idx ? "text-brand" : "text-text-dark"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === idx ? "bg-accent/20 text-accent" : "bg-gray-100 text-gray-500"
                  }`}>
                    {openIndex === idx ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-mid leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
