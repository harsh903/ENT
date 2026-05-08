# Jagvani Health & Wellness Clinic — One-pager site

Single-page professional site for **Dr. Anushri Mukhopadhyay**, ENT Specialist at **Jagvani Health and Wellness Clinic**, Kadamba Plateau, Old Goa (above Lenskart). Built with Next.js 14 (App Router) + Tailwind CSS.

**Address:** A-215, 2nd Floor, Expat Vida, Kadamba Plateau, Old Goa 403402.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build / start

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx       Root layout — fonts, metadata
  page.tsx         Single-page composition
  globals.css      Tailwind + paper-grain texture, reveal animations
  fonts.ts         Fraunces · DM Sans · JetBrains Mono

components/
  Nav.tsx          Top bar with monogram + booking CTA
  Hero.tsx         Editorial asymmetric hero + clinic info card + 4 stats
  Marquee.tsx      Scrolling credentials strip on dark band
  Illos.tsx        ENT-themed SVG illustrations (hero, room, 8 services, etc.)
  About.tsx        Clinic-room illustration + bullets
  Services.tsx     8 illustrated service tiles
  Experience.tsx   5-entry timeline
  Education.tsx    3 degrees · skills bars · memberships
  Testimonials.tsx 3 reviews + 6-tile specialty strip
  Clinic.tsx       Goan facade illustration · address · hours
  FAQ.tsx          6 Q&A accordion + frangipani illustration
  Booking.tsx      Form with concern chips + Old Goa coastal illustration
  Footer.tsx       Address · reach · sections · socials

public/
  favicon.svg
```

## Design

- Palette: warm parchment (`#F8F4ED`), deep forest (`#1F3D2E`), terracotta (`#C97B5A`), ink charcoal.
- Type: Fraunces (display, italic + opsz), DM Sans (body), JetBrains Mono (labels).
- Motion: staggered scroll-rise, marquee, breathing "open" dot.
- ENT illustrations: ear anatomy, otoscope, audiogram, sinus profile, voice waves, paediatric, vertigo, sleep, hearing aid, instruments, audiology room, Goan facade, frangipani, coastal evening.
