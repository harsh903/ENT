"use client";

import { useState } from "react";
import { SectionLabel } from "./About";
import { FrangipaniIllo } from "./Illos";

const faqs = [
  { q: "Do you accept walk-ins?", a: "Yes, but a Whatsapp booking gives you a near-guaranteed slot. Average walk-in wait: 25 minutes." },
  { q: "Do you offer telehealth?", a: "Follow-ups only. First consultations are in person — ENT requires a physical exam." },
  { q: "Which insurers do you support?", a: "Cashless on Star, HDFC Ergo, ICICI Lombard, Niva Bupa. Itemised receipts for self-claim on others." },
  { q: "What languages can I speak?", a: "English, Konkani, Hindi and Bengali — three of those by the doctor herself." },
  { q: "Is the clinic accessible?", a: "Yes — ramp at entrance, lift to first floor, paediatric-friendly chair, slow pace for the elderly." },
  { q: "Do you do surgery in-clinic?", a: "Office procedures only. Major surgery is referred to GMC Bambolim or Manipal Goa." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionLabel index="07" title="Questions" />
            <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[60px] leading-[0.98] text-ink-900 text-balance">
              Six things people
              <span className="italic font-light text-forest-600"> ask first.</span>
            </h2>
            <p className="mt-5 text-[14px] leading-[1.6] text-ink-700 max-w-[36ch]">
              Not here? Whatsapp <a href="https://wa.me/919822012345" className="link-underline text-forest-600">+91 98220 12345</a>.
            </p>

            <div className="mt-8 aspect-[4/5] rounded-2xl max-w-[280px] overflow-hidden border border-ink-900/8">
              <FrangipaniIllo className="w-full h-full" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-ink-900/10 border-y border-ink-900/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                    >
                      <div className="flex items-baseline gap-5">
                        <span className="font-mono text-[11px] tabular-nums text-ink-500 pt-1.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-[20px] sm:text-[24px] tracking-tightest text-ink-900 leading-[1.15]">
                          {f.q}
                        </h3>
                      </div>
                      <span className={`mt-2 grid place-items-center w-9 h-9 shrink-0 rounded-full border border-ink-900/15 transition-all ${isOpen ? "bg-ink-900 text-parchment-50 border-ink-900 rotate-45" : "text-ink-700 group-hover:border-forest-600 group-hover:text-forest-600"}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <p className="pb-6 pl-10 pr-12 text-[14.5px] leading-[1.7] text-ink-700 max-w-[60ch]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
