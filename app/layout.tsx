import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alessioprosperi.it"),
  title: "Alessio Prosperi | Senior Full Stack Engineer & SaaS Builder",
  description: "Portfolio di Alessio Prosperi. Sviluppatore Senior specializzato in Next.js, Python FastAPI e Automazione AI. Creatore di KONTA.",
  openGraph: {
    title: "Alessio Prosperi | Senior Full Stack Engineer & SaaS Builder",
    description: "Portfolio di Alessio Prosperi. Sviluppatore Senior specializzato in Next.js, Python FastAPI e Automazione AI.",
    url: "https://www.alessioprosperi.it",
    siteName: "Alessio Prosperi Portfolio",
    images: [
      {
        url: "/avatar-real.png",
        width: 800,
        height: 800,
        alt: "Alessio Prosperi Profile",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessio Prosperi | Senior Full Stack Engineer & SaaS Builder",
    description: "Portfolio di Alessio Prosperi. Sviluppatore Senior specializzato in Next.js, Python FastAPI e Automazione AI.",
    images: ["/avatar-real.png"],
  },
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
