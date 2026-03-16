"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const team = [
  {
    name: "Dr. Johan Joe",
    role: "Lead Dentist",
    image: "https://html.awaikenthemes.com/dentaire/images/team-3.jpg",
  },
  {
    name: "Dr. Mike Johnson",
    role: "Senior Dentist",
    image: "https://dtdental.wpenginepowered.com/wp-content/uploads/2015/09/doctor2-1.jpg",
  },
  {
    name: "Dr. Samira Banson",
    role: "Orthodontist",
    image: "https://xcare-demo.pbminfotech.com/demo10/wp-content/uploads/sites/17/2024/05/physician-about-02.jpg",
  },
  {
    name: "Dr. Christopher Case",
    role: "Periodontist",
    image: "https://html.awaikenthemes.com/dentaire/images/team-4.jpg",
  },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#EEF4F0] overflow-hidden relative">

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-brand/15 pointer-events-none select-none">
        <svg width="22" height="22" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>
      <div className="absolute bottom-12 left-8 text-brand/30 pointer-events-none select-none">
        <svg width="42" height="42" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-10 text-brand/25 pointer-events-none select-none">
        <svg width="32" height="32" viewBox="0 0 28 28" fill="currentColor">
          <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
        </svg>
      </div>
      {/* dot */}
      <div className="absolute top-1/2 left-[30%] w-2.5 h-2.5 rounded-full bg-brand/30 pointer-events-none" />
      {/* Bottom plus */}
      <div className="absolute bottom-10 left-[38%] text-brand/15 pointer-events-none select-none">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <rect x="10" y="0" width="4" height="24" rx="2"/>
          <rect x="0" y="10" width="24" height="4" rx="2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-brand font-bold text-[11px] uppercase tracking-[0.18em] mb-3 block">
            + Our Team
          </span>
          <h2 className="text-4xl md:text-[2.8rem] font-bold text-[#0B1B3D] leading-tight">
            Our Friendly{" "}
            <span className="text-brand">Dentists Team</span>
          </h2>
          <p className="text-gray-400 mt-4 text-[15px] max-w-md mx-auto">
            We are committed to sustainability and eco-friendly initiatives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image container */}
              <div className="relative rounded-[1.5rem] overflow-hidden bg-[#dce8e0] aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Social icons — slide up on hover */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 pb-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  {socials.map(({ icon: Icon, href }, i) => (
                    <Link
                      key={i}
                      href={href}
                      className="w-9 h-9 rounded-lg bg-[#1B4332] text-white flex items-center justify-center hover:bg-brand transition-colors duration-200 shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>

                {/* Gradient at bottom for social readability */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Name & Role */}
              <div className="pt-5 text-center">
                <h3 className="font-bold text-[#0B1B3D] text-[16px] leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-[13px] mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}