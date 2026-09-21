import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL = "https://www.narbonnetoiture.fr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Couvreur à Narbonne | Narbonne Toiture",
    template: "%s | Narbonne Toiture",
  },

  description:
    "Narbonne Toiture intervient pour la couverture, la réparation, le nettoyage, le démoussage, l'hydrofuge, la zinguerie et la charpente à Narbonne et dans l'Aude.",

  applicationName: "Narbonne Toiture",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Narbonne Toiture",
    title: "Couvreur à Narbonne | Narbonne Toiture",
    description:
      "Travaux de couverture, réparation et entretien de toiture à Narbonne et dans l'Aude.",
    url: SITE_URL,
  },

  twitter: {
    card: "summary_large_image",
    title: "Couvreur à Narbonne | Narbonne Toiture",
    description:
      "Travaux de couverture, réparation et entretien de toiture à Narbonne et dans l'Aude.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${SITE_URL}/#business`,
  name: "Narbonne Toiture",
  url: SITE_URL,
  telephone: "+33662125611",
  email: "contact@narbonnetoiture.fr",

  address: {
    "@type": "PostalAddress",
    streetAddress: "88 Cami de Las Carretas",
    postalCode: "66380",
    addressLocality: "Pia",
    addressCountry: "FR",
  },

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Aude",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
      ],
      opens: "06:00",
      closes: "20:00",
    },
  ],

  knowsAbout: [
    "Couverture",
    "Réparation de toiture",
    "Recherche de fuite",
    "Nettoyage de toiture",
    "Démoussage de toiture",
    "Traitement hydrofuge",
    "Zinguerie",
    "Charpente",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-anthracite">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}