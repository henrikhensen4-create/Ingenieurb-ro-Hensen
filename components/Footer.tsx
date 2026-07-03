"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { fadeUp, viewportConfig } from "@/lib/animations";

const footerLinks = {
  Leistungen: [
    "Webdesign",
    "Webentwicklung",
    "Mobiloptimierung",
    "SEO & Sichtbarkeit",
    "Mehr Anfragen",
  ],
  Navigation: [
    "Start",
    "Leistungen",
    "Über mich",
    "Referenzen",
    "Kontakt",
  ],
  Rechtliches: [
    "Datenschutz",
    "Impressum",
  ],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/[0.06] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <button onClick={scrollToTop} className="inline-flex items-center gap-3 group mb-6">
            <div className="w-9 h-9 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <Image src="/logo.png" alt="Webschmiede Logo" width={36} height={36} className="w-full h-full object-contain" />
            </div>
            <span className="font-tight font-bold text-xl text-[#D9D4D4] tracking-tight">
              WEBSCHMIEDE
            </span>
          </button>
          <p className="text-[#4F5160] text-sm leading-relaxed max-w-sm mx-auto mb-10">
            Premium Webdesign für Unternehmen in ganz Deutschland.
            Persönlich. Fair. Ergebnisorientiert.
          </p>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a
              href="mailto:henrik.hensen4@gmail.com"
              className="flex items-center gap-3 text-sm text-[#AEB4B8] hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center flex-shrink-0">
                <Mail size={14} className="text-[#D0002A]" />
              </div>
              henrik.hensen4@gmail.com
            </a>
            <a
              href="tel:015906340148"
              className="flex items-center gap-3 text-sm text-[#AEB4B8] hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center flex-shrink-0">
                <Phone size={14} className="text-[#D0002A]" />
              </div>
              0159 0634 0148
            </a>
            <div className="flex items-center gap-3 text-sm text-[#4F5160]">
              <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center flex-shrink-0">
                <MapPin size={14} className="text-[#D0002A]" />
              </div>
              Halle (Saale) · Deutschlandweit
            </div>
          </div>
        </motion.div>

        {/* Links grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-y border-white/[0.06]"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Impressum"
                          ? "/impressum"
                          : link === "Datenschutz"
                          ? "/datenschutz"
                          : "#"
                      }
                      className="text-sm text-[#4F5160] hover:text-[#AEB4B8] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-xs text-[#4F5160] text-center md:text-left">
            © {new Date().getFullYear()} Webschmiede ·
            Webdesign, das verkauft.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[#4F5160] hover:text-[#AEB4B8] hover:border-white/[0.15] transition-all duration-200"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="text-xs text-[#4F5160] hover:text-[#AEB4B8] transition-colors font-medium tracking-wide flex items-center gap-2 group"
          >
            Nach oben
            <span className="w-6 h-6 rounded-md glass-card flex items-center justify-center group-hover:border-white/[0.2] transition-all">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 8V2M2 5l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
