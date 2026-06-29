"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

const industries = [
  "Handwerksbetriebe",
  "Restaurants & Cafés",
  "Kanzleien & Büros",
  "Fitnessstudios",
  "Arztpraxen",
  "Immobilienmakler",
  "Friseursalons",
  "Bauunternehmen",
  "Einzelhandel",
  "Coaching & Beratung",
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-20 border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center text-xs text-[#4F5160] font-medium tracking-[0.2em] uppercase mb-10"
        >
          Für Branchen & Unternehmen in ganz Deutschland
        </motion.p>

        <div className="relative">
          <div className="flex gap-10 md:gap-16 items-center overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-10 md:gap-16 items-center flex-shrink-0"
            >
              {[...industries, ...industries].map((name, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-2.5 text-[#4F5160] hover:text-[#AEB4B8] transition-colors duration-300"
                >
                  <span className="w-1 h-1 rounded-full bg-[#690028]" />
                  <span className="font-tight font-semibold text-sm tracking-wide whitespace-nowrap select-none">
                    {name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
