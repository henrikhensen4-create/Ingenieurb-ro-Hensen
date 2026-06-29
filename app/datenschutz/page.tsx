import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Webschmiede Halle",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
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
        <h1 className="font-tight font-black text-4xl text-white mb-2 tracking-tight">
          Datenschutzerklärung
        </h1>
        <p className="text-[#4F5160] text-sm mb-12">Stand: Juni 2026</p>

        <div className="space-y-10">

          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              1. Verantwortlicher
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed space-y-1">
              <p className="text-white font-semibold">Henrik Hensen</p>
              <p>Hardenbergstraße 13, 06114 Halle (Saale)</p>
              <p>E-Mail: henrik.hensen4@gmail.com</p>
              <p>Telefon: 0159 0634 0148</p>
            </div>
          </section>

          {/* 2. Allgemeines */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed">
              <p>
                Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst und
                behandle Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO)
                sowie dieser Datenschutzerklärung. Die Nutzung dieser Website
                ist in der Regel ohne Angabe personenbezogener Daten möglich.
              </p>
            </div>
          </section>

          {/* 3. Hosting */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              3. Hosting
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed space-y-3">
              <p>
                Diese Website wird bei <strong className="text-[#D9D4D4]">Vercel Inc.</strong>,
                340 Pine Street, Suite 701, San Francisco, CA 94104, USA gehostet.
              </p>
              <p>
                Beim Aufruf dieser Website werden automatisch Serverlogdaten
                erfasst (IP-Adresse, Datum/Uhrzeit, aufgerufene Seite,
                verwendeter Browser). Diese Daten sind technisch notwendig für
                den Betrieb der Website und werden nicht mit anderen Daten
                zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse am Betrieb der Website).
              </p>
              <p>
                Vercel hat sich dem EU-US Data Privacy Framework verpflichtet.
                Weitere Informationen:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D0002A] hover:text-[#ff1a4a] transition-colors"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>
          </section>

          {/* 4. Kontaktformular */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              4. Kontaktformular
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed space-y-3">
              <p>
                Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name,
                E-Mail, Telefon, Nachricht) zur Bearbeitung Ihrer Anfrage und
                für eventuelle Anschlussfragen bei mir gespeichert und
                verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>
              <p>
                Die Übertragung der Formulardaten erfolgt über{" "}
                <strong className="text-[#D9D4D4]">Web3Forms</strong> (Erpete
                Solucoes Digitais LTDA). Ihre Daten werden ausschließlich zur
                Weiterleitung der Nachricht genutzt und nicht dauerhaft
                gespeichert. Weitere Informationen:{" "}
                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D0002A] hover:text-[#ff1a4a] transition-colors"
                >
                  web3forms.com/privacy
                </a>
              </p>
              <p>
                Ihre Daten werden nicht an Dritte weitergegeben und nach
                Abschluss der Anfrage gelöscht, sofern keine gesetzlichen
                Aufbewahrungspflichten bestehen.
              </p>
            </div>
          </section>

          {/* 5. Cookies */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              5. Cookies
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed">
              <p>
                Diese Website verwendet keine Tracking-Cookies und keine
                Analyse-Tools. Es werden lediglich technisch notwendige
                Informationen im Rahmen des Hostings verarbeitet. Eine
                Einwilligung ist hierfür nicht erforderlich.
              </p>
            </div>
          </section>

          {/* 6. Ihre Rechte */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              6. Ihre Rechte
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed space-y-3">
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="space-y-2 pl-4">
                {[
                  "Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)",
                  "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                  "Löschung Ihrer Daten (Art. 17 DSGVO)",
                  "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                  "Datenübertragbarkeit (Art. 20 DSGVO)",
                  "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                ].map((right) => (
                  <li key={right} className="flex items-start gap-2">
                    <span className="text-[#D0002A] mt-0.5">—</span>
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                <a
                  href="mailto:henrik.hensen4@gmail.com"
                  className="text-[#D9D4D4] hover:text-white transition-colors"
                >
                  henrik.hensen4@gmail.com
                </a>
              </p>
              <p>
                Sie haben außerdem das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für Sachsen-Anhalt ist
                das{" "}
                <strong className="text-[#D9D4D4]">
                  Landesbeauftragte für den Datenschutz Sachsen-Anhalt
                </strong>{" "}
                (www.datenschutz.sachsen-anhalt.de).
              </p>
            </div>
          </section>

          {/* 7. Externe Links */}
          <section>
            <h2 className="text-xs font-semibold text-[#AEB4B8] tracking-[0.15em] uppercase mb-4">
              7. Externe Links
            </h2>
            <div className="glass-card p-6 text-[#AEB4B8] text-sm leading-relaxed">
              <p>
                Diese Website kann Links zu externen Websites enthalten. Für
                deren Inhalte und Datenschutzpraktiken bin ich nicht
                verantwortlich. Beim Aufrufen dieser Links verlassen Sie meinen
                Verantwortungsbereich.
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
