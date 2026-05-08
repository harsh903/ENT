export default function Footer() {
  return (
    <footer className="relative bg-parchment-100 border-t border-ink-900/10">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-forest-600 text-parchment-50">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 18 V8 l8 8 8-8 V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="20" r="0.9" fill="currentColor"/>
                </svg>
              </span>
              <div className="leading-tight">
                <div className="font-display text-[20px] tracking-tightest text-ink-900">Jagvani Health &amp; Wellness</div>
                <div className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">Dr. Anushri Mukhopadhyay · Old Goa</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {["instagram", "facebook", "linkedin", "whatsapp"].map((n) => (
                <a key={n} href="#" aria-label={n} className="grid place-items-center w-9 h-9 rounded-full border border-ink-900/15 text-ink-700 hover:border-forest-600 hover:text-forest-600 transition-colors">
                  <SocialIcon name={n} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <FooterCol title="Visit">
              <p>A-215, 2nd Floor, Expat Vida,<br/>Kadamba Plateau, Old Goa 403402</p>
              <p className="mt-1 italic text-ink-500">above Lenskart</p>
            </FooterCol>
          </div>

          <div className="lg:col-span-2">
            <FooterCol title="Reach">
              <p>+91 832 220 4567</p>
              <p>+91 98220 12345</p>
              <p>care@jagvaniclinic.in</p>
            </FooterCol>
          </div>

          <div className="lg:col-span-2">
            <FooterCol title="Sections">
              <ul className="space-y-1 text-[13px]">
                {[["About", "#about"], ["Services", "#services"], ["Clinic", "#clinic"], ["FAQ", "#faq"], ["Book", "#book"]].map(([k, h]) => (
                  <li key={k}><a href={h} className="link-underline text-ink-700">{k}</a></li>
                ))}
              </ul>
            </FooterCol>
          </div>
        </div>

        <div className="mt-10 deco-rule text-ink-400" />

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-ultra text-ink-500">
          <span>© {new Date().getFullYear()} Jagvani Health &amp; Wellness Clinic · Reg. MCI 2007/04812</span>
          <span>Designed in Goa</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-ultra text-terracotta-600 mb-3">{title}</div>
      <div className="text-[13px] text-ink-700 leading-[1.6]">{children}</div>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = { width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V8.5A.5.5 0 0 1 14 8Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" strokeLinecap="round" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20 12a8 8 0 1 1-3.5-6.6L20 4l-1.4 3.5A8 8 0 0 1 20 12Z" />
        </svg>
      );
  }
  return null;
}
