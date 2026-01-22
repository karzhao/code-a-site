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
  description: "Code-A-Site 2026 - Register Today",
  keywords: ["Code-A-Site", "hackathon", "Stony Brook", "student event", "coding", "SBU"],
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
