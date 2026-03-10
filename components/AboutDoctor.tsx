"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, HeartHandshake, ShieldPlus } from "lucide-react";

export default function AboutDoctor() {
  const values = [
    {
      icon: Award,
      title: "Expertise Médicale",
      desc: "Diplômé de la Faculté de Médecine de Paris, avec plus de 15 ans de pratique en cabinet et à l'hôpital.",
    },
    {
      icon: HeartHandshake,
      title: "Écoute Active",
      desc: "Un temps dédié pour comprendre vos symptômes dans leur globalité, sans précipitation.",
    },
    {
      icon: ShieldPlus,
      title: "Accompagnement",
      desc: "Un suivi régulier et coordonné avec les spécialistes de la région pour une prise en charge optimale.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=800&auto=format&fit=crop"
                alt="Portrait du Docteur"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand/10 mix-blend-overlay"></div>
            </div>

            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-sm border-l-4 border-l-accent"
            >
              <p className="text-text-dark font-medium italic mb-4">
                "Ma priorité est d'établir une relation de confiance. La médecine d'aujourd'hui doit rester profondément humaine."
              </p>
              <div className="font-heading font-bold text-brand">Dr. Jean Dupont</div>
              <div className="text-sm text-text-mid">Médecin Généraliste</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
              Le Praticien
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-6">
              Une médecine basée sur la confiance et l'empathie
            </h2>
            <p className="text-text-mid mb-10 text-lg leading-relaxed">
              Le cabinet a été pensé comme un lieu apaisant, loin du tumulte médical habituel. 
              Nous croyons qu'une bonne consultation commence par une écoute attentive dans un cadre serein.
            </p>

            <div className="space-y-8">
              {values.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-brand/5 flex items-center justify-center text-brand">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-dark mb-2">{item.title}</h4>
                    <p className="text-text-mid leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
