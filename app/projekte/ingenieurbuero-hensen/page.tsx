import type { Metadata } from "next";
import HensenSite from "@/components/hensen/HensenSite";

export const metadata: Metadata = {
  title: {
    absolute: "Ingenieurbüro Hensen — Planung Windenergie & Photovoltaik",
  },
  description:
    "Unabhängige Ingenieurplanung für Windenergie und Photovoltaik. Von der Standortanalyse bis zur genehmigungsreifen Planung — seit 2004 in der Projektentwicklung erneuerbarer Energien.",
};

export default function IngenieurbueroHensenPage() {
  return <HensenSite />;
}
