import { Inter, JetBrains_Mono } from "next/font/google";

// Inter — a common, highly readable web font used for both headings and body.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
