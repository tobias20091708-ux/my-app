interface WaveBackgroundProps {
  variant?: "hero" | "subtle";
  className?: string;
}

export default function WaveBackground({
  variant = "hero",
  className = "",
}: WaveBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === "hero"
              ? "radial-gradient(120% 90% at 50% -10%, rgba(91,130,150,0.25) 0%, rgba(8,9,11,0) 55%), radial-gradient(80% 60% at 85% 10%, rgba(201,164,99,0.12) 0%, rgba(8,9,11,0) 60%)"
              : "radial-gradient(70% 60% at 50% 0%, rgba(91,130,150,0.12) 0%, rgba(8,9,11,0) 60%)",
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-[0.5]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 220 C 150 180, 300 260, 450 220 C 600 180, 750 260, 900 220 C 1000 195, 1100 235, 1200 220 L1200 400 L0 400 Z"
          fill="var(--fjord)"
          opacity="0.08"
        />
        <path
          d="M0 280 C 180 250, 320 310, 500 280 C 680 250, 820 310, 1000 280 C 1080 265, 1140 290, 1200 280 L1200 400 L0 400 Z"
          fill="var(--fjord)"
          opacity="0.12"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
