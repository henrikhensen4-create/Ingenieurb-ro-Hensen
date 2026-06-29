"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Schnelle, unkomplizierte Zusammenarbeit und ein Ergebnis, das deutlich hochwertiger wirkt als unsere alte Seite. Die Terminbuchung läuft seitdem reibungslos.",
    author: "Inhaberin",
    company: "Salon Lumière",
  },
];

const placeholders = ["Stimme 02", "Stimme 03", "Stimme 04", "Stimme 05"];

export default function Testimonials() {
  return (
    <section className="section-padding border-t border-white/[0.06] bg-gradient-to-b from-transparent via-[#690028]/[0.03] to-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label justify-center">Stimmen</p>
          <h2 className="font-tight font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-white mb-6">
            Was Kunden
            <br />
            <span className="gradient-text">sagen.</span>
          </h2>
          <p className="text-[#AEB4B8] text-lg leading-relaxed">
            Weitere Stimmen folgen mit jedem neuen Projekt.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={fadeUp}
              className="glass-card p-8 flex flex-col group min-h-[220px] border-[#690028]/20"
            >
              <div className="text-4xl text-[#D0002A]/30 font-serif leading-none mb-5 font-bold select-none">
                &ldquo;
              </div>
              <p className="text-[#D9D4D4] text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#690028] to-[#D0002A] flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                  {t.company.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-[#4F5160]">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {placeholders.map((label) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="glass-card p-8 flex flex-col group min-h-[220px]"
            >
              <div className="text-4xl text-white/[0.04] font-serif leading-none mb-5 font-bold select-none">
                &ldquo;
              </div>
              <div className="flex-1 space-y-2.5 mb-6">
                <div className="h-3 w-full rounded bg-white/[0.04]" />
                <div className="h-3 w-5/6 rounded bg-white/[0.03]" />
                <div className="h-3 w-4/5 rounded bg-white/[0.04]" />
                <div className="h-3 w-3/4 rounded bg-white/[0.03]" />
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-dashed border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-[#690028]/30 transition-colors duration-500">
                  <Plus size={13} className="text-white/10 group-hover:text-[#690028]/50 transition-colors duration-500" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-3 w-24 rounded bg-white/[0.05]" />
                  <div className="h-2.5 w-32 rounded bg-white/[0.03]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
