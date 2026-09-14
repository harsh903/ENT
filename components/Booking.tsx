import { CoastalIllo } from "./Illos";

const WHATSAPP = "917066601725";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Jagvani Health & Wellness Clinic, I'd like to book a consultation.")}`;

export default function Booking() {
  return (
    <section id="book" className="relative py-24 lg:py-28 bg-ink-900 text-parchment-100 overflow-hidden">
      <svg aria-hidden className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.07]">
        <defs>
          <pattern id="diag" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" className="text-parchment-100"/>
      </svg>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 text-parchment-100/70">
            <span className="font-mono text-[11px] uppercase tracking-ultra text-terracotta-400">§ 09</span>
            <span className="deco-rule w-12 text-parchment-100/40" />
            <span className="font-mono text-[11px] uppercase tracking-ultra">Book</span>
          </div>

          <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[58px] lg:text-[72px] leading-[0.95] text-parchment-50 text-balance">
            A quiet hour,
            <br/><span className="italic font-light text-terracotta-400">set aside.</span>
          </h2>

          <p className="mt-6 text-[14.5px] leading-[1.7] text-parchment-100/80 max-w-[42ch]">
            Message us on WhatsApp to book. New consultation ₹800 · follow-up ₹500. Teleconsultation available on WhatsApp video &amp; Google Meet.
          </p>

          <figure className="mt-8 aspect-[4/5] rounded-3xl max-w-[300px] overflow-hidden border border-parchment-100/15">
            <CoastalIllo className="w-full h-full" />
          </figure>
        </div>

        <div className="lg:col-span-7 lg:self-center rounded-3xl bg-parchment-50 text-ink-900 p-7 sm:p-10 relative">
          <span className="absolute -top-3 right-7 inline-flex items-center gap-2 rounded-full bg-terracotta-500 text-parchment-50 px-3 py-1 text-[10px] font-mono uppercase tracking-ultra">
            <span className="h-1.5 w-1.5 rounded-full bg-parchment-50" /> WhatsApp
          </span>

          <span className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">Message us on WhatsApp</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2 block font-display text-[34px] sm:text-[48px] leading-none tracking-tightest text-ink-900 hover:text-forest-600 transition-colors">
            +91 70666 01725
          </a>

          <p className="mt-5 text-[14.5px] leading-[1.7] text-ink-700 max-w-[48ch]">
            Send us a message with your name, concern and preferred time, and we&apos;ll reply on WhatsApp to confirm your consultation.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-ink-900 hover:bg-forest-700 text-parchment-50 pl-6 pr-2 py-2 text-[14px] transition-colors"
          >
            Chat on WhatsApp
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-terracotta-500 text-parchment-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20 12a8 8 0 0 1-11.9 7L4 20l1.1-3.9A8 8 0 1 1 20 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M9.2 8.5c.3-.3.8-.3 1 .1l.7 1.4c.1.3 0 .6-.2.8l-.5.5a5 5 0 0 0 2.5 2.5l.5-.5c.2-.2.5-.3.8-.2l1.4.7c.4.2.4.7.1 1-.6.7-1.5 1-2.4.6a7.6 7.6 0 0 1-4.5-4.5c-.3-.9 0-1.8.6-2.4Z" fill="currentColor"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
