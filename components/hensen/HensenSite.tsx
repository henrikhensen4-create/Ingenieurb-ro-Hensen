"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";

const navy = "#1A2B4C";
const navyDark = "#0F1C33";
const gold = "#F2A900";
const green = "#7CB342";

const qualifikationen = [
  "Bauvorlageberechtigung",
  "Nachweisberechtigter gem. EnEV §21",
  "DGS-Solarberater-Zertifikat",
  "TÜV Rheinland Sachkundenachweis PV",
];

const leistungen = [
  {
    label: "01",
    titel: "Potential- und Standortanalyse",
    text: "Realistische Einschätzung von Flächen und Objekten für Wind- und Solarenergie — auf Basis von GIS-Analysen, Ertragssimulationen und Wirtschaftlichkeitsbewertung.",
    punkte: ["Vorabeinschätzung Nutzungspotential", "Machbarkeitsstudien & Weißflächenanalysen", "Lastgang- und Verbrauchsanalysen"],
    farbe: green,
  },
  {
    label: "02",
    titel: "Planung und Entwicklung",
    text: "Genehmigungs- und Ausführungsplanung für Windenergie- und Photovoltaikprojekte, inklusive Projektkoordination und Netzanschlussplanung.",
    punkte: ["Genehmigungsplanung inkl. Bauantrag", "Projektkoordination aller Fachplanungen", "Ertragsprognosen & Wirtschaftlichkeit"],
    farbe: gold,
  },
  {
    label: "03",
    titel: "Objekt- und Flächenvermarktung",
    text: "Vermittlung zwischen Flächeneigentümern und Projektentwicklern — faire, transparente Begleitung der Vermarktung und Verpachtung.",
    punkte: ["Bewertung der Vermarktungsfähigkeit", "Vermittlung an Projektentwickler", "Transparente Vertragsbegleitung"],
    farbe: navy,
  },
];

const ablauf = [
  { nr: "01", titel: "Erstanalyse", text: "Einschätzung der Fläche bzw. des Objekts und der relevanten Rahmenbedingungen.", detail: "Erste Vor-Ort- bzw. Datenbewertung: Eigentumsverhältnisse, Flächenzuschnitt, planungsrechtliche Grundlagen." },
  { nr: "02", titel: "Potentialbewertung", text: "GIS-Analyse, Ertragssimulation und Wirtschaftlichkeitsbetrachtung.", detail: "Ertragssimulation auf Basis von Wind- bzw. Einstrahlungsdaten, erste Cashflow- und Amortisationsrechnung." },
  { nr: "03", titel: "Genehmigungsplanung", text: "Erstellung der Antragsunterlagen und Abstimmung mit Behörden.", detail: "Koordination aller Fachgutachten, Erstellung der Bauantragsunterlagen, Abstimmung mit Genehmigungsbehörden." },
  { nr: "04", titel: "Ausführungsplanung", text: "Detailplanung, Netzanschluss und Koordination der Fachgewerke.", detail: "Planung Netzanschluss, Infrastruktur (z. B. Kabeltrassen) und Abstimmung mit dem Energieversorger." },
  { nr: "05", titel: "Realisierung", text: "Begleitung bis zur Inbetriebnahme und zum Netzanschluss.", detail: "Baubegleitung, Qualitätssicherung und Übergabe bis zur Inbetriebnahme der Anlage." },
];

const zeitstrahl = [
  { jahr: "2001", text: "Gründung des Ingenieurbüros, Schwerpunkt Tragwerksplanung." },
  { jahr: "2004", text: "Fokussierung auf erneuerbare Energien, Beginn mit Photovoltaikprojekten." },
  { jahr: "2013", text: "Projektentwicklung Windenergie bei einem deutschen Projektentwicklungsunternehmen." },
  { jahr: "Heute", text: "Unabhängige Beratung und Planung für Windenergie und Photovoltaik." },
];

const zielgruppen = [
  { titel: "Flächeneigentümer & Privatpersonen", text: "Errichtung eigener Anlagen oder Vermarktung von Flächen zur Verpachtung.", farbe: green },
  { titel: "Planungsbüros & Dienstleister", text: "Fachliche Zuarbeit und Koordination bei Projekten erneuerbarer Energien.", farbe: gold },
  { titel: "Projektentwicklungsunternehmen", text: "Standortbewertung, Genehmigungsplanung und Projektkoordination.", farbe: navy },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

function ScrollProgressHensen() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX, background: `linear-gradient(90deg, ${navy}, ${gold}, ${green})` }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
    />
  );
}

function FloatingIcon({ children, className, duration = 6, delay = 0 }: { children: React.ReactNode; className?: string; duration?: number; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#1A2B4C]/10">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <a href="#top" className="shrink-0">
          <Image
            src="/ingenieurbuero-hensen/logo.png"
            alt="Ingenieurbüro Hensen"
            width={296}
            height={42}
            priority
            className="h-9 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#1A2B4C]/70">
          {[
            ["Leistungen", "#leistungen"],
            ["Projektablauf", "#ablauf"],
            ["Erfahrung", "#erfahrung"],
            ["Kontakt", "#kontakt"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="relative group">
              {label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: navy }}
              />
            </a>
          ))}
        </nav>
        <MagneticButton
          href="#kontakt"
          className="hidden sm:inline-flex items-center rounded-md text-white text-sm font-medium px-5 py-2.5 transition-colors"
        >
          <span style={{ background: navy }} className="absolute inset-0 rounded-md -z-10" />
          <span className="relative">Projekt besprechen</span>
        </MagneticButton>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menü öffnen"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="h-0.5 w-6 bg-[#1A2B4C] block" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-0.5 w-6 bg-[#1A2B4C] block" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="h-0.5 w-6 bg-[#1A2B4C] block" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-[#1A2B4C]/10 bg-white"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-[#1A2B4C]/80">
              {[
                ["Leistungen", "#leistungen"],
                ["Projektablauf", "#ablauf"],
                ["Erfahrung", "#erfahrung"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const words = "Unabhängige Ingenieurplanung für Windenergie und Photovoltaik".split(" ");
  return (
    <section id="top" className="relative overflow-hidden border-b border-[#1A2B4C]/10">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(${navy} 1px, transparent 1px), linear-gradient(90deg, ${navy} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <FloatingIcon className="absolute top-24 right-[8%] hidden lg:block" duration={7}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="absolute top-48 right-[18%] hidden lg:block" duration={5} delay={1}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.4">
          <path d="M3 12h7M3 12c0-2 1-3 3-3M3 12c0 2 1 3 3 3M14 6l3 3-3 3M14 12h7M19 18l-3-3 3-3" strokeLinecap="round" />
        </svg>
      </FloatingIcon>
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A2B4C]/50 mb-6"
        >
          Beratung · Planung · Projektentwicklung
        </motion.p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] max-w-3xl flex flex-wrap">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mr-3 inline-block"
            >
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 text-lg text-[#1A2B4C]/70 max-w-xl leading-relaxed"
        >
          Von der Standortanalyse bis zur genehmigungsreifen Planung — seit 2004 in der
          Projektentwicklung erneuerbarer Energien.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="#kontakt" className="inline-block">
            <span className="inline-flex items-center rounded-md text-white text-sm font-medium px-6 py-3.5" style={{ background: navy }}>
              Projekt besprechen
            </span>
          </MagneticButton>
          <a
            href="#leistungen"
            className="inline-flex items-center rounded-md border border-[#1A2B4C]/20 text-sm font-medium px-6 py-3.5 hover:border-[#1A2B4C]/40 hover:bg-[#1A2B4C]/5 transition-colors"
          >
            Leistungen ansehen
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const loop = [...qualifikationen, ...qualifikationen];
  return (
    <section className="border-b border-[#1A2B4C]/10 bg-[#F7F8F9] overflow-hidden">
      <motion.div
        className="flex gap-12 py-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((q, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-[#1A2B4C]/70">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: i % 2 === 0 ? gold : green }} />
            {q}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function EnergyToggle() {
  const [active, setActive] = useState<"wind" | "pv">("wind");
  const content = {
    wind: {
      farbe: green,
      titel: "Windenergie",
      text: "Planung und Entwicklung von Onshore-Windenergieprojekten — von der Standortbewertung über die Genehmigungsplanung bis zur Netzanschlussplanung.",
      icon: (
        <path d="M3 12h7M3 12c0-2 1-3 3-3M3 12c0 2 1 3 3 3M14 6l3 3-3 3M14 12h7M19 18l-3-3 3-3" strokeLinecap="round" />
      ),
    },
    pv: {
      farbe: gold,
      titel: "Photovoltaik",
      text: "Ertragsprognosen, Lastganganalysen und Wirtschaftlichkeitsuntersuchungen für Solarprojekte — von der Eigenverbrauchsanlage bis zur Freiflächenanlage.",
      icon: (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
        </>
      ),
    },
  } as const;
  const c = content[active];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-center gap-3 mb-10">
        <div className="relative inline-flex rounded-full border border-[#1A2B4C]/15 p-1">
          {(["wind", "pv"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="relative px-6 py-2.5 text-sm font-medium rounded-full z-10"
              style={{ color: active === key ? "#fff" : navy }}
            >
              {active === key && (
                <motion.span
                  layoutId="energy-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: content[key].farbe }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {key === "wind" ? "Windenergie" : "Photovoltaik"}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="rounded-xl border border-[#1A2B4C]/10 p-10 flex flex-col md:flex-row md:items-center gap-8"
        >
          <span
            className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
            style={{ background: `${c.farbe}1A` }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={c.farbe} strokeWidth="1.5">
              {c.icon}
            </svg>
          </span>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{c.titel}</h3>
            <p className="text-[#1A2B4C]/70 leading-relaxed max-w-xl">{c.text}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function Leistungen() {
  return (
    <section id="leistungen" className="border-t border-[#1A2B4C]/10 bg-[#F7F8F9]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.p {...fadeUp()} className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A2B4C]/50 mb-3">
          Leistungen
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="text-3xl font-bold tracking-tight mb-12 max-w-xl">
          Drei Leistungsbereiche, ein Ansprechpartner
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {leistungen.map((l, i) => (
            <motion.div key={l.label} {...fadeUp(0.1 * i)}>
              <TiltCard className="bg-white rounded-xl border border-[#1A2B4C]/10 p-7 flex flex-col h-full cursor-default [transform-style:preserve-3d]">
                <span
                  className="text-xs font-semibold mb-4 inline-block w-fit px-2 py-1 rounded"
                  style={{ color: l.farbe, background: `${l.farbe}14` }}
                >
                  {l.label}
                </span>
                <h3 className="text-lg font-semibold mb-3">{l.titel}</h3>
                <p className="text-sm text-[#1A2B4C]/70 leading-relaxed mb-5">{l.text}</p>
                <ul className="mt-auto space-y-2 text-sm text-[#1A2B4C]/70">
                  {l.punkte.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span style={{ color: l.farbe }}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ablauf() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section id="ablauf" className="mx-auto max-w-6xl px-6 py-24">
      <motion.p {...fadeUp()} className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A2B4C]/50 mb-3">
        Projektablauf
      </motion.p>
      <motion.h2 {...fadeUp(0.05)} className="text-3xl font-bold tracking-tight mb-4 max-w-xl">
        Von der Erstanalyse bis zur Realisierung
      </motion.h2>
      <p className="text-sm text-[#1A2B4C]/50 mb-14">Klicken Sie auf einen Schritt für Details.</p>

      <div className="grid md:grid-cols-5 gap-3 mb-8">
        {ablauf.map((schritt, i) => (
          <button
            key={schritt.nr}
            onClick={() => setActiveIdx(i)}
            className="relative text-left group"
          >
            <div
              className="text-3xl font-bold mb-4 transition-colors"
              style={{ color: activeIdx === i ? navy : `${navy}26` }}
            >
              {schritt.nr}
            </div>
            <h3 className="text-sm font-semibold mb-2">{schritt.titel}</h3>
            <p className="text-sm text-[#1A2B4C]/65 leading-relaxed">{schritt.text}</p>
            <motion.div
              className="mt-4 h-1 rounded-full"
              style={{ background: activeIdx === i ? gold : `${navy}14` }}
              layout
            />
            {i < ablauf.length - 1 && (
              <div className="hidden md:block absolute top-3 right-[-14px] w-6 h-px bg-[#1A2B4C]/15" />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="rounded-xl p-7 text-sm leading-relaxed" style={{ background: "#F7F8F9", color: `${navy}CC` }}>
            <span className="font-semibold" style={{ color: navy }}>
              Schritt {ablauf[activeIdx].nr} — {ablauf[activeIdx].titel}:{" "}
            </span>
            {ablauf[activeIdx].detail}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function Erfahrung() {
  return (
    <section id="erfahrung" className="text-white" style={{ background: navyDark }}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.p {...fadeUp()} className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-3">
          Erfahrung
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="text-3xl font-bold tracking-tight mb-14 max-w-xl">
          Über 20 Jahre Ingenieurpraxis
        </motion.h2>
        <div className="relative grid md:grid-cols-4 gap-8">
          <motion.div
            className="hidden md:block absolute top-0 left-0 h-0.5 origin-left"
            style={{ background: `linear-gradient(90deg, ${gold}, ${green})`, width: "100%" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {zeitstrahl.map((z, i) => (
            <motion.div
              key={z.jahr}
              {...fadeUp(0.1 * i)}
              whileHover={{ y: -4 }}
              className="border-t-2 pt-5 transition-colors"
              style={{ borderColor: `${gold}66` }}
            >
              <div className="text-2xl font-bold mb-2">{z.jahr}</div>
              <p className="text-sm text-white/70 leading-relaxed">{z.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Zielgruppen() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.p {...fadeUp()} className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A2B4C]/50 mb-3">
        Für wen
      </motion.p>
      <motion.h2 {...fadeUp(0.05)} className="text-3xl font-bold tracking-tight mb-14 max-w-xl">
        Zusammenarbeit auf Augenhöhe
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 [perspective:1200px]">
        {zielgruppen.map((z, i) => (
          <FlipCard key={z.titel} {...z} delay={0.1 * i} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ titel, text, farbe, delay }: { titel: string; text: string; farbe: string; delay: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      {...fadeUp(delay)}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="relative h-44 cursor-pointer [transform-style:preserve-3d]"
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 rounded-xl border border-[#1A2B4C]/10 p-7 flex items-center [backface-visibility:hidden]"
        style={{ background: "#fff" }}
      >
        <h3 className="text-base font-semibold">{titel}</h3>
      </div>
      <div
        className="absolute inset-0 rounded-xl p-7 flex items-center text-sm leading-relaxed text-white [backface-visibility:hidden]"
        style={{ background: navy, transform: "rotateY(180deg)" }}
      >
        <p>
          <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 align-middle" style={{ background: farbe }} />
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function Kontakt() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="border-t border-[#1A2B4C]/10 bg-[#F7F8F9]">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
        <motion.div {...fadeUp()}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A2B4C]/50 mb-3">Kontakt</p>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Projekt besprechen</h2>
          <div className="space-y-1 text-[#1A2B4C]/80 text-sm leading-relaxed">
            <p className="font-semibold text-[#1A2B4C]">Dipl.-Ing. (FH) Jörg Hensen</p>
            <p>Humboldtstr. 46</p>
            <p>06114 Halle (Saale)</p>
            <p className="pt-3">
              <a href="tel:+493456826353" className="hover:underline">+49 (0)345 6826353</a>
            </p>
            <p>
              <a href="mailto:info@ib-hensen.de" className="hover:underline">info@ib-hensen.de</a>
            </p>
          </div>
        </motion.div>
        <motion.div {...fadeUp(0.1)}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-[#7CB342]/40 bg-[#7CB342]/10 p-8 text-sm"
                style={{ color: navy }}
              >
                Danke für Ihre Anfrage — wir melden uns zeitnah zurück.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input required className="rounded-md border border-[#1A2B4C]/15 px-4 py-3 text-sm outline-none focus:border-[#1A2B4C]/40 transition-colors" placeholder="Name" />
                  <input required type="email" className="rounded-md border border-[#1A2B4C]/15 px-4 py-3 text-sm outline-none focus:border-[#1A2B4C]/40 transition-colors" placeholder="E-Mail" />
                </div>
                <textarea required className="w-full rounded-md border border-[#1A2B4C]/15 px-4 py-3 text-sm outline-none focus:border-[#1A2B4C]/40 transition-colors" rows={4} placeholder="Ihr Projekt / Ihre Fläche" />
                <MagneticButton href="#" onClick={(e) => e.preventDefault()} className="inline-block">
                  <button type="submit" className="rounded-md text-white text-sm font-medium px-6 py-3 transition-colors" style={{ background: navy }}>
                    Anfrage senden
                  </button>
                </MagneticButton>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1A2B4C]/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-[#1A2B4C]/50">
        <Image src="/ingenieurbuero-hensen/logo.png" alt="Ingenieurbüro Hensen" width={220} height={31} className="h-7 w-auto opacity-80" />
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#1A2B4C]">Impressum</a>
          <a href="#" className="hover:text-[#1A2B4C]">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}

export default function HensenSite() {
  return (
    <div className="min-h-screen bg-white text-[#1A2B4C]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <ScrollProgressHensen />
      <Header />
      <Hero />
      <TrustBar />
      <EnergyToggle />
      <Leistungen />
      <Ablauf />
      <Erfahrung />
      <Zielgruppen />
      <Kontakt />
      <Footer />
    </div>
  );
}
