"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for window.onload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#1B4332] flex items-center justify-center pointer-events-none"
        >
          <div className="relative">
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border-t-2 border-r-2 border-white/20 border-t-white"
            />
            
            {/* Logo in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-10 h-10">
                 <Image
                  src="https://xcare-demo.pbminfotech.com/demo10/wp-content/uploads/sites/17/2024/05/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>
          
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
