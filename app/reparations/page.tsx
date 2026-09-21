import type { Metadata } from "next";

import RepairHero from "@/components/reparations/RepairHero";
import RepairDiagnostic from "@/components/reparations/RepairDiagnostic";
import RepairTypes from "@/components/reparations/RepairTypes";
import RepairDecision from "@/components/reparations/RepairDecision";
import RepairProjects from "@/components/reparations/RepairProjects";
import RepairLocalArea from "@/components/reparations/RepairLocalArea";
import RepairFAQ from "@/components/reparations/RepairFAQ";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Réparation toiture Narbonne",
  description:
    "Réparation de toiture à Narbonne et dans l’Aude : tuiles endommagées, couverture déplacée, raccords et réparations localisées. Demandez un devis.",
  alternates: {
    canonical: `${SITE_URL}/reparations`,
  },
  openGraph: {
    title: "Réparation de toiture à Narbonne | Narbonne Toiture",
    description:
      "Réparation de couverture à Narbonne et dans l’Aude : intervention ciblée sur les zones endommagées de votre toiture.",
    url: `${SITE_URL}/reparations`,
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Réparation de toiture à Narbonne",
  description:
    "Travaux de réparation de toiture à Narbonne et dans le département de l’Aude.",
  url: `${SITE_URL}/reparations`,
  provider: {
    "@type": "RoofingContractor",
    name: "Narbonne Toiture",
    url: SITE_URL,
    telephone: "+33662125611",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Aude",
  },
  serviceType: "Réparation de toiture",
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
      name: "Réparation de toiture",
      item: `${SITE_URL}/reparations`,
    },
  ],
};

export default function RepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <main>
        <RepairHero />
        <RepairDiagnostic />
        <RepairTypes />
        <RepairDecision />
        <RepairProjects />
        <RepairLocalArea />
        <RepairFAQ />
      </main>
    </>
  );
}