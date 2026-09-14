import { SectionLabel } from "./About";
import { ServiceIllo } from "./Illos";

const services = [
  { n: "01", kind: "sinus" as const, title: "ENT consultation", body: "Daily ear, nose & throat consultation and assessment.", tag: "Daily" },
  { n: "02", kind: "hearingAid" as const, title: "Otology", body: "Ear examination and care for ear disorders.", tag: "On-site" },
  { n: "03", kind: "office" as const, title: "Endoscopy", body: "ENT endoscopic examination in the clinic.", tag: "On-site" },
  { n: "04", kind: "vertigo" as const, title: "Vertigo & balance", body: "Dizziness, BPPV, vestibular migraine, Ménière's.", tag: "Balance" },
  { n: "05", kind: "hearing" as const, title: "Tinnitus & hearing", body: "Ringing, hearing-related dizziness, audiology.", tag: "Hearing" },
  { n: "06", kind: "sinus" as const, title: "Sinus & allergy", body: "Blockage, sinusitis, nasal polyps.", tag: "Nose" },
  { n: "07", kind: "voice" as const, title: "Voice & throat", body: "Hoarseness, throat infections, swallowing.", tag: "Throat" },
  { n: "08", kind: "sleep" as const, title: "Holistic care", body: "The whole person, informed by the Vedic Shastras.", tag: "Holistic" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28 bg-parchment-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02" title="What we treat" />
            <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-ink-900 text-balance">
              All things ENT,
              <span className="italic font-light text-forest-600"> seen whole.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14.5px] leading-[1.7] text-ink-700 max-w-[44ch]">
            Daily consultations with on-site otology and endoscopy, a focused interest in vertigo and balance, and a holistic perspective informed by the Vedic Shastras.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/10 rounded-2xl overflow-hidden">
          {services.map((s) => (
            <article key={s.n} className="group relative bg-parchment-50 hover:bg-parchment-100 transition-colors">
              <div className="aspect-[5/3] overflow-hidden bg-forest-700">
                <ServiceIllo kind={s.kind} className="w-full h-full" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-ultra text-ink-500">{s.n}</span>
                  <span className="font-mono text-[10px] uppercase tracking-ultra text-terracotta-600">{s.tag}</span>
                </div>
                <h3 className="mt-3 font-display text-[20px] tracking-tightest text-ink-900 leading-[1.15]">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-700">{s.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-ink-900/10 bg-parchment-100 px-5 py-4 text-[13px] text-ink-700">
          <span>Teleconsultation available via WhatsApp video &amp; Google Meet.</span>
          <a href="#book" className="font-mono text-[11px] uppercase tracking-ultra text-forest-600 link-underline">Book →</a>
        </div>
      </div>
    </section>
  );
}
