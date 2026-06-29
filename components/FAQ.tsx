"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const faqs = [
  {
    question: "Was kostet eine Website bei der Webschmiede?",
    answer:
      "Das hängt von Ihrem Bedarf ab. Eine einfache, professionelle Business-Website beginnt ab ca. 800 €. In einem kostenlosen Erstgespräch schauen wir gemeinsam, was Sie wirklich brauchen — ohne Schnickschnack, den Sie nie nutzen. Sie bekommen ein faires, transparentes Angebot.",
  },
  {
    question: "Wie lange dauert es, bis meine Website fertig ist?",
    answer:
      "In der Regel 2–3 Wochen. Voraussetzung ist, dass Sie Ihre Inhalte (Texte, Bilder, Logo) bereitstellen. Ich halte Sie die ganze Zeit auf dem Laufenden — kein Warten im Dunkeln.",
  },
  {
    question: "Muss ich mich um Technik kümmern?",
    answer:
      "Nein. Ich kümmere mich um alles: Domain, Hosting, technisches Setup, Sicherheit. Sie bekommen am Ende eine fertige Website, die funktioniert — ohne dass Sie sich mit Technik beschäftigen müssen.",
  },
  {
    question: "Gehört mir die Website danach wirklich?",
    answer:
      "Ja, zu 100%. Keine monatlichen Abo-Fallen wie bei Baukastensystemen (Jimdo, Wix etc.). Sie zahlen einmal — und die Website gehört Ihnen. Für immer.",
  },
  {
    question: "Was brauche ich, um loszulegen?",
    answer:
      "Eigentlich nicht viel. Ein Logo (falls vorhanden), ein paar Infos über Ihren Betrieb und Ihre Leistungen, eventuell Fotos. Falls Sie noch kein Logo haben oder keine guten Bilder — kein Problem, wir finden eine Lösung.",
  },
  {
    question: "Wird meine Website auch auf dem Handy funktionieren?",
    answer:
      "Selbstverständlich. Alle Websites, die ich baue, sind vollständig mobiloptimiert. Über 70% der Internetnutzer schauen zuerst auf dem Smartphone — das ist für mich kein optionales Extra, sondern Standard.",
  },
  {
    question: "Kann ich die Website später selbst bearbeiten?",
    answer:
      "Ja, wenn gewünscht. Ich richte ein einfaches Content-Management-System ein, sodass Sie Texte, Bilder oder Preislisten selbst aktualisieren können — ohne Programmierkenntisse. Oder Sie beauftragen mich einfach für Änderungen, was oft schneller und günstiger ist.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-7 text-left group"
        aria-expanded={open}
      >
        <span className="font-tight font-semibold text-base md:text-lg text-[#D9D4D4] group-hover:text-white transition-colors duration-200 leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-lg glass-card flex items-center justify-center border-white/[0.1] transition-all duration-300 group-hover:border-[#690028]/40">
          {open ? (
            <Minus size={14} className="text-[#D0002A]" />
          ) : (
            <Plus size={14} className="text-[#AEB4B8] group-hover:text-[#D0002A] transition-colors" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-[#AEB4B8] leading-relaxed pb-7 pr-14 text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="section-label">FAQ</p>
            <h2 className="font-tight font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-white mb-6">
              Häufige
              <br />
              <span className="gradient-text">Fragen.</span>
            </h2>
            <p className="text-[#AEB4B8] text-lg leading-relaxed mb-8">
              Noch etwas unklar? Schreiben Sie mir einfach — ich antworte
              persönlich, ehrlich und ohne Verkaufsdruck.
            </p>
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary inline-flex"
            >
              <span>Frage stellen</span>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="glass-card px-6 md:px-8 py-2 rounded-3xl">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
