import { HeroIllustration } from "./Illos";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 lg:pt-40 lg:pb-24">
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          {/* Left — headline */}
          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-ultra text-ink-600">
              <span className="grid place-items-center w-5 h-5 rounded-full border border-ink-400/60">
                <svg width="9" height="9" viewBox="0 0 9 9"><circle cx="4.5" cy="4.5" r="2" fill="currentColor"/></svg>
              </span>
              <span>Old Goa · ENT & Vertigo Care · Est. 2025</span>
              <span className="deco-rule flex-1 max-w-[120px] text-ink-400" aria-hidden />
            </div>

            <h1 className="mt-6 font-display tracking-tightest text-ink-900 text-[34px] sm:text-[48px] lg:text-[62px] leading-[1.05] text-balance">
              Quiet, careful
              <br/>
              <span className="italic font-light text-forest-600">ENT & balance</span>
              <br/>
              care in Old Goa.
            </h1>

            <p className="mt-7 max-w-[50ch] text-[16px] leading-[1.6] text-ink-700">
              <strong className="font-medium text-ink-900">Dr. Anushri Mukhopadhyay</strong>, MBBS, DNS, MS&nbsp;-&nbsp;ENT, MBA, AFIH, an ENT &amp; vertigo specialist with 20–25+ years in healthcare and 5,000+ consultations to date. Daily consultations with on-site otology and endoscopy.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#book" className="inline-flex items-center gap-3 rounded-full bg-ink-900 text-parchment-50 pl-6 pr-2 py-2 text-[14px] hover:bg-forest-700 transition-colors">
                Book a consultation
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-terracotta-500 text-parchment-50">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10m0 0L8 3m4 4L8 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              <a href="tel:+918554001561" className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-3 text-[14px] text-ink-800 hover:border-forest-600 hover:text-forest-600 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                +91 85540 01561
              </a>
            </div>
          </div>

          {/* Right — image with overlay info */}
          <aside className="lg:col-span-5 reveal">
            <figure className="relative aspect-[4/5] rounded-[28px] border border-ink-900/8 shadow-[0_30px_60px_-30px_rgba(31,61,46,0.35)] overflow-hidden bg-forest-700">
              <HeroIllustration className="absolute inset-0 w-full h-full" />
              <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-parchment-50/95 backdrop-blur px-3 py-1.5 text-[10px] font-mono uppercase tracking-ultra text-ink-800">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-forest-400 animate-breathe"/>
                  <span className="relative h-2 w-2 rounded-full bg-forest-500"/>
                </span>
                Open · 10-1 PM · 4-8 PM
              </span>
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <div className="rounded-2xl bg-parchment-50/95 backdrop-blur px-5 py-4">
                  <div className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">The clinic</div>
                  <div className="mt-1 font-display text-[19px] tracking-tightest text-ink-900 leading-tight">
                    A-215, 2nd Floor, Expat Vida,<br/>Kadamba Plateau, Old Goa, Goa 403402
                  </div>
                  <div className="mt-1 text-[11px] text-ink-600 italic">above Lenskart</div>
                </div>
              </figcaption>
            </figure>
          </aside>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-900/10 rounded-2xl overflow-hidden">
          {[
            { k: "20–25+", v: "Years experience" },
            { k: "5,000+", v: "Consultations" },
            { k: "3", v: "Languages" },
            { k: "6", v: "Days a week" },
          ].map((s) => (
            <div key={s.v} className="bg-parchment-100 px-6 py-6">
              <div className="font-display text-[32px] sm:text-[40px] leading-none text-ink-900 tracking-tightest">{s.k}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-ultra text-ink-500">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
