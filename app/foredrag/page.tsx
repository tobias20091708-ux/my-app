import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import WaveBackground from "@/components/WaveBackground";
import LectureFilter from "@/components/LectureFilter";
import { categories, lectures, type Category } from "@/lib/content";

export const metadata: Metadata = {
  title: "Foredrag & Kurser",
  description:
    "Bestil foredrag med Bergur Rønne Moberg om færøsk litteratur, ultraminor litteratur, nordisk identitet, William Heinesen og Barbara.",
};

interface ForedragPageProps {
  searchParams: Promise<{ kategori?: string }>;
}

export default async function ForedragPage({
  searchParams,
}: ForedragPageProps) {
  const params = await searchParams;
  const requested = params.kategori;
  const initialCategory: Category | "Alle" =
    requested && (categories as string[]).includes(requested)
      ? (requested as Category)
      : "Alle";

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <WaveBackground variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-accent">
              Foredrag &amp; Kurser
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl text-foreground sm:text-5xl">
              Foredrag om litteratur, sprog og Norden
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
              Bergur Rønne Moberg holder foredrag for uddannelsesinstitutioner,
              kulturhuse og selskaber om færøsk og nordatlantisk litteratur,
              ultraminor litteratur og nordisk identitet. Foredragene kan
              tilpasses målgruppe og varighed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <LectureFilter lectures={lectures} initialCategory={initialCategory} />
        </FadeIn>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl text-foreground">
              Skræddersyet foredrag?
            </h2>
            <p className="mt-4 text-foreground/75">
              Mangler du et foredrag tilpasset en bestemt anledning eller
              målgruppe? Skriv direkte, så finder vi den rette form sammen.
            </p>
            <a
              href="mailto:kontakt@bergurmoberg.fo?subject=Foredragsforespørgsel"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Skriv om booking
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
