import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import localFont from "next/font/local";

const bungee = localFont({
  src: [{ path: "../../public/fonts/BungeeInline-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-bungee",
});

const tilt = localFont({
  src: [{ path: "../../public/fonts/TiltPrism-Regular-VariableFont.ttf", weight: "400", style: "normal" }],
  variable: "--font-tilt",
});


export const metadata: Metadata = {
  title: "Code-A-Site 2026 | Stony Brook University",
  description: "Join Code-A-Site 2026 at Stony Brook University this April for a student-led hackathon packed with projects, workshops, and community.",
  keywords: ["Code-A-Site", "hackathon", "Stony Brook", "student event", "coding", "SBU"],
  metadataBase: new URL("https://code-a-site.vercel.app"),
  openGraph: {
    title: "Code-A-Site 2026 | Stony Brook University",
    description: "Building, learning, and shipping at Code-A-Site 2026.",
    type: "website",
    url: "https://code-a-site.vercel.app",
    siteName: "Code-A-Site",
    images: [
      {
        url: "https://code-a-site.vercel.app/bg/hero-bg.svg",
        alt: "Code-A-Site 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code-A-Site 2026 | Stony Brook University",
    description: "Building, learning, and shipping at Code-A-Site 2026.",
    images: ["https://code-a-site.vercel.app/bg/hero-bg.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bungee.variable} ${tilt.variable}`}>
        {children}
      </body>
    </html>
  );
}
