/**
 * ENT-themed SVG illustrations.
 * Style: editorial line-art on forest-green or parchment ground,
 * with terracotta accent strokes. Drawn in a unified visual language
 * so different sections feel like one set.
 */

type IlloProps = { className?: string };

/* ───────────── Hero — Otoscope + ear in profile ───────────── */
export function HeroIllustration({ className = "" }: IlloProps) {
  return (
    <svg viewBox="0 0 600 750" className={className} fill="none">
      <defs>
        <pattern id="hero-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" stroke="rgba(248,244,237,0.06)" strokeWidth="0.6" />
        </pattern>
        <linearGradient id="hero-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1F3D2E" />
          <stop offset="100%" stopColor="#15301F" />
        </linearGradient>
      </defs>
      <rect width="600" height="750" fill="url(#hero-bg)" />
      <rect width="600" height="750" fill="url(#hero-grid)" />

      {/* concentric sound rings */}
      <g stroke="#F8F4ED" strokeWidth="1" opacity="0.18">
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} cx="200" cy="280" r={50 + i * 26} />
        ))}
      </g>

      {/* Profile head silhouette + ear */}
      <g transform="translate(160 130)">
        <path
          d="M280 50 C320 70, 340 130, 320 200 C310 240, 290 270, 250 290 L240 360 C238 380, 224 400, 200 408 L120 410 C90 410, 70 390, 70 360 L70 240 C70 170, 110 100, 180 70 C220 55, 250 48, 280 50 Z"
          fill="#F8F4ED" fillOpacity="0.04" stroke="#F8F4ED" strokeWidth="1.4"
        />
        {/* ear outer + inner */}
        <g stroke="#F8F4ED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M150 200 C140 175, 145 145, 175 130 C220 110, 270 130, 280 175 C285 200, 275 225, 250 240 C230 252, 215 248, 205 235 C198 225, 200 215, 210 210 C220 207, 228 215, 226 225"/>
          <path d="M170 215 C168 195, 180 175, 205 175"/>
          <path d="M222 232 C217 220, 222 205, 235 200"/>
        </g>
      </g>

      {/* Otoscope, drawn diagonally */}
      <g transform="translate(50 470) rotate(-22)" stroke="#F8F4ED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 80 L 220 80" />
        <rect x="220" y="60" width="120" height="40" rx="6" fill="#F8F4ED" fillOpacity="0.06"/>
        <circle cx="280" cy="80" r="10"/>
        <path d="M340 80 L 410 80"/>
        <path d="M0 80 L -22 60 L -22 100 Z" fill="#C97B5A" stroke="#C97B5A"/>
        <line x1="240" y1="68" x2="240" y2="92"/>
        <line x1="320" y1="68" x2="320" y2="92"/>
      </g>

      {/* Stylised audiogram chart */}
      <g transform="translate(380 540)" stroke="#F8F4ED" strokeWidth="1" opacity="0.55">
        <rect x="0" y="0" width="180" height="120" rx="6" fill="#F8F4ED" fillOpacity="0.04"/>
        <path d="M10 80 L40 70 L70 60 L100 50 L130 55 L160 70" stroke="#C97B5A" strokeWidth="1.6" fill="none"/>
        {[20, 40, 60, 80, 100].map((y) => (
          <line key={y} x1="0" y1={y} x2="180" y2={y} strokeDasharray="2 4" />
        ))}
        <text x="10" y="14" fill="#F8F4ED" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.5" opacity="0.7">AUDIOGRAM</text>
      </g>

      {/* terracotta dots */}
      <circle cx="120" cy="100" r="4" fill="#C97B5A"/>
      <circle cx="540" cy="220" r="3" fill="#C97B5A"/>
      <circle cx="60" cy="660" r="3" fill="#C97B5A"/>
    </svg>
  );
}

/* ───────────── About — Audiology room interior ───────────── */
export function ClinicRoomIllo({ className = "" }: IlloProps) {
  return (
    <svg viewBox="0 0 600 750" className={className} fill="none">
      <defs>
        <linearGradient id="room-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F1EADC" />
          <stop offset="100%" stopColor="#E6DCC6" />
        </linearGradient>
      </defs>
      <rect width="600" height="750" fill="url(#room-bg)"/>

      {/* floor line */}
      <line x1="0" y1="540" x2="600" y2="540" stroke="#1F3D2E" strokeOpacity="0.25" strokeWidth="1.4"/>
      {/* skirting */}
      <line x1="0" y1="555" x2="600" y2="555" stroke="#1F3D2E" strokeOpacity="0.12"/>

      {/* exam chair */}
      <g transform="translate(60 320)" stroke="#1F3D2E" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M0 220 L0 110 C0 90, 20 70, 50 70 L120 70 C140 70, 160 90, 160 110 L160 220" fill="#C97B5A" fillOpacity="0.18"/>
        <path d="M0 110 L160 110"/>
        <path d="M30 220 L30 240 M130 220 L130 240"/>
        <path d="M-20 220 L180 220"/>
        <path d="M40 70 L40 30 C40 14, 54 0, 75 0 L 95 0 C115 0, 130 14, 130 30 L130 70"/>
      </g>

      {/* audiometer console on a small table */}
      <g transform="translate(280 360)" stroke="#1F3D2E" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <rect x="0" y="0" width="180" height="100" rx="6" fill="#1F3D2E" fillOpacity="0.06"/>
        <line x1="20" y1="30" x2="160" y2="30"/>
        <circle cx="40" cy="60" r="8"/>
        <circle cx="80" cy="60" r="8"/>
        <circle cx="120" cy="60" r="8"/>
        <rect x="140" y="50" width="20" height="20" rx="2"/>
        {/* table legs */}
        <path d="M0 100 L0 180 M180 100 L180 180"/>
      </g>

      {/* hanging headphones from ceiling */}
      <g transform="translate(370 70)" stroke="#1F3D2E" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <line x1="40" y1="0" x2="40" y2="120"/>
        <path d="M10 130 C 10 95, 70 95, 70 130"/>
        <rect x="0" y="125" width="22" height="34" rx="6" fill="#C97B5A" fillOpacity="0.5"/>
        <rect x="58" y="125" width="22" height="34" rx="6" fill="#C97B5A" fillOpacity="0.5"/>
      </g>

      {/* framed certificate on wall */}
      <g transform="translate(60 80)" stroke="#1F3D2E" strokeWidth="1.4" fill="none">
        <rect x="0" y="0" width="120" height="160" rx="2" fill="#F8F4ED"/>
        <line x1="20" y1="40" x2="100" y2="40"/>
        <line x1="20" y1="60" x2="100" y2="60"/>
        <line x1="20" y1="80" x2="80" y2="80"/>
        <circle cx="100" cy="120" r="14" stroke="#C97B5A" strokeWidth="1.6"/>
        <path d="M92 122 L98 128 L110 116" stroke="#C97B5A"/>
      </g>

      {/* small plant — frangipani in pot */}
      <g transform="translate(490 410)" stroke="#1F3D2E" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M0 130 L20 80 L 60 130 Z" fill="#C97B5A" fillOpacity="0.15"/>
        <path d="M30 80 C30 50, 10 30, -10 40"/>
        <path d="M30 80 C30 50, 50 30, 70 40"/>
        <path d="M30 80 C30 60, 30 30, 30 10"/>
        <circle cx="30" cy="10" r="4" fill="#C97B5A"/>
        <circle cx="-12" cy="40" r="4" fill="#C97B5A"/>
        <circle cx="72" cy="40" r="4" fill="#C97B5A"/>
      </g>

      {/* stylised window with light */}
      <g transform="translate(220 100)" stroke="#1F3D2E" strokeWidth="1.4" fill="none">
        <rect x="0" y="0" width="120" height="170" rx="3"/>
        <line x1="60" y1="0" x2="60" y2="170"/>
        <line x1="0" y1="85" x2="120" y2="85"/>
        <g opacity="0.4">
          <line x1="20" y1="20" x2="100" y2="20"/>
          <line x1="20" y1="40" x2="100" y2="40"/>
          <line x1="20" y1="60" x2="80" y2="60"/>
        </g>
      </g>
    </svg>
  );
}

/* ───────────── Service icons (8) ───────────── */
type SvcId =
  | "hearing"
  | "sinus"
  | "voice"
  | "paediatric"
  | "vertigo"
  | "sleep"
  | "hearingAid"
  | "office";

export function ServiceIllo({ kind, className = "" }: { kind: SvcId; className?: string }) {
  const stroke = "#F8F4ED";
  const accent = "#C97B5A";
  const bg = "#1F3D2E";
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="120" fill={bg} />
      <g stroke={stroke} strokeOpacity="0.15">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1={i * 33.3} y1="0" x2={i * 33.3} y2="120" strokeWidth="0.5"/>
        ))}
      </g>
      <g stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {kind === "hearing" && (
          <>
            {/* headphones with audiogram dots */}
            <path d="M50 75 C 50 50, 90 50, 90 75 V 92" />
            <rect x="42" y="75" width="14" height="22" rx="3" fill={stroke} fillOpacity="0.08"/>
            <rect x="84" y="75" width="14" height="22" rx="3" fill={stroke} fillOpacity="0.08"/>
            <path d="M120 92 L130 78 L140 60 L150 70 L160 50" stroke={accent} strokeWidth="1.6"/>
            {[120, 130, 140, 150, 160].map((x, i) => (
              <circle key={x} cx={x} cy={[92, 78, 60, 70, 50][i]} r="2" fill={accent} stroke="none"/>
            ))}
          </>
        )}
        {kind === "sinus" && (
          <>
            {/* head profile with sinus glow */}
            <path d="M70 95 C40 90, 35 50, 70 35 C95 25, 130 30, 140 55 C148 75, 138 88, 120 92 L115 105 L100 105 Z"/>
            <ellipse cx="92" cy="55" rx="14" ry="10" fill={accent} fillOpacity="0.35" stroke={accent}/>
            <ellipse cx="116" cy="62" rx="9" ry="7" fill={accent} fillOpacity="0.35" stroke={accent}/>
            <circle cx="98" cy="80" r="2" fill={stroke} stroke="none"/>
          </>
        )}
        {kind === "voice" && (
          <>
            {/* throat with sound waves */}
            <path d="M70 30 L70 58 C70 70, 80 75, 90 75 L110 75 C120 75, 130 70, 130 58 L130 30"/>
            <path d="M75 75 L 100 110 L125 75"/>
            <g stroke={accent} strokeWidth="1.6">
              <path d="M40 60 q 8 -8 0 -16"/>
              <path d="M30 65 q 14 -14 0 -28"/>
              <path d="M160 60 q -8 -8 0 -16"/>
              <path d="M170 65 q -14 -14 0 -28"/>
            </g>
          </>
        )}
        {kind === "paediatric" && (
          <>
            {/* small head with parent shadow */}
            <circle cx="80" cy="60" r="22" fill={stroke} fillOpacity="0.06"/>
            <path d="M58 90 C58 78, 102 78, 102 90 L102 105 L58 105 Z"/>
            <circle cx="74" cy="58" r="1.4" fill={stroke} stroke="none"/>
            <circle cx="86" cy="58" r="1.4" fill={stroke} stroke="none"/>
            <path d="M76 67 q 4 4 8 0"/>
            <circle cx="135" cy="50" r="14" fill={stroke} fillOpacity="0.04"/>
            <path d="M120 80 C120 68, 150 68, 150 80 L150 100 L120 100 Z"/>
            <path d="M148 50 q 6 0 8 -8" stroke={accent}/>
          </>
        )}
        {kind === "vertigo" && (
          <>
            <circle cx="100" cy="60" r="26" fill={stroke} fillOpacity="0.06"/>
            <path d="M86 56 q 14 8 28 0" />
            <circle cx="92" cy="50" r="1.6" fill={stroke} stroke="none"/>
            <circle cx="108" cy="50" r="1.6" fill={stroke} stroke="none"/>
            <g stroke={accent} strokeWidth="1.6">
              <path d="M55 60 a 45 45 0 0 1 90 0" markerEnd="url(#arrow)"/>
              <path d="M145 60 a 45 45 0 0 1 -90 0"/>
              <path d="M58 56 L 52 60 L58 64"/>
              <path d="M142 64 L 148 60 L142 56"/>
            </g>
          </>
        )}
        {kind === "sleep" && (
          <>
            <path d="M150 30 a 25 25 0 1 1 -22 36 a 18 18 0 0 0 22 -36 Z"/>
            <g stroke={accent} strokeWidth="1.4">
              <path d="M40 90 q 8 -8 16 0 t 16 0 t 16 0"/>
              <path d="M40 75 q 8 -6 16 0 t 16 0"/>
              <path d="M40 105 q 8 -10 16 0 t 16 0 t 16 0 t 16 0"/>
            </g>
            <text x="115" y="20" fill={stroke} fontSize="10" letterSpacing="2" fontFamily="ui-monospace, monospace" opacity="0.7">Z z z</text>
          </>
        )}
        {kind === "hearingAid" && (
          <>
            <path d="M90 35 C 75 35, 60 50, 60 70 C 60 90, 80 100, 90 100 L 100 100 L 105 90 L 110 100 C 130 100, 140 80, 140 65 C 140 48, 125 35, 105 35 Z" fill={stroke} fillOpacity="0.06"/>
            <path d="M90 100 q 6 12 18 0"/>
            <circle cx="118" cy="65" r="6" fill={accent} stroke={accent}/>
            <circle cx="80" cy="68" r="3" fill={stroke}/>
          </>
        )}
        {kind === "office" && (
          <>
            {/* forceps + curette + endoscope */}
            <path d="M40 30 L100 90"/>
            <path d="M40 50 L100 90"/>
            <circle cx="40" cy="30" r="5" fill={accent} stroke={accent}/>
            <circle cx="40" cy="50" r="5" fill={accent} stroke={accent}/>
            <path d="M120 30 L160 30 C170 30, 170 100, 160 100 L150 100" />
            <path d="M150 100 L150 110"/>
            <line x1="120" y1="30" x2="120" y2="20"/>
          </>
        )}
      </g>
    </svg>
  );
}

/* ───────────── Education side — equipment cluster ───────────── */
export function EquipmentIllo({ className = "" }: IlloProps) {
  return (
    <svg viewBox="0 0 800 1400" className={className} fill="none">
      <rect width="800" height="1400" fill="#15301F"/>
      <g stroke="#F8F4ED" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9">
        {/* otoscope */}
        <g transform="translate(180 200)">
          <rect x="0" y="0" width="140" height="46" rx="6" fill="#F8F4ED" fillOpacity="0.05"/>
          <circle cx="46" cy="23" r="10"/>
          <path d="M140 23 L 220 23"/>
          <path d="M0 23 L -22 12 L -22 34 Z" fill="#C97B5A" stroke="#C97B5A"/>
        </g>
        {/* stethoscope */}
        <g transform="translate(120 380)">
          <path d="M40 0 L40 80 C 40 130, 100 150, 140 130"/>
          <path d="M120 0 L120 80 C 120 130, 60 150, 20 130"/>
          <circle cx="180" cy="120" r="22"/>
          <circle cx="180" cy="120" r="10" fill="#C97B5A" stroke="#C97B5A"/>
          <circle cx="40" cy="0" r="6"/>
          <circle cx="120" cy="0" r="6"/>
        </g>
        {/* tuning fork */}
        <g transform="translate(420 200)">
          <path d="M0 0 L0 100 C0 120, 20 140, 30 140 C40 140, 60 120, 60 100 L 60 0"/>
          <path d="M30 140 L30 200"/>
          <rect x="20" y="200" width="20" height="40" rx="3" fill="#C97B5A" stroke="#C97B5A"/>
        </g>
        {/* head + sinus diagram */}
        <g transform="translate(160 700)">
          <path d="M0 200 C 0 80, 110 0, 220 40 C 320 80, 330 220, 240 280 L 230 360 C 228 380, 214 400, 190 408 L 70 410 C 30 410, 0 380, 0 340 Z" fill="#F8F4ED" fillOpacity="0.04"/>
          <ellipse cx="120" cy="160" rx="40" ry="26" stroke="#C97B5A" fill="#C97B5A" fillOpacity="0.25"/>
          <ellipse cx="200" cy="180" rx="28" ry="20" stroke="#C97B5A" fill="#C97B5A" fillOpacity="0.25"/>
          <circle cx="160" cy="240" r="3" fill="#F8F4ED"/>
        </g>
        {/* audiogram */}
        <g transform="translate(420 1100)">
          <rect x="0" y="0" width="240" height="150" rx="6" fill="#F8F4ED" fillOpacity="0.04"/>
          <text x="14" y="20" fill="#F8F4ED" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2" opacity="0.7">AUDIOGRAM</text>
          {[40, 60, 80, 100, 120].map((y) => (
            <line key={y} x1="0" y1={y} x2="240" y2={y} strokeDasharray="2 4" opacity="0.45"/>
          ))}
          <path d="M10 95 L 50 80 L 90 65 L 130 55 L 170 60 L 210 80" stroke="#C97B5A" strokeWidth="1.8"/>
        </g>
      </g>
    </svg>
  );
}

/* ───────────── Clinic — Goan facade with clinic plaque ───────────── */
export function StreetscapeIllo({ className = "" }: IlloProps) {
  return (
    <svg viewBox="0 0 1200 900" className={className} fill="none">
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F1EADC"/>
          <stop offset="100%" stopColor="#E6DCC6"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#sky)"/>

      {/* horizon street */}
      <line x1="0" y1="700" x2="1200" y2="700" stroke="#1F3D2E" strokeOpacity="0.4" strokeWidth="1.6"/>

      {/* neighbouring building (left) */}
      <g stroke="#1F3D2E" strokeWidth="1.4" fill="none">
        <rect x="40" y="240" width="280" height="460" fill="#F8F4ED"/>
        <path d="M30 240 L180 140 L330 240"/>
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect key={`${row}-${col}`} x={70 + col * 80} y={290 + row * 130} width="60" height="80" fill="#1F3D2E" fillOpacity="0.06"/>
          ))
        )}
      </g>

      {/* clinic building (centre) — Portuguese-Goan facade */}
      <g stroke="#1F3D2E" strokeWidth="1.6" fill="none">
        <rect x="380" y="180" width="500" height="520" fill="#F8F4ED"/>
        <path d="M370 180 L630 80 L890 180"/>
        <line x1="500" y1="135" x2="500" y2="180"/>
        <line x1="760" y1="135" x2="760" y2="180"/>
        {/* arched windows */}
        {[420, 540, 660, 780].map((x) => (
          <g key={x}>
            <path d={`M${x} 320 L${x} 260 a 30 30 0 0 1 60 0 L${x + 60} 320 Z`} fill="#1F3D2E" fillOpacity="0.06"/>
            <line x1={x + 30} y1="240" x2={x + 30} y2="320"/>
          </g>
        ))}
        {/* lower windows */}
        {[420, 540, 780].map((x) => (
          <rect key={x} x={x} y="440" width="60" height="100" fill="#1F3D2E" fillOpacity="0.06"/>
        ))}
        {/* door */}
        <rect x="640" y="430" width="80" height="180" fill="#1F3D2E" fillOpacity="0.1"/>
        <path d="M640 480 a 40 40 0 0 1 80 0"/>
        {/* entrance steps */}
        <path d="M620 700 L740 700 L730 680 L630 680 Z" fill="#1F3D2E" fillOpacity="0.1"/>
        {/* awning */}
        <path d="M380 250 L880 250 L860 280 L400 280 Z" fill="#C97B5A" fillOpacity="0.5"/>
      </g>

      {/* clinic plaque */}
      <g transform="translate(420 380)">
        <rect x="0" y="0" width="420" height="46" fill="#1F3D2E"/>
        <text x="210" y="29" textAnchor="middle" fill="#F8F4ED" fontFamily="ui-serif, Georgia, serif" fontSize="18" letterSpacing="3">JAGVANI HEALTH &amp; WELLNESS</text>
      </g>
      {/* lenskart sublabel */}
      <g transform="translate(540 440)">
        <text fill="#1F3D2E" fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="2" opacity="0.6">ABOVE LENSKART</text>
      </g>

      {/* right neighbour (cafe) */}
      <g stroke="#1F3D2E" strokeWidth="1.4" fill="none">
        <rect x="940" y="320" width="240" height="380" fill="#F8F4ED"/>
        <rect x="970" y="380" width="80" height="120" fill="#1F3D2E" fillOpacity="0.08"/>
        <rect x="1080" y="380" width="80" height="120" fill="#1F3D2E" fillOpacity="0.08"/>
        <rect x="1000" y="540" width="140" height="160" fill="#1F3D2E" fillOpacity="0.08"/>
        <text x="1060" y="350" textAnchor="middle" fill="#1F3D2E" fontFamily="ui-serif, Georgia, serif" fontSize="14" opacity="0.6" letterSpacing="2">SHOPS</text>
      </g>

      {/* lamp post */}
      <g stroke="#1F3D2E" strokeWidth="1.4" fill="none">
        <line x1="350" y1="700" x2="350" y2="450"/>
        <path d="M350 450 q 30 0 30 30"/>
        <circle cx="385" cy="490" r="10" fill="#C97B5A" stroke="#C97B5A"/>
      </g>

      {/* a person walking */}
      <g stroke="#1F3D2E" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <circle cx="280" cy="640" r="10"/>
        <path d="M280 650 L280 685 M270 660 L290 660 M280 685 L272 720 M280 685 L290 720"/>
      </g>

      {/* shadow under buildings */}
      <rect x="0" y="700" width="1200" height="6" fill="#1F3D2E" opacity="0.18"/>

      {/* ground texture dots */}
      <g fill="#1F3D2E" opacity="0.15">
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={i} cx={20 + (i * 23) % 1180} cy={730 + ((i * 17) % 130)} r="1.4"/>
        ))}
      </g>
    </svg>
  );
}

/* ───────────── FAQ — frangipani / botanical ───────────── */
export function FrangipaniIllo({ className = "" }: IlloProps) {
  return (
    <svg viewBox="0 0 600 750" className={className} fill="none">
      <rect width="600" height="750" fill="#F1EADC"/>
      <g stroke="#1F3D2E" strokeWidth="1.4" fill="none" strokeLinecap="round">
        {/* stem */}
        <path d="M300 750 C 300 600, 280 500, 290 380 C 300 280, 280 180, 250 60"/>
        <path d="M270 360 C 240 320, 200 300, 160 320"/>
        <path d="M310 250 C 340 220, 380 220, 420 250"/>

        {/* leaves */}
        {[
          { x: 220, y: 300, r: -30 },
          { x: 380, y: 230, r: 30 },
          { x: 200, y: 460, r: -10 },
          { x: 380, y: 480, r: 20 },
          { x: 250, y: 600, r: -20 },
        ].map((l, i) => (
          <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r})`}>
            <path d="M0 0 C 30 -50, 90 -50, 120 0 C 90 50, 30 50, 0 0 Z" fill="#1F3D2E" fillOpacity="0.06"/>
            <line x1="0" y1="0" x2="120" y2="0"/>
          </g>
        ))}

        {/* frangipani flower clusters */}
        {[
          { cx: 250, cy: 70 }, { cx: 200, cy: 130 }, { cx: 320, cy: 110 },
        ].map((f, i) => (
          <g key={i} transform={`translate(${f.cx} ${f.cy})`}>
            {Array.from({ length: 5 }).map((_, k) => {
              const a = (k / 5) * Math.PI * 2;
              const x = Math.cos(a) * 22, y = Math.sin(a) * 22;
              return (
                <ellipse key={k} cx={x} cy={y} rx="22" ry="14" transform={`rotate(${(k * 72)} ${x} ${y})`} fill="#F8F4ED" stroke="#1F3D2E"/>
              );
            })}
            <circle r="10" fill="#C97B5A" stroke="#C97B5A"/>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ───────────── Booking — Old Goa coastal sketch ───────────── */
export function CoastalIllo({ className = "" }: IlloProps) {
  return (
    <svg viewBox="0 0 600 750" className={className} fill="none">
      <defs>
        <linearGradient id="evening" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8A4830"/>
          <stop offset="100%" stopColor="#15301F"/>
        </linearGradient>
      </defs>
      <rect width="600" height="750" fill="url(#evening)"/>

      {/* sun / lamp */}
      <circle cx="430" cy="220" r="56" fill="#D9B25E" opacity="0.85"/>
      <circle cx="430" cy="220" r="100" fill="#D9B25E" opacity="0.18"/>

      {/* horizon */}
      <line x1="0" y1="400" x2="600" y2="400" stroke="#F8F4ED" strokeOpacity="0.55" strokeWidth="1.4"/>

      {/* river ripples */}
      <g stroke="#F8F4ED" strokeOpacity="0.4" strokeWidth="1">
        {[420, 460, 500, 540, 580, 620, 660].map((y) => (
          <path key={y} d={`M-20 ${y} q 60 -8 120 0 t 120 0 t 120 0 t 120 0 t 120 0`}/>
        ))}
      </g>

      {/* sun reflection */}
      <g stroke="#D9B25E" strokeWidth="1.4">
        {[420, 450, 480, 510].map((y) => (
          <line key={y} x1="380" x2="480" y1={y} y2={y}/>
        ))}
      </g>

      {/* boat */}
      <g stroke="#F8F4ED" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M120 400 L 220 400 L 200 420 L 140 420 Z" fill="#1F3D2E"/>
        <line x1="170" y1="400" x2="170" y2="340"/>
        <path d="M170 340 L 220 400 L 170 400 Z" fill="#F8F4ED" fillOpacity="0.15"/>
      </g>

      {/* far shore silhouette — buildings */}
      <g fill="#1F3D2E" opacity="0.65">
        <rect x="20" y="360" width="50" height="40"/>
        <rect x="80" y="350" width="40" height="50"/>
        <path d="M130 400 L130 360 L150 340 L170 360 L170 400 Z"/>
        <rect x="190" y="370" width="40" height="30"/>
        <rect x="240" y="355" width="60" height="45"/>
        <rect x="320" y="370" width="50" height="30"/>
        <rect x="540" y="365" width="40" height="35"/>
      </g>
      {/* church spire on far shore */}
      <g fill="#F8F4ED" opacity="0.85">
        <path d="M280 360 L290 320 L300 360 Z"/>
        <rect x="285" y="345" width="10" height="6"/>
      </g>

      {/* palm fronds in foreground */}
      <g stroke="#F8F4ED" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.85">
        <g transform="translate(60 700)">
          <path d="M0 0 C 20 -100, 30 -200, 20 -320"/>
          {Array.from({ length: 8 }).map((_, i) => {
            const y = -40 - i * 35;
            return (
              <g key={i}>
                <path d={`M${20 - i * 0.5} ${y} q -50 -10, -80 ${5 + i}`}/>
                <path d={`M${20 - i * 0.5} ${y} q 50 -10, 80 ${5 + i}`}/>
              </g>
            );
          })}
        </g>
        <g transform="translate(560 720)">
          <path d="M0 0 C -20 -120, -30 -240, -10 -340"/>
          {Array.from({ length: 7 }).map((_, i) => {
            const y = -50 - i * 40;
            return (
              <g key={i}>
                <path d={`M${-10 + i * 0.5} ${y} q -50 -10, -80 ${5 + i}`}/>
                <path d={`M${-10 + i * 0.5} ${y} q 50 -10, 80 ${5 + i}`}/>
              </g>
            );
          })}
        </g>
      </g>

      {/* small label */}
      <text x="40" y="60" fill="#F8F4ED" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3" opacity="0.7">OLD GOA · KADAMBA · 18.5°N</text>
    </svg>
  );
}

/* ───────────── Testimonials gallery — small cohesive icons ───────────── */
export function GalleryTile({ kind, className = "" }: { kind: SvcId; className?: string }) {
  return <ServiceIllo kind={kind} className={className} />;
}
