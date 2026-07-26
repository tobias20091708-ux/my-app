"use client";

import { useEffect, useState } from "react";
import type { Quote } from "@/lib/content";

interface QuoteCarouselProps {
  quotes: Quote[];
}

export default function QuoteCarousel({ quotes }: QuoteCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(id);
  }, [quotes.length]);

  const quote = quotes[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="relative min-h-[9rem] sm:min-h-[7rem]">
        <span aria-hidden className="font-serif text-6xl text-accent/40">
          &ldquo;
        </span>
        <blockquote
          key={index}
          className="reveal is-visible font-serif text-2xl italic leading-snug text-foreground sm:text-3xl"
        >
          {quote.text}
        </blockquote>
        <p className="mt-4 text-sm uppercase tracking-widest text-muted">
          {quote.source}
        </p>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {quotes.map((q, i) => (
          <button
            key={q.text}
            type="button"
            aria-label={`Vis citat ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-accent" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
