export default function Marquee() {
  const items = [
    "MBBS · DNS · MS - ENT · MBA · AFIH",
    "20–25+ years in healthcare",
    "5,000+ consultations",
    "On-site otology & endoscopy",
    "Vertigo & Balance Care",
    "Holistic care inspired by the Vedic Shastras",
    "Bengali · English · Hindi",
    "Teleconsult · WhatsApp video & Google Meet",
    "Old Goa · Est. September 2025",
  ];
  const repeated = [...items, ...items];

  return (
    <section
      aria-label="Credentials"
      className="relative border-y border-ink-900/10 bg-ink-900 text-parchment-100 overflow-hidden"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap py-5 gap-12 will-change-transform">
        {repeated.map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-mono text-[11px] uppercase tracking-ultra text-parchment-100/85">
              {s}
            </span>
            <Snowflake />
          </span>
        ))}
      </div>
    </section>
  );
}

function Snowflake() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="text-terracotta-400 shrink-0">
      <path
        d="M7 1v12M1 7h12M2.5 2.5l9 9M11.5 2.5l-9 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
