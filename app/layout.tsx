import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projecten" },
  { href: "/academic", label: "Onderwijs" },
  { href: "/vaardigheden", label: "Vaardigheden" },
  { href: "/contact", label: "Contact" },
];

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
      <body className="min-h-screen flex flex-col bg-black text-white">

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        {/* NAVBAR */}
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
          <nav className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-full 
                          bg-white/5 backdrop-blur-xl border border-white/10 
                          shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-xs sm:text-sm rounded-full text-zinc-300
                           hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-grow pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {children}
          </div>
        </main>

        <footer className="border-t border-white/10 bg-black">
          <div className="max-w-6xl mx-auto px-6 py-10 text-center">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Zekiye Bercem Yildirim
            </p>
            <p className="text-xs text-zinc-600 tracking-widest uppercase mt-2">
              Built with Next.js • Tailwind CSS
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}