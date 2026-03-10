"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Un médecin exceptionnel. Le Dr. Dupont prend vraiment le temps d'écouter et d'expliquer. On ne se sent pas du tout comme un numéro, mais comme un être humain à part entière. Le cabinet est très chaleureux.",
    author: "Marie L.",
  },
  {
    id: 2,
    rating: 5,
    text: "Enfin un cabinet où on se sent écouté ! La prise de rendez-vous est rapide, l'équipe est souriante et rassurante. Les locaux sont d'une propreté impeccable. Je recommande les yeux fermés.",
    author: "Thomas B.",
  },
  {
    id: 3,
    rating: 5,
    text: "Suivie pour une maladie chronique depuis des années, j'ai trouvé ici l'accompagnement humain et médical dont j'avais besoin. Merci à toute l'équipe pour votre bienveillance au quotidien.",
    author: "Sophie Y.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FFF5F1] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/5 rounded-full blur-3xl rounded-tr-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            Ce que disent nos patients
          </h2>
          <p className="text-text-mid">
            Votre confiance est notre plus belle réussite. Découvrez l'expérience des patients qui nous font confiance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex justify-center mb-8">
            <Quote className="w-16 h-16 text-accent/20" />
          </div>

          <div className="relative h-[250px] md:h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-text-dark font-medium leading-relaxed mb-8 px-4 md:px-12">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="font-heading font-bold text-lg text-brand">
                  {testimonials[currentIndex].author}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-brand/20 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === idx ? "bg-accent" : "bg-brand/20"
                  }`}
                  aria-label={`Aller au témoignage ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-brand/20 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
              aria-label="Témoignage suivant"
            >
               <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
