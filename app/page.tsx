import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import WaveBackground from "@/components/WaveBackground";
import QuoteCarousel from "@/components/QuoteCarousel";
import { events, quotes } from "@/lib/content";

const exploreAreas = [
  {
    title: "Færøsk Litteratur",
    description:
      "William Heinesen, Jørgen-Frantz Jacobsen og den nordatlantiske prosas møde med det moderne.",
    href: "/foredrag?kategori=F%C3%A6r%C3%B8sk+litteratur",
    gradient: "from-[#12232b] via-[#183036] to-[#0a1418]",
  },
  {
    title: "Ultraminor",
    description:
      "Et begreb udviklet med Harvards David Damrosch — om litteratur på verdens mindste sprog.",
    href: "/forskning#ultraminor",
    gradient: "from-[#241b0d] via-[#2f2412] to-[#140f08]",
  },
  {
    title: "NORDUNG",
    description:
      "Nordisk undervisningsprojekt støttet af A.P. Møller Fonden med 15 mio. kr.",
    href: "/forskning#nordung",
    gradient: "from-[#141b28] via-[#1a2432] to-[#0a0e15]",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <WaveBackground variant="hero" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 py-28 sm:py-36">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Lektor · NorS, Københavns Universitet
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] text-foreground sm:text-6xl md:text-7xl">
              Bergur Rønne Moberg
            </h1>
          </FadeIn>
          <FadeIn delayMs={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
              Litterat og forsker i færøsk og nordatlantisk litteratur. Om
              William Heinesen, Jørgen-Frantz Jacobsen og de sprog, verden
              endnu ikke har lært at læse — det jeg kalder{" "}
              <span className="font-serif italic text-accent">ultraminor</span>.
            </p>
          </FadeIn>
          <FadeIn delayMs={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/foredrag#book"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Book Foredrag
              </Link>
              <Link
                href="/om"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Om Bergur
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Aktuelle foredrag */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-accent">
                Kalender
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                Aktuelle foredrag
              </h2>
            </div>
            <Link
              href="/foredrag"
              className="hidden shrink-0 text-sm text-foreground/70 transition-colors hover:text-accent sm:block"
            >
              Se alle foredrag →
            </Link>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {events.map((event, i) => (
            <FadeIn key={event.title} delayMs={i * 100} as="div">
              <article className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60">
                <p className="text-xs uppercase tracking-widest text-accent">
                  {event.displayDate}
                </p>
                <h3 className="mt-3 font-serif text-xl leading-snug text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{event.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                  {event.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/foredrag" className="text-sm text-accent">
            Se alle foredrag →
          </Link>
        </div>
      </section>

      {/* Udforsk */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-accent">
              Kerneområder
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Udforsk
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {exploreAreas.map((area, i) => (
              <FadeIn key={area.title} delayMs={i * 100}>
                <Link
                  href={area.href}
                  className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl border border-border p-6"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient} transition-transform duration-700 group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                  <div className="relative">
                    <h3 className="font-serif text-2xl text-white">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {area.description}
                    </p>
                    <span className="mt-4 inline-block text-sm text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                      Læs mere →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden py-28">
        <WaveBackground variant="subtle" />
        <div className="relative px-6">
          <FadeIn>
            <QuoteCarousel quotes={quotes} />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
