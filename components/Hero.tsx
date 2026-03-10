"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, Clock, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -m-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span variants={itemVariants} className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Cabinet Médical Chaleureux & Humain
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-dark leading-tight mb-6">
              Votre santé au cœur de nos{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">préoccupations</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-brand/20 -z-10 -rotate-1"></span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-text-mid mb-8 leading-relaxed">
              Le Dr. Dupont, médecin généraliste, vous accueille dans un cadre moderne et bienveillant. 
              Une écoute attentive pour un suivi médical personnalisé de qualité, pour vous et votre famille.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="bg-brand text-white hover:bg-brand/90 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-lg shadow-brand/20"
              >
                <Calendar className="w-5 h-5" />
                <span>Prendre rendez-vous</span>
              </Link>
              <Link
                href="#services"
                className="bg-white text-text-dark hover:bg-gray-50 border border-gray-200 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Trust Chips */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: CheckCircle2, text: "Patients satisfaits" },
                { icon: Clock, text: "RDV sous 48h" },
                { icon: ShieldCheck, text: "Mutuelles acceptées" },
                { icon: Star, text: "Cabinet moderne" },
              ].map((chip, idx) => (
                <div key={idx} className="flex flex-col gap-2 items-start p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                  <chip.icon className="w-6 h-6 text-accent" />
                  <span className="text-xs font-semibold text-text-dark">{chip.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] lg:aspect-auto h-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                alt="Dr. Dupont en consultation"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
              {/* Overlay gradient for warmth */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent mix-blend-multiply" />
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Star className="w-6 h-6 fill-accent" />
              </div>
              <div>
                <div className="font-bold text-xl text-text-dark">4.9/5</div>
                <div className="text-sm text-text-mid font-medium">Avis vérifiés</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
