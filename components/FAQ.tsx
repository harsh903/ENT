"use client";

import { useState } from "react";
import { SectionLabel } from "./About";
import { FrangipaniIllo } from "./Illos";

const faqs = [
  { q: "What does an ENT specialist treat?", a: "An ENT (Ear, Nose & Throat) specialist diagnoses and treats conditions related to the ear, nose, throat, voice, sinuses, balance system, and related structures of the head and neck." },
  { q: "What services are available at the clinic?", a: "The clinic offers daily ENT consultations and assessment, Monday to Saturday, with on-site otology and endoscopy. Care is patient-centred, combining professional medical treatment with a holistic perspective." },
  { q: "How experienced is Dr. Mukhopadhyay?", a: "Dr. Anushri Mukhopadhyay (MBBS, DNS, MS - ENT, MBA, AFIH) has 20–25+ years of experience across clinical practice, government healthcare in Chhattisgarh, teaching and medical education in China, and corporate healthcare with Nestlé and Micro Labs. She has conducted 5,000+ consultations to date." },
  { q: "When should I consult an ENT doctor?", a: "Consult an ENT specialist if you experience persistent ear pain or hearing loss, recurrent throat infections, nasal blockage or sinus issues, vertigo or dizziness, snoring or sleep-related breathing problems, or voice changes lasting more than two weeks." },
  { q: "What causes repeated throat infections?", a: "Frequent throat infections may occur due to viral or bacterial infections, allergies, pollution, acid reflux, low immunity, or chronic tonsil disease." },
  { q: "Is hearing loss reversible? Are audiological tests done here?", a: "Some forms of hearing loss are temporary and treatable, while others may require long-term management. Early evaluation significantly improves outcomes. Yes, audiological test facilities are available at the clinic." },
  { q: "What is vertigo?", a: "Vertigo is not just “giddiness.” It is a sensation that you or your surroundings are spinning, tilting, or moving even when you are still. It may be associated with nausea, imbalance, ear symptoms, or anxiety." },
  { q: "Is vertigo a disease or a symptom?", a: "Vertigo is usually a symptom of an underlying condition affecting the inner ear, balance system, brain, neck, or sometimes stress-related mechanisms. Proper evaluation is important to identify the cause." },
  { q: "Can vertigo be completely cured?", a: "Many causes of vertigo improve significantly or resolve completely with proper treatment. Some conditions may require long-term management and lifestyle modifications." },
  { q: "Can stress and anxiety cause dizziness?", a: "Yes. Stress, anxiety, poor sleep, and emotional exhaustion can worsen dizziness and balance symptoms. In many patients, stress acts more like wind on a fragile flame rather than the flame itself." },
  { q: "What is BPPV?", a: "BPPV (Benign Paroxysmal Positional Vertigo) is a common inner ear condition causing brief episodes of spinning sensation with head movements. It is often treated with specific repositioning maneuvers." },
  { q: "Do I need an MRI for vertigo?", a: "Not every patient requires an MRI or extensive scans. Investigations are advised only when clinically necessary after proper examination." },
  { q: "Is vertigo dangerous?", a: "Most vertigo conditions are not life-threatening, but sudden severe dizziness associated with weakness, speech difficulty, severe headache, or loss of consciousness requires urgent medical attention." },
  { q: "What should I do during a vertigo attack?", a: "Sit or lie down safely, avoid sudden head movements, focus on a fixed point, stay hydrated, avoid driving during active symptoms, and seek medical consultation." },
  { q: "Is hearing loss related to vertigo?", a: "Certain inner ear disorders may cause both vertigo and hearing symptoms such as ringing, ear fullness, or hearing fluctuation." },
  { q: "Can elderly people develop balance disorders?", a: "Yes. Age-related vestibular decline, reduced vision, medications, and neurological conditions can contribute to imbalance and falls in older adults." },
  { q: "What causes ringing in the ears (tinnitus)?", a: "Tinnitus may arise from hearing loss, ear infections, noise exposure, stress, wax accumulation, or inner ear disorders." },
  { q: "Why does my nose remain blocked all the time?", a: "Persistent nasal blockage may result from allergies, sinusitis, a deviated nasal septum, nasal polyps, or chronic inflammation." },
  { q: "What is sinusitis?", a: "Sinusitis is inflammation or infection of the sinus cavities, often causing facial heaviness, headache, nasal congestion, postnasal drip, and reduced smell sensation." },
  { q: "Is snoring harmful?", a: "Occasional snoring may be harmless, but loud chronic snoring associated with daytime sleepiness or breathing pauses could indicate sleep apnea and requires evaluation." },
  { q: "What causes bad breath?", a: "Bad breath can arise from dental issues, throat infections, sinus disease, dry mouth, reflux, smoking, or poor oral hygiene." },
  { q: "Can allergies affect the ears and throat?", a: "Yes. Allergies can cause ear blockage, throat irritation, sneezing, nasal congestion, and chronic cough." },
  { q: "Why does my voice become hoarse?", a: "Hoarseness may result from infection, voice strain, reflux, smoking, allergies, or vocal cord disorders. Persistent voice change should be evaluated." },
  { q: "What causes difficulty swallowing?", a: "Swallowing difficulty may arise from throat infections, tonsil enlargement, reflux disease, neurological conditions, or structural defects." },
  { q: "What are nasal polyps?", a: "Nasal polyps are soft, non-cancerous swellings inside the nose or sinuses that may cause blockage, reduced smell, and breathing difficulty." },
  { q: "Can sinus problems cause headaches?", a: "Yes. Sinus inflammation can produce facial pressure and heaviness around the eyes and face." },
  { q: "How can I protect my hearing?", a: "Avoid prolonged loud noise exposure, use ear protection when needed, limit high-volume headphone use, treat ear infections early, and avoid self-medication." },
  { q: "What does a holistic approach mean at the clinic?", a: "Alongside professional medical care, Dr. Mukhopadhyay brings a holistic perspective informed by the Vedic Shastras, seeking to consider the individual as a whole while maintaining a professional medical approach." },
  { q: "Which languages are consultations available in?", a: "Consultations are available in Bengali, English and Hindi." },
  { q: "What should I bring to my ENT consultation?", a: "Please carry previous medical records, hearing tests or scans, current medications, previous prescriptions, and details of your ongoing symptoms." },
];

const PREVIEW_COUNT = 6;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faqs : faqs.slice(0, PREVIEW_COUNT);
  return (
    <section id="faq" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionLabel index="08" title="Questions" />
            <h2 className="mt-5 font-display tracking-tightest text-[40px] sm:text-[54px] lg:text-[60px] leading-[0.98] text-ink-900 text-balance">
              Your questions,
              <span className="italic font-light text-forest-600"> answered.</span>
            </h2>
            <p className="mt-5 text-[14px] leading-[1.6] text-ink-700 max-w-[36ch]">
              Not here? Whatsapp <a href="https://wa.me/917066601725" className="link-underline text-forest-600">+91 70666 01725</a>.
            </p>

            <div className="mt-8 aspect-[4/5] rounded-2xl max-w-[280px] overflow-hidden border border-ink-900/8">
              <FrangipaniIllo className="w-full h-full" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-ink-900/10 border-y border-ink-900/10">
              {visible.map((f, i) => {
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

            {faqs.length > PREVIEW_COUNT && (
              <button
                type="button"
                onClick={() => {
                  if (showAll) setOpen(null);
                  setShowAll((v) => !v);
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-2.5 text-[13px] text-ink-800 hover:border-forest-600 hover:text-forest-600 transition-colors"
              >
                {showAll ? "See fewer questions" : `See ${faqs.length - PREVIEW_COUNT} more questions`}
                <span className={`grid place-items-center w-5 h-5 transition-transform ${showAll ? "rotate-180" : ""}`}>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4.5 6 8.5l4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
