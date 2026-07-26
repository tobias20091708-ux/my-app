import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import WaveBackground from "@/components/WaveBackground";
import ContactForm from "@/components/ContactForm";
import { timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Om Bergur",
  description:
    "Akademisk baggrund, forskningsområder og karrieremilepæle for Bergur Rønne Moberg, lektor ved Institut for Nordiske Studier og Sprogvidenskab, KU.",
};

export default function OmPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <WaveBackground variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-accent">
              Om
            </p>
            <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
              Bergur Rønne Moberg
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Bio */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <FadeIn>
          <div className="grid gap-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Bergur Rønne Moberg (f. 1965 på Færøerne) er lektor ved
              Institut for Nordiske Studier og Sprogvidenskab (NorS) ved
              Københavns Universitet. Han forsvarede sin PhD-grad ved
              Københavns Universitet i 2004 med en afhandling om prosa og
              modernitet i færøsk litteratur.
            </p>
            <p>
              Hans forskning kredser om færøsk og nordatlantisk litteratur,
              med et særligt fokus på William Heinesen og Jørgen-Frantz
              Jacobsen. Sammen med David Damrosch ved Harvard University har
              han udviklet begrebet{" "}
              <span className="font-serif italic text-accent">
                ultraminor litteratur
              </span>{" "}
              — en betegnelse for litteraturer skrevet på sprog med et
              ekstremt lille antal talere, og for den plads, disse
              litteraturer alligevel kan og bør indtage i en global
              litteraturforståelse.
            </p>
            <p>
              Han er projektleder for{" "}
              <span className="text-foreground">NORDUNG</span>, et nordisk
              undervisningsprojekt støttet med 15 mio. kr. fra A.P. Møller
              Fonden, og medforfatter til{" "}
              <span className="italic">Barbara i høj sø</span> (Multivers,
              2025) sammen med Erik Skyum-Nielsen. Ved siden af sin
              forskning er han en efterspurgt foredragsholder om nordisk
              identitet, litteratur og kultur.
            </p>
          </div>
        </FadeIn>

        <FadeIn delayMs={100}>
          <div className="mt-12 grid gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Titel
              </p>
              <p className="mt-1 text-foreground">Lektor, PhD</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Institution
              </p>
              <p className="mt-1 text-foreground">NorS, Københavns Universitet</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Nøgleværker
              </p>
              <p className="mt-1 text-foreground">
                Ultraminor World Literatures (2022)
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <h2 className="font-serif text-3xl text-foreground">
              Karriere-milepæle
            </h2>
          </FadeIn>

          <div className="mt-12 border-l border-border pl-8">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delayMs={i * 60} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  {item.year}
                </p>
                <h3 className="mt-1 font-serif text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/75">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="mx-auto max-w-2xl px-6 py-24">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-accent">
            Kontakt
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground">
            Kom i kontakt
          </h2>
          <p className="mt-4 text-foreground/75">
            For foredragsbookinger, forskningssamarbejder eller
            presseforespørgsler — skriv direkte eller brug formularen
            nedenfor.
          </p>
        </FadeIn>
        <FadeIn delayMs={100} className="mt-8">
          <ContactForm />
        </FadeIn>
      </section>
    </div>
  );
}
