import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import WaveBackground from "@/components/WaveBackground";
import { publications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Forskning & Publikationer",
  description:
    "Nøglepublikationer af Bergur Rønne Moberg, herunder 'Ultraminor World Literatures' (Brill, 2022) og 'Barbara i høj sø' (Multivers, 2025), samt NORDUNG-projektet.",
};

export default function ForskningPage() {
  const featured = publications.filter((p) => p.featured);
  const rest = publications.filter((p) => !p.featured);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <WaveBackground variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-accent">
              Forskning &amp; Publikationer
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl text-foreground sm:text-5xl">
              Fra ultraminor-begrebet til Barbara i høj sø
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
              Et udvalg af Bergur Rønne Mobergs centrale publikationer om
              færøsk og nordatlantisk litteratur, verdenslitteratur og
              litteraturhistorie.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured */}
      <section id="ultraminor" className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-accent">
            Fremhævet
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {featured.map((pub, i) => (
            <FadeIn key={pub.title} delayMs={i * 100}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-accent/30 bg-surface p-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    {pub.venue} · {pub.year}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl">
                    {pub.title}
                  </h2>
                  {pub.coauthor && (
                    <p className="mt-1 text-sm italic text-muted">
                      {pub.coauthor}
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                    {pub.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Full list */}
      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <h2 className="font-serif text-3xl text-foreground">
              Øvrige publikationer
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {rest.map((pub, i) => (
              <FadeIn
                key={pub.title}
                delayMs={Math.min(i, 4) * 60}
                className="bg-surface p-6 sm:p-7"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-xl text-foreground">
                    {pub.title}
                  </h3>
                  <span className="shrink-0 text-sm text-muted">
                    {pub.venue} · {pub.year}
                  </span>
                </div>
                {pub.coauthor && (
                  <p className="mt-1 text-sm italic text-muted">{pub.coauthor}</p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {pub.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NORDUNG */}
      <section id="nordung" className="relative overflow-hidden">
        <WaveBackground variant="subtle" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-accent">
              Projekt
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              NORDUNG
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
              Bergur Rønne Moberg er projektleder for NORDUNG, et nordisk
              undervisningsprojekt støttet med 15 mio. kr. fra A.P. Møller
              Fonden. Projektet udvikler undervisningsmateriale, der tager de
              nordatlantiske samfund — Færøerne, Grønland og Island — alvorligt
              som centre i den nordiske litteratur- og kulturundervisning.
            </p>
            <a
              href="mailto:kontakt@bergurmoberg.fo?subject=NORDUNG%20-%20henvendelse"
              className="mt-8 inline-block rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Kontakt om NORDUNG
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
