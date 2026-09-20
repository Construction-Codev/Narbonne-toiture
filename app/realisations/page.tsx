import type { Metadata } from "next";

import RealisationsHero from "@/components/realisations/RealisationsHero";
import RealisationsIntro from "@/components/realisations/RealisationsIntro";
import RealisationsGrid from "@/components/realisations/RealisationsGrid";
import RealisationsLocal from "@/components/realisations/RealisationsLocal";

export const metadata: Metadata = {
  title: "Réalisations toiture à Narbonne et dans l’Aude",
  description:
    "Découvrez différents travaux de couverture et de rénovation de toiture réalisés par Narbonne Toiture à Narbonne et dans l’Aude.",
  alternates: {
    canonical: "/realisations",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <RealisationsHero />
      <RealisationsIntro />
      <RealisationsGrid />
      <RealisationsLocal />
    </>
  );
}