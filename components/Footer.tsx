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
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="flex items-center gap-3 group mb-6">
              <div className="w-9 h-9 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                <Image src="/logo.png" alt="Webschmiede Logo" width={36} height={36} className="w-full h-full object-contain" />
              </div>
              <span className="font-tight font-bold text-xl text-[#D9D4D4] tracking-tight">
                WEBSCHMIEDE
              </span>
            </button>
            <p className="text-[#4F5160] text-sm leading-relaxed max-w-sm mb-8">
              Premium Webdesign für Unternehmen in ganz Deutschland.
              Persönlich. Fair. Ergebnisorientiert.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="mailto:henrik.hensen4@gmail.com"
                className="flex items-center gap-3 text-sm text-[#AEB4B8] hover:text-white transition-colors group w-fit"
              >
                <Mail size={14} className="text-[#D0002A]" />
                henrik.hensen4@gmail.com
              </a>
              <a
                href="tel:015906340148"
                className="flex items-center gap-3 text-sm text-[#AEB4B8] hover:text-white transition-colors group w-fit"
              >
                <Phone size={14} className="text-[#D0002A]" />
                0159 0634 0148
              </a>
              <div className="flex items-center gap-3 text-sm text-[#4F5160]">
                <MapPin size={14} className="text-[#D0002A]" />
                Deutschlandweit · Remote & persönlich
              </div>
            </div>
          </div>

          {/* CTA box */}
          <div className="glass-card p-8 border-[#690028]/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D0002A] animate-pulse" />
              <span className="text-xs text-[#4F5160] font-medium tracking-widest uppercase">
                Jetzt anfragen
              </span>
            </div>
            <h3 className="font-tight font-bold text-2xl text-white mb-3">
              Ihre Website in
              <br />
              <span className="text-[#AEB4B8] font-normal text-xl">2–3 Wochen — fertig.</span>
            </h3>
            <p className="text-[#4F5160] text-sm mb-6 leading-relaxed">
              Kostenlose Analyse, kein Verkaufsdruck, direkte Antwort.
              Lassen Sie uns gemeinsam schauen, was für Ihren Betrieb möglich ist.
            </p>
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary text-sm inline-flex"
            >
              <span>Kostenlose Analyse</span>
            </a>
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
