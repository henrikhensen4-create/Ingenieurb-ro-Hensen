import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Webschmiede Halle",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D9D4D4]">
      {/* Header */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#AEB4B8] hover:text-white transition-colors text-sm group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Zurück zur Website
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="Webschmiede Logo" width={28} height={28} className="w-full h-full object-contain" />
            </div>
            <span className="font-tight font-bold text-sm text-[#D9D4D4]">WEBSCHMIEDE</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-tight font-black text-4xl text-white mb-2 tracking-tight">Impressum</h1>
        <p className="text-[#4F5160] text-sm mb-12">Angaben gemäß § 5 TMG</p>

        <div className="space-y-10">
          {/* Verantwortlich */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              Verantwortlich
            </h2>
            <div className="glass-card p-6 space-y-1 text-[#AEB4B8] text-sm leading-relaxed">
              <p className="text-white font-semibold">Henrik Hensen</p>
              <p>Hardenbergstraße 13</p>
              <p>06114 Halle (Saale)</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              Kontakt
            </h2>
            <div className="glass-card p-6 space-y-2 text-[#AEB4B8] text-sm">
              <p>
                Telefon:{" "}
                <a href="tel:015906340148" className="text-[#D9D4D4] hover:text-white transition-colors">
                  0159 0634 0148
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:henrik.hensen4@gmail.com"
                  className="text-[#D9D4D4] hover:text-white transition-colors"
                >
                  henrik.hensen4@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Hinweis Gewerbe */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              Hinweis zur Umsatzsteuer
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed">
              <p>
                Eine Umsatzsteuer-Identifikationsnummer liegt derzeit nicht vor,
                da die Tätigkeit im Rahmen der Kleinunternehmerregelung gemäß
                § 19 UStG ausgeübt wird.
              </p>
            </div>
          </section>

          {/* Streitschlichtung */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              Streitschlichtung
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed space-y-3">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D0002A] hover:text-[#ff1a4a] transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Ich bin nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          {/* Haftung */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              Haftung für Inhalte
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed">
              <p>
                Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              Urheberrecht
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed">
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </p>
            </div>
          </section>
        </div>

        <p className="text-[#4F5160] text-xs mt-16 text-center">
          © {new Date().getFullYear()} Webschmiede · Henrik Hensen · Halle (Saale)
        </p>
      </div>
    </div>
  );
}
