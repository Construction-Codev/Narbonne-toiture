import type { Metadata } from "next";

import AdviceHero from "@/components/conseils/AdviceHero";
import AdviceGrid from "@/components/conseils/AdviceGrid";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Conseils toiture | Entretien & réparation à Narbonne",
  description:
    "Conseils pour comprendre, entretenir et protéger votre toiture : démoussage, hydrofuge, fuites, réparations et couverture à Narbonne.",
  alternates: {
    canonical: `${SITE_URL}/conseils`,
  },
  openGraph: {
    title: "Conseils toiture | Narbonne Toiture",
    description:
      "Nos conseils sur l'entretien, la protection et les problèmes courants d'une toiture.",
    url: `${SITE_URL}/conseils`,
    type: "website",
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
      name: "Conseils",
      item: `${SITE_URL}/conseils`,
    },
  ],
};

export default function ConseilsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <main>
        <AdviceHero />
        <AdviceGrid />
      </main>
    </>
  );
}