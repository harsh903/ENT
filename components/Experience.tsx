import { SectionLabel } from "./About";

const entries = [
  {
    period: "Sept 2025 – Present",
    role: "Founder & Practising Doctor",
    where: "Jagvani Health & Wellness Clinic, Old Goa",
    detail: "Established her own clinic in September 2025. Daily consultations, on-site otology and endoscopy, and a patient-centric approach with a holistic perspective inspired by the Vedic Shastras.",
    note: "Goa",
  },
  {
    period: "2022 – 2024",
    role: "Health Consultant",
    where: "Nestlé · Micro Labs",
    detail: "Corporate healthcare, adding a strong corporate and occupational health dimension to her practice.",
    note: "Corporate",
  },
  {
    period: "2018 – 2022",
    role: "Teaching & Healthcare",
    where: "International Education College, Chengdu University of Traditional Chinese Medicine",
    detail: "Contributed to international education, teaching and healthcare-related activities.",
    note: "Chengdu, China",
  },
  {
    period: "2012 – 2015",
    role: "Teaching & Medical Education",
    where: "Guangzhou University",
    detail: "Contributed to teaching and medical education.",
    note: "Guangzhou, China",
  },
  {
    period: "2005 – 2012",
    role: "Government Healthcare Professional",
    where: "Permanent government service, Chhattisgarh",
    detail: "Served as Custody Officer under the Ministry of Health and Welfare.",
    note: "Chhattisgarh",
  },
  {
    period: "2000 – 2005",
    role: "Medical Practitioner",
    where: "Contract-based medical practice",
    detail: "Gained extensive clinical experience.",
    note: "Clinical",
  },
  {
    period: "1998 – 2000",
    role: "Residency",
    where: "Clinical residency",
    detail: "Built a strong foundation in clinical practice and patient care.",
    note: "Foundation",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="04" title="Experience" />
            <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-ink-900 text-balance">
              Bedside, lecture hall, boardroom,
              <span className="italic font-light text-forest-600"> your appointment.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14px] text-ink-600 leading-[1.6] max-w-[40ch]">
            20–25+ years across clinical practice, government healthcare, international medical education and corporate healthcare, with 5,000+ consultations to date.
          </p>
        </div>

        <ol className="mt-12 relative">
          <span aria-hidden className="hidden md:block absolute left-[200px] top-2 bottom-2 w-px bg-ink-900/15" />
          {entries.map((e, i) => (
            <li key={i} className="relative grid md:grid-cols-[200px_24px_1fr] gap-y-2 md:gap-x-6 py-5 border-t border-ink-900/10 first:border-t-0">
              <div className="font-mono text-[11px] uppercase tracking-ultra text-ink-500 pt-1.5">{e.period}</div>
              <div className="hidden md:flex justify-center pt-2.5">
                <span className="grid place-items-center w-3 h-3 rounded-full bg-parchment-100 ring-1 ring-ink-900/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div className="max-w-[64ch]">
                  <h3 className="font-display text-[22px] tracking-tightest text-ink-900 leading-tight">{e.role}</h3>
                  <div className="mt-0.5 text-[13.5px] text-forest-600 italic">{e.where}</div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.6] text-ink-700">{e.detail}</p>
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
