import { SectionLabel } from "./About";
import { StreetscapeIllo } from "./Illos";

const hours = [
  { d: "Mon — Fri", h: "10:00 — 1:30  ·  5:00 — 8:00" },
  { d: "Saturday", h: "10:00 — 2:00" },
  { d: "Sunday", h: "By appointment" },
];

export default function Clinic() {
  return (
    <section id="clinic" className="relative py-24 lg:py-28 bg-parchment-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionLabel index="06" title="Visit" />
        <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] text-ink-900 max-w-[18ch] text-balance">
          Two sittings,
          <span className="italic font-light text-forest-600"> six days.</span>
        </h2>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          {/* Image + caption */}
          <div className="lg:col-span-7">
            <figure className="relative aspect-[4/3] rounded-3xl border border-ink-900/8 overflow-hidden bg-parchment-200">
              <StreetscapeIllo className="absolute inset-0 w-full h-full" />
              <figcaption className="absolute bottom-5 left-5 right-5 rounded-2xl bg-parchment-50/95 backdrop-blur p-5 flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">Address</div>
                  <div className="mt-1 font-display text-[18px] tracking-tightest text-ink-900 leading-[1.25]">
                    A-215, 2nd Floor, Expat Vida,<br/>
                    Kadamba Plateau, Old Goa 403402
                  </div>
                  <div className="mt-1 text-[12px] text-ink-600 italic">above Lenskart</div>
                </div>
                <a href="https://maps.google.com/?q=Expat+Vida+A-215+Kadamba+Plateau+Old+Goa+403402" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-parchment-50 px-4 py-2 text-[12px]">
                  Open in maps →
                </a>
              </figcaption>
            </figure>

            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <Card label="Reception" value="+91 832 220 4567" />
              <Card label="Whatsapp" value="+91 98220 12345" />
              <Card label="Email" value="care@jagvaniclinic.in" />
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-ink-900/10 bg-parchment-100 p-6">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-ultra text-ink-600">Hours</div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 text-forest-600 px-2.5 py-1 text-[11px] font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest-500"/> Open now
                </span>
              </div>

              <ul className="mt-4 divide-y divide-ink-900/8">
                {hours.map((row) => (
                  <li key={row.d} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="font-display text-[18px] tracking-tightest text-ink-900">{row.d}</span>
                    <span className="font-mono text-[12px] tabular-nums text-right text-ink-700">{row.h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 deco-rule text-ink-400" />

              <div className="mt-5 grid grid-cols-2 gap-3 text-[13px]">
                <Card2 label="Cashless" value="Star · HDFC Ergo · ICICI" />
                <Card2 label="Access" value="Ramp + lift" />
                <Card2 label="Parking" value="Mall basement, free 1 hr" />
                <Card2 label="Languages" value="EN · KO · HI · BN" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink-900/10 bg-parchment-50 px-5 py-3">
      <div className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">{label}</div>
      <div className="mt-0.5 font-display text-[16px] tracking-tightest text-ink-900">{value}</div>
    </div>
  );
}
function Card2({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-parchment-50 border border-ink-900/8 px-3 py-2.5">
      <div className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">{label}</div>
      <div className="mt-0.5 text-ink-800 leading-snug">{value}</div>
    </div>
  );
}
