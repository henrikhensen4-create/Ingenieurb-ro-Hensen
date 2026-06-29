"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const projects = [
  {
    label: "Salon Lumière",
    description: "Premium-Webseite für einen Friseursalon — mit Online-Terminbuchung und edler, ruhiger Optik.",
    tags: ["Friseursalon", "Terminbuchung"],
    href: "https://friseur-nine.vercel.app/",
    image: "/projects/salon-lumiere.jpg",
  },
];

const placeholders = [{ label: "Projekt 02" }, { label: "Projekt 03" }];

export default function Portfolio() {
  return (
    <section id="referenzen" className="section-padding border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <p className="section-label">Referenzen</p>
            <h2 className="font-tight font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-white">
              Ausgewählte
              <br />
              <span className="gradient-text">Projekte.</span>
            </h2>
          </div>
          <p className="text-[#AEB4B8] max-w-sm leading-relaxed">
            Weitere Projekte entstehen gerade. Seien Sie einer der nächsten
            Betriebe, der hier erscheint.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <motion.a
              key={project.label}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="glass-card overflow-hidden group block"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/[0.05]">
                <Image
                  src={project.image}
                  alt={`Vorschau der Webseite von ${project.label}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-5">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <ArrowUpRight size={14} className="text-white" />
                    <span className="text-xs text-white font-medium tracking-widest uppercase">Live ansehen</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#D0002A]" />
                  <span className="text-xs text-[#4F5160] font-medium tracking-widest uppercase">Live-Projekt</span>
                </div>
                <h3 className="font-tight font-bold text-xl text-white mb-2">{project.label}</h3>
                <p className="text-[#AEB4B8] text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] border border-white/[0.07] text-[#4F5160]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

          {placeholders.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="glass-card overflow-hidden group"
            >
              <div className="w-full aspect-[16/10] bg-white/[0.02] border-b border-white/[0.05] flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-dashed border-white/[0.12] flex items-center justify-center group-hover:border-[#690028]/50 transition-colors duration-500">
                  <Plus size={18} className="text-white/10 group-hover:text-[#690028]/60 transition-colors duration-500" />
                </div>
                <span className="text-xs text-[#4F5160] font-medium tracking-widest uppercase">
                  {item.label}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
                  <div className="h-3 w-20 rounded bg-white/[0.05]" />
                </div>
                <div className="h-5 w-40 rounded bg-white/[0.04] mb-2" />
                <div className="h-3 w-full rounded bg-white/[0.03] mb-1.5" />
                <div className="h-3 w-3/4 rounded bg-white/[0.03]" />

                <div className="flex gap-2 mt-5 pt-4 border-t border-white/[0.05]">
                  <div className="h-6 w-16 rounded-full bg-white/[0.03] border border-white/[0.05]" />
                  <div className="h-6 w-20 rounded-full bg-white/[0.03] border border-white/[0.05]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA below */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <p className="text-[#4F5160] text-sm mb-5">
            Ihr Betrieb könnte das nächste Projekt sein.
          </p>
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary inline-flex"
          >
            <span>Jetzt anfragen</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
