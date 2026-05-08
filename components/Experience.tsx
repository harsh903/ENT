import { SectionLabel } from "./About";

const entries = [
  { period: "2014 — Present", role: "Founder & ENT Specialist", where: "Jagvani Health & Wellness Clinic, Old Goa", note: "Goa" },
  { period: "2017 — 2022", role: "Visiting Professor, ENT", where: "Goa Medical College", note: "Bambolim" },
  { period: "2018 — 2020", role: "Foreign Expert Teacher", where: "Hanoi Medical University", note: "Vietnam" },
  { period: "2010 — 2014", role: "Senior Medical Officer", where: "District Hospital, Jamshedpur", note: "Jharkhand" },
  { period: "2008 — 2010", role: "Medical Officer (rotational)", where: "MGM Hospital, Jamshedpur", note: "Internship" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="03" title="Sixteen years" />
            <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-ink-900 text-balance">
              Bedside, lecture hall,
              <span className="italic font-light text-forest-600"> your appointment.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14px] text-ink-600 leading-[1.6] max-w-[40ch]">
            Five posts that shaped how the clinic runs today.
          </p>
        </div>

        <ol className="mt-12 relative">
          <span aria-hidden className="hidden md:block absolute left-[180px] top-2 bottom-2 w-px bg-ink-900/15" />
          {entries.map((e, i) => (
            <li key={i} className="relative grid md:grid-cols-[180px_24px_1fr] gap-y-2 md:gap-x-6 py-5 border-t border-ink-900/10 first:border-t-0">
              <div className="font-mono text-[11px] uppercase tracking-ultra text-ink-500 pt-1.5">{e.period}</div>
              <div className="hidden md:flex justify-center pt-2.5">
                <span className="grid place-items-center w-3 h-3 rounded-full bg-parchment-100 ring-1 ring-ink-900/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-display text-[22px] tracking-tightest text-ink-900 leading-tight">{e.role}</h3>
                  <div className="mt-0.5 text-[13.5px] text-forest-600 italic">{e.where}</div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-ultra text-terracotta-600">{e.note}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
