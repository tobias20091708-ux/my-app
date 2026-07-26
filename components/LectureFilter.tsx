"use client";

import { useMemo, useState } from "react";
import type { Category, Lecture } from "@/lib/content";
import { categories } from "@/lib/content";
import FadeIn from "@/components/FadeIn";

interface LectureFilterProps {
  lectures: Lecture[];
  initialCategory?: Category | "Alle";
}

export default function LectureFilter({
  lectures,
  initialCategory = "Alle",
}: LectureFilterProps) {
  const [active, setActive] = useState<Category | "Alle">(initialCategory);

  const filtered = useMemo(() => {
    if (active === "Alle") return lectures;
    return lectures.filter((l) => l.categories.includes(active));
  }, [active, lectures]);

  const options: (Category | "Alle")[] = ["Alle", ...categories];

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setActive(option)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === option
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-foreground/80 hover:border-accent hover:text-accent"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6">
        {filtered.map((lecture, i) => (
          <FadeIn key={lecture.slug} delayMs={Math.min(i, 4) * 60}>
            <article className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  {lecture.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-surface-2 px-3 py-1 text-xs uppercase tracking-wide text-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 font-serif text-xl text-foreground sm:text-2xl">
                  {lecture.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/75">
                  {lecture.description}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                  Varighed: {lecture.duration}
                </p>
              </div>

              <a
                href={`mailto:kontakt@bergurmoberg.fo?subject=${encodeURIComponent(
                  `Booking: ${lecture.title}`,
                )}`}
                className="shrink-0 rounded-full border border-accent px-5 py-2.5 text-center text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Book dette foredrag
              </a>
            </article>
          </FadeIn>
        ))}

        {filtered.length === 0 && (
          <p className="text-foreground/60">
            Ingen foredrag fundet i denne kategori.
          </p>
        )}
      </div>
    </div>
  );
}
