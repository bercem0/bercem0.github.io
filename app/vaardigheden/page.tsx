"use client";

import {
  FaReact,
  FaJava,
  FaPhp,
  FaGithub,
  FaCode,
} from "react-icons/fa";

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
  // Frontend
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  React: <FaReact />,
  "HTML / CSS": <FaCode />,
  JavaScript: <SiJavascript />,
  Bootstrap: <SiBootstrap />,

  // Backend
  "PHP (Symfony)": <FaPhp />,
  PHP: <FaPhp />,
  MySQL: <SiMysql />,
  Prisma: <SiPrisma />,

  // Tools
  "Chart.js": <SiChartdotjs />,
  Linux: <SiLinux />,
  GitHub: <FaGithub />,

  "Visual Studio Code": <FaCode />,
  "JetBrains Toolbox": <SiJetbrains />,
  "Apache NetBeans": <FaJava />,
  Scrum: <FaCode />,
  JSON: <SiJson />,
  "AI (les)": <FaCode />,

  // Languages
  Java: <FaJava />,
};

export default function VaardighedenPage() {
  return (
    <div className="relative max-w-5xl mx-auto px-6 py-24 text-white min-h-screen">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Vaardigheden
        </h1>
        <div className="w-20 h-[2px] bg-white/20 mx-auto mt-6" />
        <p className="mt-6 text-zinc-400 max-w-xl mx-auto">
          Een overzicht van mijn technische vaardigheden en tools.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((s, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-xl font-bold mb-5 text-white">
              {s.category}
            </h2>

            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="group flex items-center gap-2 text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-white/30 transition-all duration-300 hover:scale-[1.04]"
                >
                  <span className="text-base text-white/70 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition">
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