"use client";

import { useState } from "react";
import { CoastalIllo } from "./Illos";

const concerns = ["Hearing", "Sinus", "Voice", "Child", "Vertigo", "Sleep", "Hearing aid", "Other"];
const slots = ["10:30", "11:15", "12:00", "12:30", "5:00", "5:30", "6:15", "7:00"];

export default function Booking() {
  const [picked, setPicked] = useState<string>("12:30");
  const [concern, setConcern] = useState<string>("Hearing");

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
            <span className="font-mono text-[11px] uppercase tracking-ultra text-terracotta-400">§ 08</span>
            <span className="deco-rule w-12 text-parchment-100/40" />
            <span className="font-mono text-[11px] uppercase tracking-ultra">Book</span>
          </div>

          <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[58px] lg:text-[72px] leading-[0.95] text-parchment-50 text-balance">
            A quiet hour,
            <br/><span className="italic font-light text-terracotta-400">set aside.</span>
          </h2>

          <p className="mt-6 text-[14.5px] leading-[1.7] text-parchment-100/80 max-w-[40ch]">
            Whatsapp confirmation in 30 minutes. First visit is forty-five minutes — long enough to ask everything.
          </p>

          <figure className="mt-8 aspect-[4/5] rounded-3xl max-w-[300px] overflow-hidden border border-parchment-100/15">
            <CoastalIllo className="w-full h-full" />
          </figure>
        </div>

        <form className="lg:col-span-7 rounded-3xl bg-parchment-50 text-ink-900 p-7 sm:p-8 relative" onSubmit={(e) => e.preventDefault()}>
          <span className="absolute -top-3 right-7 inline-flex items-center gap-2 rounded-full bg-terracotta-500 text-parchment-50 px-3 py-1 text-[10px] font-mono uppercase tracking-ultra">
            <span className="h-1.5 w-1.5 rounded-full bg-parchment-50" /> 30-min reply
          </span>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" placeholder="As on ID" />
            <Field label="Phone" placeholder="+91 9XXX XXXXX" />
          </div>

          <div className="mt-5">
            <Label>Concern</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {concerns.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setConcern(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors ${
                    concern === c ? "bg-ink-900 text-parchment-50 border-ink-900" : "border-ink-900/15 text-ink-800 hover:border-forest-600 hover:text-forest-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <Label>Slot · Friday 09 May</Label>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {slots.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setPicked(s)}
                  className={`rounded-xl border py-2.5 font-mono text-[12.5px] tabular-nums transition-colors ${
                    picked === s ? "bg-forest-600 text-parchment-50 border-forest-600" : "border-ink-900/15 text-ink-800 hover:border-forest-600 hover:text-forest-600"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <Label>Note</Label>
            <textarea rows={2} placeholder="Symptoms, medication, language…" className="mt-2 w-full rounded-2xl border border-ink-900/15 bg-parchment-100/40 px-4 py-3 text-[14px] resize-none focus:outline-none focus:border-forest-600" />
          </div>

          <button type="submit" className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-ink-900 hover:bg-forest-700 text-parchment-50 pl-6 pr-2 py-2 text-[14px] transition-colors">
            Send request
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-terracotta-500 text-parchment-50">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10m0 0L8 3m4 4L8 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">{children}</span>;
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input type="text" placeholder={placeholder} className="mt-1.5 w-full rounded-2xl border border-ink-900/15 bg-parchment-100/40 px-4 py-3 text-[14px] focus:outline-none focus:border-forest-600 placeholder:text-ink-400" />
    </label>
  );
}
