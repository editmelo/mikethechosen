import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://mikethechosen.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mike the Chosen — R&B Artist · Songwriter · Producer",
  description:
    "Mike the Chosen (Michael “Big Mike” Mosley) is a powerhouse R&B artist out of Indianapolis. Signed to RockStar / ICO / Warner Bros. Listen to the new single “One Shot.”",
  keywords: [
    "Mike the Chosen",
    "Big Mike Mosley",
    "R&B artist",
    "Indianapolis R&B",
    "One Shot",
    "soul music",
  ],
  openGraph: {
    title: "Mike the Chosen — R&B Artist",
    description:
      "Powerhouse R&B out of Indianapolis. Signed to RockStar / ICO / Warner Bros. Listen now.",
    type: "website",
    images: ["/images/portrait-neon.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike the Chosen — R&B Artist",
    description:
      "Powerhouse R&B out of Indianapolis. Listen to the new single “One Shot.”",
    images: ["/images/portrait-neon.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
