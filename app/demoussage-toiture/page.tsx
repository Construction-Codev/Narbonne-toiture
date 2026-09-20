import type { Metadata } from "next";
import MossHero from "@/components/services/Moss/MossHero";
import MossWhy from "@/components/services/Moss/MossWhy";
import MossSigns from "@/components/services/Moss/MossSigns";
import MossProcess from "@/components/services/Moss/MossProcess";
import ServiceComparison from "@/components/services/ServiceComparison";
import MossLocalArea from "@/components/services/Moss/MossLocalArea";

import MossFAQ from "@/components/services/Moss/MossFAQ";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Démoussage de toiture à Narbonne",
  description:
    "Démoussage de toiture à Narbonne et dans l’Aude pour retirer mousses, lichens et végétaux présents sur la couverture.",
  alternates: {
    canonical: "/demoussage-toiture",
  },
  openGraph: {
    title: "Démoussage de toiture à Narbonne | Narbonne Toiture",
    description:
      "Démoussage des toitures à Narbonne et dans l’Aude : mousses, lichens et végétaux présents sur la couverture.",
    url: "/demoussage-toiture",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Démoussage de toiture à Narbonne",
  description:
    "Service de démoussage de toiture à Narbonne et dans le département de l’Aude.",
  url: `${SITE_URL}/demoussage-toiture`,
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

const breadcrumbJsonLd = {
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
      name: "Démoussage de toiture",
      item: `${SITE_URL}/demoussage-toiture`,
    },
  ],
};

export default function DemoussageToiturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
        <MossHero />
        <MossWhy />
        <MossSigns />
        <MossProcess />
        <ServiceComparison current="moss" />
        <MossLocalArea />
        <MossFAQ />    
    </>
  );
}