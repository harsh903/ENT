import { SectionLabel } from "./About";

const entries = [
  { period: "Step 01", role: "Careful listening", where: "Your symptoms heard in full, without rushing.", note: "Listen" },
  { period: "Step 02", role: "Structured assessment", where: "Detailed bedside ENT & vestibular examination.", note: "Examine" },
  { period: "Step 03", role: "Accurate diagnosis", where: "Tests and scans only when clinically needed.", note: "Diagnose" },
  { period: "Step 04", role: "Individualised treatment", where: "Evidence-based, conservative care first.", note: "Treat" },
  { period: "Step 05", role: "Long-term recovery", where: "Follow-up, reassurance & lifestyle guidance.", note: "Recover" },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="03" title="The approach" />
            <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-ink-900 text-balance">
              Heard, examined,
              <span className="italic font-light text-forest-600"> and guided back to balance.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14px] text-ink-600 leading-[1.6] max-w-[40ch]">
            Many patients arrive uncertain and exhausted after prolonged discomfort. Every visit follows the same calm, structured path.
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
