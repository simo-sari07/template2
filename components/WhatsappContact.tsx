"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function WhatsappContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);
  
  // Using medical brand colors
  const themeColor = "#2D6A4F"; // Primary Brand (Vert forêt)
  const accentColor = "#E07B54"; // Accent (Orange terracotta)

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleChat}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 md:bottom-28 right-4 md:right-8 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white font-body"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            <div className="p-6 text-white" style={{ background: `linear-gradient(135deg, ${themeColor} 0%, #1B4332 100%)` }}>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold">Cabinet Médical</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/80">En ligne - Réponse rapide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-text-mid text-sm leading-relaxed">
                Bonjour ! Comment pouvons-nous vous aider aujourd'hui ? Posez-nous vos questions ici.
              </p>
              <a 
                href="https://wa.me/+33123456789" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-xl border border-gray-100 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: themeColor }}>
                    Dr.D
                  </div>
                  <div>
                    <span className="block font-bold text-text-dark">Secrétariat</span>
                    <span className="text-xs text-text-mid">Assistance Médicale</span>
                  </div>
                </div>
                <FaWhatsapp size={24} style={{ color: themeColor }} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          onClick={toggleChat}
          className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden"
          style={{ background: isOpen ? '#ef4444' : themeColor }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 0 : [0, -5, 5, -5, 0] }}
          transition={{ rotate: { duration: 2, repeat: isOpen ? 0 : Infinity, repeatDelay: 3 } }}
        >
          {isOpen ? <FaTimes size={28} /> : <FaWhatsapp size={28} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-10 right-20 md:right-24 z-40 bg-white/90 backdrop-blur-md py-2 px-4 rounded-xl shadow-xl border border-gray-100 hidden md:block font-body"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-text-dark font-bold text-sm">Discutez avec nous</div>
            <div className="text-text-mid text-xs">Réponse sous quelques minutes</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
