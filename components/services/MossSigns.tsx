import Link from "next/link";
import {
  ArrowRight,
  CircleAlert,
  House,
  Leaf,
  Layers3,
} from "lucide-react";

const signs = [
  {
    icon: Leaf,
    title: "Mousses visibles",
    text: "Des amas verts apparaissent sur certaines zones de la couverture, notamment dans les parties plus ombragées ou humides.",
  },
  {
    icon: Layers3,
    title: "Lichens installés",
    text: "Des traces plus claires, grisâtres ou blanchâtres peuvent rester accrochées à la surface des éléments de couverture.",
  },
  {
    icon: House,
    title: "Colonisation localisée",
    text: "Un versant, une rive ou une zone précise peut être davantage touché que le reste de la toiture.",
  },
  {
    icon: CircleAlert,
    title: "Présence devenue importante",
    text: "Lorsque les végétaux occupent une partie notable de la couverture, il devient pertinent d’en faire examiner l’état.",
  },
];

export default function MossSigns() {
  return (
    <section className="overflow-hidden bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          {/* Colonne éditoriale */}
          <div className="relative flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Ce que vous pouvez observer
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Quand envisager un démoussage ?
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-muted sm:text-lg">
              Il n’est pas nécessaire d’attendre qu’une toiture soit entièrement
              recouverte. Certains signes peuvent déjà justifier un examen de la
              couverture.
            </p>

            <div className="mt-10 max-w-lg border-t border-anthracite/15 pt-7">
              <p className="text-sm leading-7 text-anthracite/65">
                Depuis le sol, l’aspect général peut donner une première
                indication. L’état précis de la couverture demande toutefois
                une observation adaptée.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none mt-auto hidden select-none pt-24 text-[8rem] font-semibold leading-[0.75] tracking-[-0.08em] text-anthracite/[0.035] lg:block xl:text-[9rem]"
            >
              MOUSSE
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Axe vertical */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 hidden w-px bg-anthracite/15 lg:block"
            />

            <div>
              {signs.map((sign) => {
                const Icon = sign.icon;

                return (
                  <article
                    key={sign.title}
                    className="relative border-b border-anthracite/15 py-9 lg:pl-14"
                  >
                    <div className="grid items-start gap-5 sm:grid-cols-[52px_170px_1fr] sm:gap-6 xl:grid-cols-[56px_190px_1fr] xl:gap-8">
                      {/* Puce liée à la même ligne que l'icône */}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-9 hidden h-3 w-3 -translate-x-1/2 translate-y-[8px] rounded-full bg-terracotta ring-[6px] ring-ivory lg:block"
                      />

                      {/* Icône */}
                      <div className="flex h-11 w-11 items-center justify-center text-terracotta">
                        <Icon
                          size={29}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Titre */}
                      <h3 className="pt-1 text-xl font-semibold leading-7 tracking-[-0.025em] text-anthracite">
                        {sign.title}
                      </h3>

                      {/* Description */}
                      <p className="pt-1 text-sm leading-7 text-muted sm:text-base">
                        {sign.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Conversion */}
            <div className="pt-10 lg:pl-14">
              <p className="max-w-2xl text-2xl font-semibold leading-9 tracking-[-0.03em] text-anthracite sm:text-3xl">
                Vous reconnaissez certains de ces signes sur votre toiture ?
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-3 rounded-sm bg-terracotta px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-terracotta-dark"
              >
                Présenter ma toiture
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}