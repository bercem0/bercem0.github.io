"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "WorkSpace",
    desc: "Met mijn team een projectplanning platform ontwikkeld in Next.js. Bevat een scrumboard, agenda en een dashboard voor sprintoverzicht en voortgang.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Prisma",
      "VSCode",
      "PHPMyAdmin",
    ],
    img: "/images/logo.png",
    link: "https://github.com/bercem0/WorkSpace",
    demo: "https://bercem-work-space-gamma.vercel.app",
    isLogo: true,
    date: "02/2026 - 04/2026",
  },
  {
    title: "RouteToHBO",
    desc: "Voor dit project heb ik samen met een klasgenoot en een student uit de richtingen Software Development (SD) en IT samengewerkt. We hebben met Canva AI een interactieve website ontwikkeld. De game helpt mbo-studenten bij het kiezen van een passende HBO-opleiding op basis van hun interesses en vaardigheden.Tijdens dit project heb ik onderzoek gedaan, vragen gemaakt en samengewerkt in het team.",
    tags: ["HTML", "CSS", "JavaScript", "Canva-AI"],
    img: "/images/route-to-hbo.png",
    link: "https://sharjeel-ecom.my.canva.site/c4ktrqjcpk73txzd",
    demo: "https://sharjeel-ecom.my.canva.site/c4ktrqjcpk73txzd",
    date: "02/2026 - 04/2026",
  },
  {
    title: "CV - Portfolio",
    desc: "Persoonlijk CV project",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VSCode"],
    img: "/images/cv.png",
    link: "https://github.com/bercem0/CV_Bercem_Yildirim",
    demo: "https://cv-bercem-yildirim.vercel.app",
    isLogo: true,
    date: "02/2026 - 04/2026",
  },
  {
    title: "SDG Dashboard",
    desc: "In dit groepsproject hebben we een interactief dashboard gebouwd dat de Sustainable Development Goals (SDG’s) van de Verenigde Naties visualiseert. Het doel was om ingewikkelde data simpel en duidelijk weer te geven met grafieken.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "MySQL",
      "Prisma",
      "VSCode",
      "PHPMyAdmin",
    ],
    img: "/images/sdg.png",
    link: "https://github.com/bercem0/sdg-dashboard",
    demo: "https://bercem0-sdg-dashboard-iiiq-lk5sehm5r-bercem0.vercel.app",
    date: "11/2025 - 01/2026",
  },
  {
    title: "Budget Buddy",
    desc: "Webapplicatie voor bijhouden van inkomsten en uitgaven, gebouwd in teamverband.",
    tags: ["Symfony", "PHP", "JavaScript", "SQL", "PHPStorm", "PHPMyAdmin"],
    img: "/images/budgetbuddy.jpg",
    link: "https://github.com/bercem0/budget-buddy",
    date: "09/2025 - 11/2025",
  },
  {
    title: "B&T Flowers",
    desc: "Teamproject waarbij ik de frontend en backend van een volledige bloemenverkoopwebsite heb ontwikkeld.",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "PHPStorm", "PHPMyAdmin"],
    img: "/images/b&t_flowers.png",
    link: "https://github.com/bercem0/bt-flowers-review-experience",
    date: "01/2025 - 06/2025",
  },
  {
    title: "The Maze",
    desc: "Java-doolhofspel met obstakels en verzamelobjecten.",
    tags: ["Java", "Greenfoot"],
    img: "/images/the_maze.png",
    link: "https://github.com/bercem0/the-maze-java-game",
    date: "01/2025 - 06/2025",
  },
  {
    title: "Roodkapje",
    desc: "Zelfstandig interactieve game gebaseerd op het verhaal van Roodkapje.",
    tags: ["Java", "Greenfoot"],
    img: "/images/roodkapje.png",
    link: "https://github.com/bercem0/roodkapje-java-game",
    date: "01/2025 - 06/2025",
  },
  {
    title: "Boter, Kaas en Eieren",
    desc: "Klassiek tic-tac-toe spel. Frontend en logica ontwikkeld met JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "/images/tic-tac-toe-spel.jpg",
    link: "https://github.com/bercem0/build-a-game-portal",
    demo: "https://build-a-game-portal.vercel.app",
    date: "11/2024 - 01/2025",
  },
  {
    title: "Hoger Lager",
    desc: "Spelers raden of een getal hoger of lager is dan het vorige.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "/images/hoger-lager-spel.jpg",
    link: "https://github.com/bercem0/hoger-lager-spel",
    demo: "https://hoger-lager-spel-snowy.vercel.app",
    date: "09/2024 - 11/2024",
  },
];

export default function Projects() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24 text-[#e6c2c9] min-h-screen">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#120207] via-[#0f0509] to-[#0b0205]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b0123a]/20 blur-[110px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-[#7a1028]/20 blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        {/* title */}
        <h1 className="relative inline-block text-4xl md:text-7xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white via-[#ff6b8a] to-[#b0123a] bg-clip-text text-transparent">
            Projecten
          </span>

          {/* underline FIXED */}
          <span
            className="absolute left-0 -bottom-3 w-full h-[2px] 
                           bg-gradient-to-r from-transparent via-[#b0123a] to-transparent 
                           blur-[0.5px]"
          />
        </h1>

        {/* accent dot */}
        <span className="text-[#ff6b8a] text-5xl md:text-7xl leading-none">
          .
        </span>

        {/* line */}
        <div className="w-24 h-[2px] bg-[#b0123a]/50 mx-auto mt-6" />

        {/* subtitle */}
        <p className="mt-6 text-[#a97b86] max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Mijn ontwikkelprojecten met moderne technologieën en schaalbare
          oplossingen.
        </p>
      </motion.div>

      {/* LIST */}
      <div className="space-y-14">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
            }}
            className="group relative flex flex-col md:flex-row gap-10 p-8 rounded-3xl
                       bg-[#2a0610]/60 backdrop-blur-xl
                       border border-[#b0123a]/10
                       hover:-translate-y-2 hover:border-[#b0123a]/40
                       hover:shadow-[0_35px_90px_rgba(176,18,58,0.25)]
                       transition-all duration-500"
          >
            {/* IMAGE */}
            <div
              className="w-full md:w-60 h-60 flex items-center justify-center
                            rounded-2xl overflow-hidden
                            bg-[#120207] border border-[#b0123a]/10"
            >
              <img
                src={p.img}
                alt={p.title}
                className={`w-full h-full object-contain p-5
                  transition-transform duration-700
                  group-hover:scale-110 ${
                    p.isLogo ? "invert brightness-200 contrast-200" : ""
                  }`}
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center flex-1">
              <span className="text-xs tracking-[0.35em] uppercase text-[#a97b86]">
                {p.date}
              </span>

              <h3 className="text-1xl md:text-4xl font-bold mt-3 text-white">
                {p.title}
              </h3>

              <p className="text-[#d9a3ad] text-sm mt-4 leading-relaxed max-w-2xl">
                {p.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[11px] uppercase tracking-wider
                               rounded-full border border-[#b0123a]/20
                               bg-[#120207]/60 text-[#a97b86]
                               hover:text-white hover:border-[#b0123a]/50
                               transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.link}
                  target="_blank"
                  className="px-6 py-2 rounded-xl text-sm font-semibold
                             bg-gradient-to-r from-[#b0123a] to-[#7a1028]
                             text-white shadow-lg
                             hover:scale-105 transition"
                >
                  Bekijk Project →
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    className="px-6 py-2 rounded-xl text-sm font-semibold
                               border border-[#b0123a]/40
                               bg-[#120207]/60 text-[#e6c2c9]
                               hover:bg-[#3a0712] hover:scale-105 transition"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
