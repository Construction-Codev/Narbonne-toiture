import type { Metadata } from "next";
import HydrofugeFAQ from "@/components/services/Hydrofuge/HydrofugeFAQ";
import HydrofugeFit from "@/components/services/Hydrofuge/HydrofugeFit";
import HydrofugeHero from "@/components/services/Hydrofuge/HydrofugeHero";
import HydrofugeLimits from "@/components/services/Hydrofuge/HydrofugeLimits";
import HydrofugeLocalArea from "@/components/services/Hydrofuge/HydrofugeLocalArea";
import HydrofugeUnderstanding from "@/components/services/Hydrofuge/HydrofugeUnderstanding";
import ServiceComparison from "@/components/services/ServiceComparison";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Traitement hydrofuge de toiture à Narbonne",
  description:
    "Traitement hydrofuge de toiture à Narbonne et dans l’Aude. Une protection complémentaire étudiée selon l’état et le matériau de votre couverture.",
  alternates: {
    canonical: "/hydrofuge-toiture",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/hydrofuge-toiture`,
    title: "Traitement hydrofuge de toiture à Narbonne",
    description:
      "Protection hydrofuge de toiture à Narbonne et dans l’Aude, selon l’état et le matériau de la couverture.",
    images: [
      {
        url: "/images/services/hydrofuge-toiture-narbonne.webp",
        alt: "Tuiles en terre cuite couvertes de gouttes d’eau",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement hydrofuge de toiture à Narbonne",
  description:
    "Service de protection hydrofuge de toiture à Narbonne et dans le département de l’Aude, selon l’état et le matériau de la couverture.",
  url: `${SITE_URL}/hydrofuge-toiture`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Aude",
  },
  provider: {
    "@type": "Organization",
    name: "Narbonne Toiture",
    url: SITE_URL,
    telephone: "+33662125611",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Traitement hydrofuge",
      item: `${SITE_URL}/hydrofuge-toiture`,
    },
  ],
};

export default function HydrofugeToiturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HydrofugeHero />
      <HydrofugeUnderstanding />
      <HydrofugeLimits />
      <HydrofugeFit />
      <ServiceComparison current="hydrofuge" />
      <HydrofugeLocalArea />
      <HydrofugeFAQ />
    </>
  );
}