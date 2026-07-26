"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "kontakt@bergurmoberg.fo";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Henvendelse fra ${name || "hjemmesiden"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-5">
        <label className="flex flex-col gap-2 text-sm text-foreground/80">
          Navn
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
            placeholder="Dit navn"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-foreground/80">
          E-mail
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
            placeholder="din@mail.dk"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-foreground/80">
        Besked
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
          placeholder="Fortæl kort om din henvendelse — foredrag, samarbejde eller andet."
        />
      </label>
      <button
        type="submit"
        className="w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
      >
        Send henvendelse
      </button>
      <p className="text-xs text-muted">
        Åbner din mailklient med beskeden udfyldt til {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
