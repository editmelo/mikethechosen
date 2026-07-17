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
    "Mike the Chosen (Michael “Big Mike” Mosley) is a powerhouse R&B artist out of Indianapolis. Distributed by Rocstar World A/D/A Warner Music. Watch the new single “Back to the Wind.”",
  keywords: [
    "Mike the Chosen",
    "Big Mike Mosley",
    "R&B artist",
    "Indianapolis R&B",
    "Back to the Wind",
    "Big Tone",
    "soul music",
  ],
  openGraph: {
    title: "Mike the Chosen — R&B Artist",
    description:
      "Powerhouse R&B out of Indianapolis. Distributed by Rocstar World A/D/A Warner Music. Listen now.",
    type: "website",
    images: ["/images/portrait-neon.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike the Chosen — R&B Artist",
    description:
      "Powerhouse R&B out of Indianapolis. Watch the new single “Back to the Wind.”",
    images: ["/images/portrait-neon.jpg"],
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
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Apply the saved theme before paint so there's no flash of the
            default palette for returning visitors who chose B&W. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('mtc-theme')==='bw'){document.documentElement.classList.add('theme-bw')}}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
