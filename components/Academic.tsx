"use client";

import { useState } from "react";
import { FileText, X } from "lucide-react";

export default function Academic() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const education = [
    {
      school: "ROC Mondriaan",
      degree: "Software Developer (MBO niveau 4)",
      date: "2024 - Heden",
      image: "/images/roc-mondriaan-logo.png",
      details:
        "Focus op full-stack development, databases en softwareontwikkeling.",
    },
    {
      school: "ROC Mondriaan - ISK",
      degree: "Taalopleiding (Nederlands)",
      date: "2022 - 2024",
      image: "/images/roc-mondriaan-logo.png",
      link: "/images/certificaat.png",
      details: "Intensieve Nederlandse taalverwerving en integratie.",
    },
    {
      school: "Mehmet Salih Yasar Koleji",
      degree: "HAVO - Diploma",
      date: "2016 - 2020",
      image: "/images/images.png",
      link: "/images/Advies ROC afgeronde opleiding.pdf",
      details: "Middelbare school afgerond (HAVO-niveau), Turkije.",
    },
  ];

  const isPdf = (url: string) => url.toLowerCase().includes(".pdf");

  return (
    <div className="relative max-w-5xl mx-auto px-6 py-24 text-[#e6c2c9] min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0408] via-[#120207] to-[#0b0205]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b0123a]/20 blur-[90px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-[#7a1028]/20 blur-[100px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="text-center mb-24">
         <h1 className="relative inline-block text-4xl md:text-7xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white via-[#ff6b8a] to-[#b0123a] bg-clip-text text-transparent">
            Onderwijs
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
          Mijn academische achtergrond en ontwikkeling door de jaren heen.
        </p>
      </div>

      {/* CARDS */}
      <div className="space-y-10">
        {education.map((edu, i) => (
          <div
            key={i}
            className="group relative flex flex-col md:flex-row gap-8 p-8 rounded-3xl
                       bg-gradient-to-b from-[#2a0610]/80 to-[#1a0308]/60
                       border border-[#b0123a]/20
                       backdrop-blur-xl overflow-hidden
                       transition-all duration-500
                       hover:-translate-y-2 hover:scale-[1.01]
                       hover:border-[#ff4d6d]/50
                       hover:shadow-[0_25px_80px_rgba(176,18,58,0.25)]"
          >

            {/* glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#b0123a]/20 blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#ff4d6d]/20 blur-[80px]" />
            </div>

            {/* IMAGE */}
            <div className="w-44 h-44 bg-white rounded-2xl overflow-hidden flex items-center justify-center shadow-md relative z-10">
              <img
                src={edu.image}
                alt={edu.school}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1 relative z-10">

              <p className="text-xs text-[#a97b86] uppercase tracking-widest">
                {edu.date}
              </p>

              <h2 className="text-2xl font-bold text-white mt-2">
                {edu.school}
              </h2>

              <p className="text-[#e6c2c9] mt-1">
                {edu.degree}
              </p>

              <p className="text-[#a97b86] mt-3 text-sm">
                {edu.details}
              </p>

              {/* BUTTON */}
              {edu.link && (
                <button
                  onClick={() => setPdfUrl(edu.link)}
                  className="mt-6 flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-semibold
                             bg-gradient-to-r from-[#b0123a] to-[#7a1028]
                             text-white shadow-lg
                             hover:scale-105 hover:shadow-[0_10px_30px_rgba(176,18,58,0.4)]
                             transition"
                >
                  <FileText size={18} />
                  Bekijk Document
                </button>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {pdfUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="relative w-[90%] max-w-4xl h-[80%] bg-[#120207] rounded-2xl overflow-hidden border border-[#b0123a]/30">

            <button
              onClick={() => setPdfUrl(null)}
              className="absolute top-3 right-3 bg-[#b0123a]/20 p-2 rounded-full text-white hover:bg-[#b0123a]/40 transition"
            >
              <X size={18} />
            </button>

            {isPdf(pdfUrl) ? (
              <iframe src={pdfUrl} className="w-full h-full" />
            ) : (
              <img src={pdfUrl} className="w-full h-full object-contain" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}