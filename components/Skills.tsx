"use client";

import React from "react";
import { FaReact, FaJava, FaPhp, FaGithub, FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiMysql,
  SiPrisma,
  SiChartdotjs,
  SiLinux,
  SiJetbrains,
  SiJson,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "HTML / CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: ["PHP (Symfony)", "MySQL", "Prisma"],
  },
  {
    category: "Tools & Workflow",
    items: [
      "Chart.js",
      "Linux",
      "GitHub",
      "Visual Studio Code",
      "JetBrains Toolbox",
      "Apache NetBeans",
      "Scrum",
      "JSON",
      "AI (les)",
    ],
  },
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "PHP"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  React: <FaReact />,
  "HTML / CSS": <FaCode />,
  JavaScript: <SiJavascript />,
  Bootstrap: <SiBootstrap />,

  "PHP (Symfony)": <FaPhp />,
  PHP: <FaPhp />,
  MySQL: <SiMysql />,
  Prisma: <SiPrisma />,

  "Chart.js": <SiChartdotjs />,
  Linux: <SiLinux />,
  GitHub: <FaGithub />,

  "Visual Studio Code": <FaCode />,
  "JetBrains Toolbox": <SiJetbrains />,
  "Apache NetBeans": <FaJava />,
  Scrum: <FaCode />,
  JSON: <SiJson />,
  "AI (les)": <FaCode />,

  Java: <FaJava />,
};

export default function Skills() {
  return (
    <div className="relative max-w-5xl mx-auto px-6 py-24 text-[#e6c2c9] min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0408] via-[#120207] to-[#0b0205]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b0123a]/20 blur-[90px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-[#7a1028]/20 blur-[100px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="text-center mb-20">
        <h1 className="relative inline-block text-4xl md:text-7xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white via-[#ff6b8a] to-[#b0123a] bg-clip-text text-transparent">
            Vaardigheden
          </span>

          {/* underline FIXED */}
          <span className="absolute left-0 -bottom-3 w-full h-[2px] 
                           bg-gradient-to-r from-transparent via-[#b0123a] to-transparent 
                           blur-[0.5px]" />
        </h1>

        {/* accent dot */}
        <span className="text-[#ff6b8a] text-5xl md:text-7xl leading-none">
          .
        </span>

        <div className="w-20 h-[2px] bg-[#b0123a]/60 mx-auto mt-6" />

        <p className="mt-6 text-[#a97b86] max-w-xl mx-auto">
          Een overzicht van mijn technische vaardigheden en tools.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((s, i) => (
          <div
            key={i}
            className="group relative p-7 rounded-3xl 
                       bg-gradient-to-b from-[#2a0610]/80 to-[#1a0308]/60
                       border border-[#b0123a]/20
                       backdrop-blur-xl overflow-hidden
                       transition-all duration-500
                       hover:-translate-y-2 hover:scale-[1.02]
                       hover:border-[#ff4d6d]/50
                       hover:shadow-[0_25px_80px_rgba(176,18,58,0.25)]"
          >

            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#b0123a]/20 blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#ff4d6d]/20 blur-[80px]" />
            </div>

            {/* title */}
            <h2 className="text-xl font-bold mb-6 text-white tracking-wide">
              {s.category}
            </h2>

            {/* items */}
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="group/item flex items-center gap-2 text-xs uppercase tracking-wider
                             px-3 py-1 rounded-full
                             bg-[#120207]/80 border border-[#b0123a]/20
                             text-[#a97b86]
                             backdrop-blur-md
                             transition-all duration-300
                             hover:border-[#ff4d6d]/50 hover:text-white
                             hover:scale-[1.08] hover:bg-[#2a0610]"
                >
                  <span
                    className="text-base text-[#b0123a]/80 
                               group-hover/item:text-[#ff6b8a] 
                               group-hover/item:scale-125
                               transition duration-300"
                  >
                    {iconMap[item]}
                  </span>

                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}