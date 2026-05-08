import type { Metadata } from "next";
import { fraunces, dmSans, jetbrains } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jagvani Health and Wellness Clinic — Dr. Anushri Mukhopadhyay, Old Goa",
  description:
    "ENT & wellness care at Kadamba Plateau, Old Goa. Dr. Anushri Mukhopadhyay leads a small, deeply-trained practice — hearing, sinus, voice, paediatric ENT, vertigo, sleep & more.",
  metadataBase: new URL("https://jagvaniclinic.in"),
  openGraph: {
    title: "Jagvani Health and Wellness Clinic — Old Goa",
    description:
      "Dr. Anushri Mukhopadhyay, ENT Specialist. Hearing, sinus, voice, vertigo & paediatric ENT — Kadamba Plateau, Old Goa.",
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
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased text-ink-800">
        {children}
      </body>
    </html>
  );
}
