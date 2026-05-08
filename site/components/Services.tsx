import { SectionLabel } from "./About";
import { ServiceIllo } from "./Illos";

const services = [
  { n: "01", kind: "hearing" as const, title: "Hearing & audiology", body: "Audiometry, OAE, tympanometry.", tag: "On-site" },
  { n: "02", kind: "sinus" as const, title: "Sinus & allergy", body: "Endoscopic exam, image-guided plans.", tag: "Endoscopic" },
  { n: "03", kind: "voice" as const, title: "Voice & throat", body: "Hoarseness, reflux, vocalists.", tag: "Voice" },
  { n: "04", kind: "paediatric" as const, title: "Paediatric ENT", body: "Recurring infections, glue ear.", tag: "Children" },
  { n: "05", kind: "vertigo" as const, title: "Vertigo & tinnitus", body: "Epley, Semont, retraining.", tag: "Balance" },
  { n: "06", kind: "sleep" as const, title: "Snoring & sleep", body: "Screening, CPAP guidance.", tag: "Sleep" },
  { n: "07", kind: "hearingAid" as const, title: "Hearing aid fitting", body: "Brand-independent, real-ear.", tag: "Audio" },
  { n: "08", kind: "office" as const, title: "Office procedures", body: "Wax, foreign-body, cautery.", tag: "Same day" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28 bg-parchment-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02" title="What we treat" />
            <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-ink-900 text-balance">
              Eight rooms.
              <span className="italic font-light text-forest-600"> One chair.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14.5px] leading-[1.7] text-ink-700 max-w-[44ch]">
            Most ENT trouble doesn’t need a hospital. It needs the right room and the right hands.
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
          <span>Major surgery referred to GMC Bambolim & Manipal Goa.</span>
          <a href="#book" className="font-mono text-[11px] uppercase tracking-ultra text-forest-600 link-underline">Ask →</a>
        </div>
      </div>
    </section>
  );
}
