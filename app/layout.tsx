import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://webschmiede.dev"),
  title: {
    default: "Webschmiede — Premium Webdesign für Unternehmen",
    template: "%s | Webschmiede",
  },
  description:
    "Webschmiede entwickelt Premium-Websites für ambitionierte Unternehmen in ganz Deutschland. Webdesign, das verkauft — schnell, modern, persönlich.",
  keywords: [
    "Webdesign Agentur",
    "Website erstellen",
    "Webentwicklung",
    "Premium Webdesign",
    "Webdesign für Unternehmen",
    "Homepage erstellen",
    "Webdesign KMU",
    "KI-Automatisierung",
    "Webschmiede",
  ],
  authors: [{ name: "Webschmiede" }],
  creator: "Webschmiede",
  publisher: "Webschmiede",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://webschmiede.dev",
    title: "Webschmiede — Premium Webdesign für Unternehmen",
    description:
      "Premium-Websites für ambitionierte Unternehmen in ganz Deutschland. Webdesign, das verkauft.",
    siteName: "Webschmiede",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebStudio — Premium Webdesign Agentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webschmiede — Premium Webdesign für Unternehmen",
    description:
      "Premium-Websites für ambitionierte Unternehmen in ganz Deutschland. Webdesign, das verkauft.",
    images: ["/og-image.jpg"],
    creator: "@webstudio_de",
  },
  alternates: {
    canonical: "https://webschmiede.dev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webschmiede",
  description:
    "Premium-Websites für ambitionierte Unternehmen in ganz Deutschland. Webdesign, das verkauft.",
  url: "https://webschmiede.dev",
  logo: "https://webschmiede.dev/logo.png",
  email: "henrik.hensen4@gmail.com",
  telephone: "+49-159-06340148",
  areaServed: "DE",
  address: {
    "@type": "PostalAddress",
    addressCountry: "DE",
  },
  sameAs: [],
  offers: {
    "@type": "Offer",
    name: "Webdesign & Webentwicklung",
    description: "Premium Webdesign und Webentwicklung für Unternehmen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
