import type { Realisation } from "@/data/realisations";

type Props = {
  realisation: Realisation;
};

export default function RealisationSteps({ realisation }: Props) {
  if (realisation.steps.length === 0) {
    return null;
  }

  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Étapes visibles
            </span>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl">
              Du support à la couverture.
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-muted">
              Les photographies permettent de suivre plusieurs phases du
              chantier et de voir ce qui se passe sous la couverture terminée.
            </p>
          </div>

          <div className="border-l border-anthracite/15">
            {realisation.steps.map((step, index) => (
              <div
                key={step.title}
                className="relative border-b border-anthracite/10 py-8 pl-8 first:pt-0 sm:pl-12"
              >
                <span className="absolute -left-[5px] top-10 h-[9px] w-[9px] rounded-full bg-terracotta first:top-2" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-anthracite">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xl text-base leading-8 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}