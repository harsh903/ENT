import { ClinicRoomIllo } from "./Illos";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionLabel index="01" title="About" />

        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-center">
          <figure className="lg:col-span-5 rounded-3xl aspect-[4/5] border border-ink-900/8 overflow-hidden bg-parchment-200">
            <ClinicRoomIllo className="w-full h-full" />
          </figure>

          {/* Copy */}
          <div className="lg:col-span-7">
            <h2 className="font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-ink-900 text-balance">
              One doctor.
              <br/>
              One chair.
              <br/>
              <span className="italic font-light text-forest-600">One careful conversation.</span>
            </h2>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.7] text-ink-700">
              An ENT and Vertigo &amp; Balance Care clinic at Kadamba Plateau, Old Goa, established in September 2025. With 20–25+ years across clinical practice, government healthcare, international medical education and corporate healthcare, and 5,000+ consultations to date, Dr. Mukhopadhyay combines clinical expertise with a patient-focused approach.
            </p>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-ink-700">
              Her care also draws on a holistic perspective informed by the Vedic Shastras, considering the individual as a whole while maintaining a professional medical approach.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[13px]">
              {[
                "Established September 2025",
                "Daily consultations · Mon to Sat",
                "On-site otology",
                "On-site endoscopy",
                "5,000+ consultations",
                "Bengali · English · Hindi",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-ink-700">
                  <span className="inline-block h-1 w-3 bg-terracotta-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[11px] uppercase tracking-ultra text-terracotta-600">§ {index}</span>
      <span className="deco-rule w-12 text-ink-400" />
      <span className="font-mono text-[11px] uppercase tracking-ultra text-ink-600">{title}</span>
    </div>
  );
}
