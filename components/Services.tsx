"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Code2, Search, Smartphone, PhoneCall, Bot, Phone, ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import TiltCard from "@/components/TiltCard";

const categories = [
  {
    icon: Monitor,
    title: "Professionelles Webdesign",
    description:
      "Individuell gestaltet, technisch sauber umgesetzt und auf Ergebnisse ausgerichtet — von der Webentwicklung bis SEO und Mobiloptimierung.",
    highlight: false,
    details: [
      {
        icon: Code2,
        title: "Webentwicklung",
        description: "Sauberer Code statt Pagebuilder — schnell, sicher, zu 100% Ihr Eigentum.",
      },
      {
        icon: Search,
        title: "Gefunden werden (SEO)",
        description: "Damit Ihre Kunden Sie bei Google auch wirklich finden.",
      },
      {
        icon: Smartphone,
        title: "Mobiloptimierung",
        description: "Perfekt auf jedem Gerät — über 70% Ihrer Kunden schauen zuerst aufs Handy.",
      },
      {
        icon: PhoneCall,
        title: "Mehr Anfragen & Kunden",
        description: "Klare Struktur und Texte, die Besucher in Anfragen verwandeln.",
      },
    ],
  },
  {
    icon: Bot,
    title: "KI-Automationen",
    description:
      "Intelligente Automatisierung für Ihr Business — angefangen beim automatischen Rückruf neuer Anfragen.",
    highlight: true,
    details: [
      {
        icon: Phone,
        title: "Speed-to-Lead Voice Agent",
        description:
          "Unser eigens entwickelter KI-Telefonassistent ruft neue Anfragen in Sekunden zurück, fragt Bedarf, Budget und Zeitrahmen ab und meldet sich strukturiert bei Ihnen — bevor der Interessent bei der Konkurrenz landet.",
      },
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="leistungen" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="max-w-2xl mb-20"
        >
          <p className="section-label">Leistungen</p>
          <h2 className="font-tight font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-white mb-6">
            Was Webschmiede
            <br />
            <span className="gradient-text">für Sie macht.</span>
          </h2>
          <p className="text-[#AEB4B8] text-lg leading-relaxed">
            Keine Agentur-Bürokratie. Kein Fachchinesisch. Nur eine Website,
            die für Ihr Business arbeitet — während Sie sich um Ihr Kerngeschäft kümmern.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-5"
        >
          {categories.map((category, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={category.title} variants={fadeUp}>
                <TiltCard
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  className={`glass-card p-8 group cursor-pointer relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(208,0,42,0.25)] ${
                    category.highlight
                      ? "border-[#690028]/40 bg-gradient-to-br from-[#690028]/10 to-transparent"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#690028]/5 to-transparent rounded-3xl" />
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        category.highlight
                          ? "bg-gradient-to-br from-[#690028] to-[#D0002A]"
                          : "bg-white/[0.06] group-hover:bg-white/[0.1]"
                      }`}
                    >
                      <category.icon size={22} className={category.highlight ? "text-white" : "text-[#AEB4B8]"} />
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={18} className="text-[#4F5160] group-hover:text-[#AEB4B8] transition-colors" />
                    </motion.div>
                  </div>

                  <h3 className="font-tight font-bold text-xl text-white mb-3">{category.title}</h3>
                  <p className="text-[#AEB4B8] text-sm leading-relaxed">{category.description}</p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-4">
                          {category.details.map((detail) => (
                            <div key={detail.title} className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <detail.icon size={14} className="text-[#D0002A]" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">{detail.title}</p>
                                <p className="text-xs text-[#AEB4B8] leading-relaxed">{detail.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
