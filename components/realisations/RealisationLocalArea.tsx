import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Realisation } from "@/data/realisations";

type Props = {
  realisation: Realisation;
};

export default function RealisationLocalArea({ realisation }: Props) {
  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl">
            {realisation.localTitle}
          </h2>

          <div>
            <p className="text-base leading-8 text-muted sm:text-lg">
              {realisation.localDescription}
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-anthracite transition hover:text-terracotta"
            >
              Demander un devis
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}