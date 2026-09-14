import { SectionLabel } from "./About";
import { EquipmentIllo } from "./Illos";

const credentials: { year?: string; degree: string; school?: string }[] = [
  { year: "Medicine", degree: "MBBS", school: "Bachelor of Medicine & Bachelor of Surgery" },
  { degree: "DNS" },
  { year: "Specialist", degree: "MS - ENT", school: "Master of Surgery, Otorhinolaryngology" },
  { year: "Management", degree: "MBA", school: "Master of Business Administration" },
  { year: "Industrial Health", degree: "AFIH", school: "Associate Fellow of Industrial Health" },
];

const languages = [
  "Bengali",
  "English",
  "Hindi",
];

const expertise = [
  "ENT consultation & assessment",
  "Otology",
  "Endoscopy",
  "Vertigo, BPPV & balance disorders",
  "Vestibular migraine & Ménière's disease",
  "Tinnitus & hearing-related dizziness",
  "Corporate & occupational healthcare",
  "Medical education & teaching",
];

export default function Education() {
  return (
    <section className="relative py-24 lg:py-28 bg-forest-600 text-parchment-100 overflow-hidden">
      <DotsPattern />

      {/* equipment illustration strip */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block opacity-70 pointer-events-none">
        <EquipmentIllo className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-forest-600" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="text-parchment-100/80">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-ultra text-terracotta-400">§ 05</span>
            <span className="deco-rule w-12 text-parchment-100/40" />
            <span className="font-mono text-[11px] uppercase tracking-ultra">Credentials</span>
          </div>
        </div>

        <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-parchment-50 max-w-[16ch] text-balance">
          Trained to treat,
          <span className="italic font-light text-terracotta-400"> trained</span> to listen.
        </h2>

        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            {credentials.map((c, i) => (
              <article key={i} className="group rounded-2xl border border-parchment-100/15 bg-forest-700/40 p-6 hover:bg-forest-700/65 transition-colors">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <div className="font-display text-[24px] tracking-tightest text-parchment-50 leading-tight">{c.degree}</div>
                  {c.year && <div className="font-mono text-[11px] uppercase tracking-ultra text-terracotta-400">{c.year}</div>}
                </div>
                {c.school && <div className="mt-1 italic text-parchment-100/80 text-[14px]">{c.school}</div>}
              </article>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-ultra text-parchment-100/70 mb-4">Areas of expertise</div>
              <ul className="space-y-2">
                {expertise.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-[14px] text-parchment-100/90">
                    <span className="inline-block h-1 w-3 bg-terracotta-400" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-ultra text-parchment-100/70 mb-3">Languages</div>
              <ul className="flex flex-wrap gap-2">
                {languages.map((m) => (
                  <li key={m} className="rounded-full border border-parchment-100/20 bg-forest-700/40 px-3.5 py-1.5 text-[13px] text-parchment-100/90">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DotsPattern() {
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 w-full h-full text-parchment-100/8">
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}
