"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projecten" },
  { href: "#academic", label: "Onderwijs" },
  { href: "#skills", label: "Vaardigheden" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120207]/70 backdrop-blur-md border border-[#b0123a]/20">

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm rounded-full transition
                text-[#a97b86]
                hover:text-white hover:bg-[#b0123a]/20 hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl ml-2"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#120207]/95 backdrop-blur-xl border-l border-[#b0123a]/20 z-50 p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-white font-bold">Menu</h2>
              <button onClick={() => setOpen(false)} className="text-white text-2xl">
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[#a97b86] text-lg px-3 py-2 rounded-lg
                  transition hover:bg-[#b0123a]/20 hover:text-white hover:translate-x-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}