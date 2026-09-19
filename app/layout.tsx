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
    "Narbonne Toiture intervient pour le nettoyage, le démoussage, la protection et les travaux de toiture à Narbonne et dans les environs.",

  applicationName: "Narbonne Toiture",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Narbonne Toiture",
    title: "Couvreur à Narbonne | Narbonne Toiture",
    description:
      "Nettoyage, démoussage, protection et travaux de toiture à Narbonne et dans les environs.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Couvreur à Narbonne | Narbonne Toiture",
    description:
      "Nettoyage, démoussage, protection et travaux de toiture à Narbonne et dans les environs.",
  },

  robots: {
    index: true,
    follow: true,
  },
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