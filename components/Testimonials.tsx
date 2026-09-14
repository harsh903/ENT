import { SectionLabel } from "./About";
import { ServiceIllo } from "./Illos";

const reviews = [
  {
    body: "Vertigo is not just “giddiness”, and not merely a symptom to suppress. It deserves careful listening and an accurate diagnosis.",
    name: "On vertigo",
    where: "Care philosophy",
    init: "V",
  },
  {
    body: "Many patients arrive uncertain and exhausted. The goal is to help them regain confidence in movement, stability and daily living.",
    name: "On recovery",
    where: "Care philosophy",
    init: "R",
  },
  {
    body: "In the delicate architecture of the inner ear lies our sense of direction. This practice is dedicated to protecting and restoring that balance.",
    name: "On balance",
    where: "Care philosophy",
    init: "B",
  },
  {
    body: "A person is more than a set of symptoms. Care inspired by the Vedic Shastras considers the individual as a whole, while staying professionally medical.",
    name: "On the whole person",
    where: "Care philosophy",
    init: "W",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="06" title="Beliefs" />
            <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-ink-900 text-balance">
              Four beliefs,
              <span className="italic font-light text-forest-600"> one practice.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center gap-3 text-[12px] font-mono uppercase tracking-ultra text-ink-600">
            <span>Patient-centred care</span>
            <span className="deco-rule flex-1 text-ink-400" />
            <span>Calm · Clear</span>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <figure key={i} className="relative rounded-2xl border border-ink-900/10 bg-parchment-50 p-6 hover:border-forest-600 transition-colors">
              <span aria-hidden className="absolute -top-5 left-6 font-display text-[72px] leading-none text-terracotta-500/40">“</span>
              <div className="flex gap-1 text-terracotta-500">
                {Array.from({ length: 5 }).map((_, k) => (<Star key={k} />))}
              </div>
              <blockquote className="mt-4 font-display text-[19px] leading-[1.35] tracking-tightest text-ink-900 text-pretty">
                {r.body}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-ink-900/10 flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-forest-600 text-parchment-50 font-display italic text-[14px]">
                  {r.init.toLowerCase()}
                </span>
                <div>
                  <div className="font-medium text-ink-900 text-[13.5px]">{r.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">{r.where}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Specialty grid — small illustrated cards */}
        <div className="mt-14 grid grid-cols-3 md:grid-cols-6 gap-2">
          {(["hearing","sinus","voice","paediatric","vertigo","hearingAid"] as const).map((k) => (
            <div key={k} className="aspect-square rounded-xl overflow-hidden bg-forest-700">
              <ServiceIllo kind={k} className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <path d="M7 1 8.7 5l4.3.7-3.1 3 .8 4.3L7 11l-3.7 2L4 8.7 1 5.7 5.3 5 7 1Z" />
    </svg>
  );
}
