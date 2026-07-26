"use client";

function toggle() {
  const next = !document.documentElement.classList.contains("light");
  document.documentElement.classList.toggle("light", next);
  window.localStorage.setItem("theme", next ? "light" : "dark");
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Skift mellem lyst og mørkt tema"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-accent hover:text-accent"
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="theme-icon-moon"
      >
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="theme-icon-sun"
      >
        <circle cx="12" cy="12" r="4.5" />
        <path
          d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
