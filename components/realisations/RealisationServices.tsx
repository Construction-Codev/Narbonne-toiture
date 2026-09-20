import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Realisation } from "@/data/realisations";

type Props = {
  realisation: Realisation;
};

export default function RealisationServices({ realisation }: Props) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Services associés
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-anthracite sm:text-4xl">
              Un projet similaire ?
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {realisation.services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between border-b border-border py-6 first:border-t"
              >
                <span className="text-lg font-medium text-anthracite transition group-hover:text-terracotta">
                  {service.label}
                </span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}