import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import SiteBackground from "@/components/SiteBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvel's Space",
  description:
    "A digital world where Marvel the Explorer, guided by faith-based curiosity, shares discoveries, journeys, systems, reflections and creative growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-black text-white light:bg-white light:text-black">
        <SiteBackground />

        <div className="relative z-20">
          <Navbar />
          {children}
        </div>

        <div className="relative z-30">
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}