"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.7)_70%,_rgba(0,0,0,0.95)_100%)]" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#690028]/20 blur-[120px]" />
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#D0002A]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#690028]/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20"
      >
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-[#AEB4B8] text-xs font-medium tracking-widest uppercase mb-8 backdrop-blur-sm"
        >
          <Sparkles size={11} className="text-[#D0002A]" />
          Premium Webdesign · Deutschlandweit
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-tight font-black text-[clamp(2.6rem,7.5vw,6.5rem)] leading-[0.97] tracking-[-0.04em] text-[#D9D4D4]"
          >
            Webdesign, das
            <br />
            <span className="text-white">nicht nur schön</span>
            <br />
            <span className="gradient-text-red">aussieht.</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="text-[#AEB4B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          Webschmiede entwickelt digitale Auftritte für{" "}
          <span className="text-[#D9D4D4] font-medium">ambitionierte Unternehmen</span>{" "}
          — schnell, modern und so gebaut, dass aus Besuchern Kunden werden.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); handleScroll("#kontakt"); }}
            className="btn-primary text-base group"
          >
            <span>Kostenlose Analyse anfragen</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            href="#referenzen"
            onClick={(e) => { e.preventDefault(); handleScroll("#referenzen"); }}
            className="btn-secondary text-base"
          >
            Beispiele ansehen
          </MagneticButton>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => handleScroll("#trusted")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4F5160] hover:text-[#AEB4B8] transition-colors group"
        aria-label="Nach unten scrollen"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
