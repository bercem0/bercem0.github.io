"use client";

import React from "react";
import { is } from "zod/locales";

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
    isLogo: true,
    date: "02/2026 - 04/2026",
  },
  {
    title: "RouteToHBO",
    desc: "Voor dit project heb ik samen met een klasgenoot en een student uit de richtingen Software Development (SD) en IT samengewerkt. We hebben met Canva AI een interactieve website ontwikkeld. De game helpt mbo-studenten bij het kiezen van een passende HBO-opleiding op basis van hun interesses en vaardigheden.Tijdens dit project heb ik onderzoek gedaan, vragen gemaakt en samengewerkt in het team.",
    tags: ["HTML", "CSS", "JavaScript", "Canva-AI"],
    img: "/images/route-to-hbo.png",
    link: "https://sharjeel-ecom.my.canva.site/c4ktrqjcpk73txzd",
    date: "02/2026 - 04/2026",
  },
  {
    title: "CV - Zekiye Bercem Yildirim",
    desc: "Persoonlijk CV project met een focus op design, performance en duidelijke presentatie van mijn technische vaardigheden en projecten.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VSCode"],
    img: "/images/cv.png",
    link: "https://github.com/bercem0/CV_Bercem_Yildirim",
    isLogo: true,
    date: "02/2026 - 04/2026",
  },
  {
    title: "SDG Dashboard",
    desc: "In dit groepsproject hebben we een interactief dashboard gebouwd dat de Sustainable Development Goals (SDG’s) van de Verenigde Naties visualiseert. Het doel was om ingewikkelde data simpel en duidelijk weer te geven met grafieken.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js", "MySQL", "Prisma", "VSCode", "PHPMyAdmin"],
    img: "/images/sdg_dashboard.webp",
    link: "https://github.com/bercem0/sdg-dashboard",
    date: "11/2025 - 01/2026"
  },
  {
    title: "Budget Buddy",
    desc: "Webapplicatie voor bijhouden van inkomsten en uitgaven, gebouwd in teamverband.",
    tags: ["Symfony", "PHP", "JavaScript", "SQL", "PHPStorm", "PHPMyAdmin"],
    img: "/images/budget-buddy.webp",
    link: "https://github.com/bercem0/budget-buddy",
    date: "09/2025 - 11/2025",
  },
  {
    title: "B&T Flowers",
    desc: "Teamproject waarbij ik de frontend en backend van een volledige bloemenverkoopwebsite heb ontwikkeld.",
    tags: ["PHP", "JavaScript", "HTML", "Tailwind", "PHPStorm", "PHPMyAdmin"],
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
    tags: ["HTML", "CSS", "JavaScript", "VSCode"],
    img: "/images/tic-tac-toe-spel.jpg",
    link: "https://github.com/bercem0/build-a-game-portal",
    date: "11/2024 - 01/2025",
  },
  {
    title: "Hoger Lager",
    desc: "Spelers raden of een getal hoger of lager is dan het vorige.",
    tags: ["HTML", "CSS", "JavaScript", "VSCode"],
    img: "/images/hoger-lager-spel.jpg",
    link: "https://github.com/bercem0/hoger-lager-spel",
    date: "09/2024 - 11/2024",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative max-w-5xl mx-auto px-6 py-24 text-white min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Projecten
        </h1>
        <div className="w-16 h-[2px] bg-white/20 mx-auto mt-6" />
        <p className="mt-6 text-zinc-400 max-w-xl mx-auto">
          Een volledige selectie van mijn ontwikkelprojecten waarin ik werk met moderne technologieën en schaalbare oplossingen.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md hover:border-white/20 transition-all"
          >
            {/* Image */}
            <div className="w-full md:w-44 h-44 flex items-center justify-center bg-zinc-950 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={p.img}
                alt={p.title}
                className={`w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105 ${
                  p.isLogo ? "invert brightness-200 contrast-200" : ""
                }`}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center flex-1">
              <span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-semibold">
                {p.date}
              </span>

              <h2 className="text-2xl font-bold mt-2 text-white">
                {p.title}
              </h2>

              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                className="mt-5 inline-flex w-fit px-5 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition"
              >
                Bekijk Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
