import Image from "next/image";
import { MapPin } from "lucide-react";
import Breadcrumb from "../ui/Breadcrumb";
import type { Realisation } from "@/data/realisations";

type Props = {
  realisation: Realisation;
};

export default function RealisationHero({ realisation }: Props) {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb
            theme="dark"
            items={[
            { label: "Accueil", href: "/" },
            { label: "Réalisations", href: "/realisations" },
            { label: realisation.seoLocation },
            ]}
        />
      </div>

      <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
        <div className="flex flex-col justify-end px-5 pb-14 sm:px-6 sm:pb-16 lg:col-span-5 lg:min-h-[680px] lg:px-8 lg:pb-20 lg:pr-16">
          <div className="flex items-center gap-3 text-terracotta-light">
            <MapPin size={15} strokeWidth={1.7} aria-hidden="true" />

            <span className="text-xs font-bold uppercase tracking-[0.22em]">
              {realisation.seoLocation} · Aude
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {realisation.title}
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
            {realisation.description}
          </p>
        </div>

        <div className="relative min-h-[500px] lg:col-span-7 lg:min-h-[680px]">
          <Image
            src={realisation.heroImage.src}
            alt={realisation.heroImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />

          <div className="absolute bottom-0 left-0 bg-anthracite px-5 py-4 sm:px-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
              Réalisation · {realisation.seoLocation}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}