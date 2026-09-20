import Image from "next/image";

import type { Realisation } from "@/data/realisations";

type Props = {
  realisation: Realisation;
};

export default function RealisationGallery({ realisation }: Props) {
  if (realisation.gallery.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-anthracite py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta-light">
              En images
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Le chantier,
              <br />
              étape par étape.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-white/60 lg:col-span-4 lg:col-start-9">
            Une sélection de vues prises pendant les différentes phases des
            travaux.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-12">
          {realisation.gallery.map((photo, index) => {
            const large = index === 0 || index % 5 === 0;

            return (
              <figure
                key={`${photo.src}-${index}`}
                className={[
                  "relative overflow-hidden bg-anthracite-light",
                  large
                    ? "min-h-[480px] sm:col-span-2 lg:col-span-7 lg:min-h-[650px]"
                    : "min-h-[360px] lg:col-span-5 lg:min-h-[440px]",
                ].join(" ")}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    large
                      ? "(max-width: 1024px) 100vw, 58vw"
                      : "(max-width: 1024px) 50vw, 42vw"
                  }
                  className="object-cover"
                />

                {photo.caption && (
                  <figcaption className="absolute bottom-0 left-0 max-w-[85%] bg-anthracite px-5 py-4 text-xs leading-6 text-white/70">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}