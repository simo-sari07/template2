"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Dr. Jean Dupont",
      role: "Médecin Généraliste",
      bio: "Spécialiste en médecine interne et prévention, le Dr. Dupont vous accompagne au quotidien.",
      image: "https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=400&auto=format&fit=crop",
      linkedin: "#",
      email: "mailto:contact@drdupont.fr"
    },
    {
      name: "Dr. Marie Martin",
      role: "Pédiatre",
      bio: "Experte dans le suivi du développement de l'enfant et de l'adolescent.",
      image: "https://images.unsplash.com/photo-1594824436998-058a23116fc7?q=80&w=400&auto=format&fit=crop",
      linkedin: "#",
      email: "mailto:marie@drdupont.fr"
    },
    {
      name: "Sophie Leroy",
      role: "Infirmière Coordinatrice",
      bio: "Assure le lien entre les différents professionnels et organise vos soins.",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400&auto=format&fit=crop",
      linkedin: "#",
      email: "mailto:sophie@drdupont.fr"
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Notre Équipe
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            Des professionnels à votre écoute
          </h2>
          <p className="text-text-mid">
            Une équipe pluridisciplinaire soudée pour vous offrir une prise en charge complète et bienveillante.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand/10 mix-blend-overlay"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-text-mid mb-6 text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex items-center gap-3">
                  <Link
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href={member.email}
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
