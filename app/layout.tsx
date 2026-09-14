import type { Metadata } from "next";
import { inter, jetbrains } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jagvani Health & Wellness Clinic · ENT, Vertigo & Balance Care · Dr. Anushri Mukhopadhyay, Old Goa",
  description:
    "ENT and Vertigo & Balance Care at Kadamba Plateau, Old Goa. Dr. Anushri Mukhopadhyay (MBBS, DNS, MS-ENT, MBA, AFIH): daily ENT consultations with on-site otology & endoscopy, plus vertigo, BPPV, tinnitus & hearing care. 20–25+ years of experience, 5,000+ consultations. Open Monday to Saturday.",
  metadataBase: new URL("https://jagvaniclinic.in"),
  openGraph: {
    title: "Jagvani Health & Wellness Clinic · ENT, Vertigo & Balance Care, Old Goa",
    description:
      "Dr. Anushri Mukhopadhyay, ENT & Vertigo Specialist. 20–25+ years, 5,000+ consultations. On-site otology & endoscopy at Kadamba Plateau, Old Goa.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased text-ink-800">
        {children}
      </body>
    </html>
  );
}
