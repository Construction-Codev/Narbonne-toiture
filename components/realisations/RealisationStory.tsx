import type { Realisation } from "@/data/realisations";

type Props = {
  realisation: Realisation;
};

export default function RealisationStory({ realisation }: Props) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Le chantier
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl">
              Un travail qui commence bien avant la dernière tuile.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-10">
            <p className="text-lg leading-8 text-anthracite">
              {realisation.introduction}
            </p>

            {realisation.story.length > 0 && (
              <div className="mt-8 space-y-6">
                {realisation.story.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}