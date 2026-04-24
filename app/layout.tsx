import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Particles from "@/components/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bercem | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen flex flex-col overflow-x-hidden">

        {/* BACKGROUND */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0408] via-[#120207] to-[#0b0205]" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b0123a]/20 blur-[80px] rounded-full" />
          <div className="absolute bottom-[5%] right-[-10%] w-[35%] h-[35%] bg-[#7a1028]/20 blur-[90px] rounded-full" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <Particles />

        {/* NAV */}
        <Navbar />

        <main className="relative z-10 flex-grow pt-36 pb-24">
          <div className="max-w-6xl mx-auto px-6">{children}</div>
        </main>

        <footer className="relative z-20 border-t border-[#b0123a]/20 bg-[#120207] text-center py-10">
          <p className="text-sm text-[#e6c2c9]">
            © {new Date().getFullYear()} Portfolio van Zekiye Bercem Yildirim
          </p>
        </footer>

        <ScrollToTop />
      </body>
    </html>
  );
}