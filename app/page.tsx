import type { Metadata } from "next";

import Advice from "@/components/home/Advice";
import BeforeAfter from "@/components/home/BeforeAfter";
import CareProcess from "@/components/home/CareProcess";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import HomeFAQ from "@/components/home/HomeFAQ";
import LocalArea from "@/components/home/LocalArea";
import RoofingServices from "@/components/home/RoofingServices";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: {
    absolute: "Couvreur à Narbonne | Narbonne Toiture",
  },

  description:
    "Couvreur à Narbonne pour vos travaux de couverture, réparation, nettoyage, démoussage, hydrofuge, zinguerie et charpente. Intervention dans l'Aude.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Couvreur à Narbonne | Narbonne Toiture",
    description:
      "Travaux de couverture, réparation et entretien de toiture à Narbonne et dans l'Aude.",
    url: SITE_URL,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CareProcess />
      <BeforeAfter />
      <RoofingServices />
      <FeaturedProjects />
      <LocalArea />
      <Advice />
      <HomeFAQ />
    </>
  );
}