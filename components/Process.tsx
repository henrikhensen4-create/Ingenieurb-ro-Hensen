"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Analyse & Strategie",
    description:
      "Wir analysieren Ihr Business, Ihre Zielgruppe und Ihre Wettbewerber. Daraus entsteht eine maßgeschneiderte Strategie, die auf echtem Wachstum basiert.",
    duration: "Woche 1",
  },
  {
    number: "02",
    title: "Design & Konzept",
    description:
      "Auf Basis der Strategie entwickeln wir ein visuelles Konzept. Sie sehen erste Designs bevor auch nur eine Zeile Code geschrieben wird.",
    duration: "Woche 1–2",
  },
  {
    number: "03",
    title: "Entwicklung",
    description:
      "Unser Entwicklungsteam baut Ihre Website mit modernsten Technologien. Performance, Sicherheit und Skalierbarkeit stehen im Mittelpunkt.",
    duration: "Woche 2–4",
  },
  {
    number: "04",
    title: "Launch & Optimierung",
    description:
      "Nach intensivem Testing gehen wir live. Danach analysieren wir die Ergebnisse und optimieren kontinuierlich für maximale Performance.",
    duration: "Woche 4+",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <section id="prozess" className="section-padding border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="max-w-2xl mb-20"
        >
          <p className="section-label">Prozess</p>
          <h2 className="font-tight font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-white mb-6">
            Von der Idee zum
            <br />
            <span className="gradient-text">fertigen Produkt.</span>
          </h2>
          <p className="text-[#AEB4B8] text-lg leading-relaxed">
            Ein klarer, transparenter Prozess — ohne Überraschungen.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={containerRef} className="relative">
          {/* Static track */}
          <div className="absolute left-6 md:left-[7.5rem] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />
          {/* Animated progress line, fills as you scroll */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-6 md:left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#D0002A] to-[#690028] origin-top hidden md:block"
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative flex gap-8 md:gap-16 items-start py-10 md:py-12 border-b border-white/[0.05] last:border-0 group"
              >
                {/* Step number — left column */}
                <div className="flex-shrink-0 w-12 md:w-32 flex md:flex-col items-center md:items-end gap-3 md:gap-0">
                  <motion.div
                    whileInView={{ scale: [0.7, 1.1, 1] }}
                    viewport={viewportConfig}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative z-10 w-12 h-12 rounded-xl glass-card border-white/[0.1] flex items-center justify-center flex-shrink-0 group-hover:border-[#690028]/40 group-hover:scale-110 transition-all duration-500"
                  >
                    <span className="font-tight font-black text-sm text-[#D0002A]">
                      {step.number}
                    </span>
                  </motion.div>
                  <span className="hidden md:block text-xs text-[#4F5160] font-medium tracking-wide mt-4 text-right">
                    {step.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-tight font-bold text-xl md:text-2xl text-white leading-tight">
                      {step.title}
                    </h3>
                    <span className="md:hidden text-xs text-[#4F5160] font-medium tracking-wide flex-shrink-0 pt-1">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#AEB4B8] leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Large ghost number */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 step-number opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none pointer-events-none hidden lg:block">
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
