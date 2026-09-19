import Advice from "@/components/home/Advice";
import BeforeAfter from "@/components/home/BeforeAfter";
import CareProcess from "@/components/home/CareProcess";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import HomeFAQ from "@/components/home/HomeFAQ";
import LocalArea from "@/components/home/LocalArea";
import RoofingServices from "@/components/home/RoofingServices";

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