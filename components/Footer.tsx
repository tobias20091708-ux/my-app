import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "ResearchGate", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-foreground">Bergur Rønne Moberg</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Lektor, Institut for Nordiske Studier og Sprogvidenskab (NorS)
            <br />
            Københavns Universitet
          </p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-muted">
            Kontakt
          </p>
          <a
            href="mailto:kontakt@bergurmoberg.fo"
            className="mt-3 block text-sm text-foreground/90 transition-colors hover:text-accent"
          >
            kontakt@bergurmoberg.fo
          </a>
          <Link
            href="/om#kontakt"
            className="mt-2 block text-sm text-foreground/90 transition-colors hover:text-accent"
          >
            Kontaktformular
          </Link>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-muted">
            Følg med
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-sm text-foreground/90 transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted">
          © {year} Bergur Rønne Moberg. Alle rettigheder forbeholdes.
        </div>
      </div>
    </footer>
  );
}
