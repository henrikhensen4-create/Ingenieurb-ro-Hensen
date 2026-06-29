"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { submitLeadToVoiceAgent } from "@/lib/actions/submit-lead";

const benefits = [
  "Kostenlos & unverbindlich",
  "Antwort innerhalb von 24 Stunden",
  "Kein Verkaufsdruck",
  "Direkt mit Henrik, kein Callcenter",
];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e94dfba1-f29c-4452-80db-258631c71e81",
          subject: `Neue Anfrage von ${form.name} — Webschmiede`,
          from_name: "Webschmiede Kontaktformular",
          name: form.name,
          email: form.email,
          phone: form.phone || "Nicht angegeben",
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Fehler beim Senden");

      // Best-effort, never blocks the success state shown to the visitor below.
      submitLeadToVoiceAgent(form).catch(() => {});

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Etwas ist schiefgelaufen. Bitte schreibe direkt an henrik.hensen4@gmail.com"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="section-padding border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#690028]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
          >
            <p className="section-label">Kostenlose Analyse</p>
            <h2 className="font-tight font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-tight text-white mb-6">
              Hören Sie auf,
              <br />
              <span className="gradient-text-red">Kunden zu verlieren.</span>
            </h2>
            <p className="text-[#AEB4B8] text-lg leading-relaxed mb-10">
              Schreiben Sie mir kurz, was Sie machen und was Sie sich für Ihre
              Website vorstellen. Ich schaue es mir an und melde mich persönlich
              — ohne Verpflichtung.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer}
              className="flex flex-col gap-4 mb-12"
            >
              {benefits.map((b) => (
                <motion.div key={b} variants={fadeUp} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#D0002A] flex-shrink-0" />
                  <span className="text-[#AEB4B8] text-sm">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#690028]/20 border border-[#690028]/40 flex items-center justify-center mb-6">
                    <CheckCircle2 size={28} className="text-[#D0002A]" />
                  </div>
                  <h3 className="font-tight font-bold text-2xl text-white mb-3">
                    Nachricht erhalten!
                  </h3>
                  <p className="text-[#AEB4B8] leading-relaxed">
                    Vielen Dank. Ich melde mich persönlich innerhalb von
                    24 Stunden bei Ihnen — versprochen.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#AEB4B8] mb-2 tracking-wide">
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Max Mustermann"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-[#D9D4D4] text-sm placeholder-[#4F5160] focus:outline-none focus:border-[#690028] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#AEB4B8] mb-2 tracking-wide">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="0345 123456"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-[#D9D4D4] text-sm placeholder-[#4F5160] focus:outline-none focus:border-[#690028] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#AEB4B8] mb-2 tracking-wide">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="max@ihrbetrieb.de"
                      className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-[#D9D4D4] text-sm placeholder-[#4F5160] focus:outline-none focus:border-[#690028] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#AEB4B8] mb-2 tracking-wide">
                      Was machen Sie / Was brauchen Sie? *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Ich betreibe ein Handwerksunternehmen und brauche eine einfache Website mit Kontaktformular..."
                      className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-[#D9D4D4] text-sm placeholder-[#4F5160] focus:outline-none focus:border-[#690028] transition-colors resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-red-950/30 border border-red-900/40"
                    >
                      <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-300 text-sm leading-relaxed">{error}</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </span>
                    ) : (
                      <>
                        <span>Kostenlose Analyse anfragen</span>
                        <Send size={16} className="relative z-10" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#4F5160] text-center leading-relaxed">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten
                    zur Kontaktaufnahme zu. Keine Weitergabe an Dritte.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
