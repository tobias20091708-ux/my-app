import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import WaveBackground from "@/components/WaveBackground";
import { series } from "@/lib/content";

export const metadata: Metadata = {
  title: "Univers",
  description:
    "Udforsk indholdsserier om William Heinesen, ultraminor litteratur og romanen Barbara — Bergur Rønne Mobergs litterære univers.",
};

export default function UniversPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <WaveBackground variant="hero" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-accent">
              Univers
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl text-foreground sm:text-5xl">
              Serier fra et nordatlantisk litterært univers
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
              Kortere serier af artikler og samtaler, der folder centrale
              forfatterskaber, begreber og værker ud — fra Heinesens Tórshavn
              til den ultraminor litteratur, der endnu venter på sine læsere.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {series.map((item, i) => (
            <FadeIn key={item.slug} delayMs={i * 100}>
              <article
                className={`group relative flex h-96 flex-col justify-end overflow-hidden rounded-2xl border border-border ${
                  item.comingSoon ? "opacity-80" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 ${
                    item.comingSoon ? "" : "group-hover:scale-110"
                  }`}
                />
                {/* abstract horizon shapes */}
                <svg
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-40"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 120 C 60 100, 120 140, 200 120 C 260 105, 320 140, 400 120 L400 200 L0 200 Z"
                    fill="white"
                    opacity="0.06"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="relative p-7">
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
                    {item.episodeCount > 0
                      ? `${item.episodeCount} ${item.episodeLabel}`
                      : item.episodeLabel}
                  </span>
                  <h2 className="mt-4 font-serif text-2xl text-white sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                    {item.teaser}
                  </p>
                  {!item.comingSoon && (
                    <span className="mt-5 inline-block text-sm text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                      Udforsk serien →
                    </span>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
