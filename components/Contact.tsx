"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Nous Trouver
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            Contact & Accès
          </h2>
          <p className="text-text-mid">
            Prenez rendez-vous en ligne, par téléphone, ou venez nous rencontrer directement au cabinet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold font-heading text-text-dark mb-6">
              Envoyer un message
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-dark">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-text-dark">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-dark">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                  placeholder="jean.dupont@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-dark">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand/90 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Envoyer le message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Right: Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand/5 rounded-full flex items-center justify-center text-brand">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Adresse</h4>
                  <p className="text-text-mid leading-relaxed">
                    15 Rue de la Paix<br />
                    75002 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand/5 rounded-full flex items-center justify-center text-brand">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Téléphone</h4>
                  <p className="text-text-mid mb-2">01 23 45 67 89</p>
                  <p className="text-sm text-text-mid font-medium">Urgences : 15</p>
                </div>
              </div>

              <div className="flex gap-4 sm:col-span-2">
                <div className="flex-shrink-0 w-12 h-12 bg-brand/5 rounded-full flex items-center justify-center text-brand">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-text-dark mb-3">Horaires d'ouverture</h4>
                  <div className="space-y-2 text-text-mid text-sm">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium text-text-dark">08:30 - 19:30</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Samedi</span>
                      <span className="font-medium text-text-dark">09:00 - 12:30</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Dimanche & Jours fériés</span>
                      <span className="font-medium text-accent">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1683267568529!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
