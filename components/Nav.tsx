export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-7 flex items-center justify-between text-ink-800">
        <a href="#top" className="flex items-center gap-3 group">
          <Monogram />
          <div className="leading-tight">
            <div className="font-display text-[18px] tracking-tightest">Jagvani Health & Wellness</div>
            <div className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">
              ENT · Vertigo & Balance · Old Goa
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[13px] text-ink-700">
          <a className="link-underline" href="#about">About</a>
          <a className="link-underline" href="#services">Services</a>
          <a className="link-underline" href="#experience">Experience</a>
          <a className="link-underline" href="#clinic">Clinic</a>
          <a className="link-underline" href="#faq">FAQ</a>
        </nav>

        <a
          href="#book"
          className="group inline-flex items-center gap-2 rounded-full bg-forest-600 text-parchment-50 pl-5 pr-4 py-2.5 text-[13px] font-medium hover:bg-forest-700 transition-colors"
        >
          Book a consultation
          <span className="grid place-items-center w-6 h-6 rounded-full bg-parchment-50 text-forest-600 transition-transform group-hover:translate-x-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 5h8m0 0L5.5 1.5M9 5L5.5 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}

function Monogram() {
  return (
    <span className="relative grid place-items-center w-10 h-10 rounded-full bg-forest-600 text-parchment-50 ring-1 ring-forest-700">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 18 V8 l8 8 8-8 V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="20" r="0.9" fill="currentColor"/>
      </svg>
    </span>
  );
}
