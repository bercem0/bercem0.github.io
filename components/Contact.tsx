import React from "react";

export default function Contact() {
  return (
    <div className="relative py-24 px-6 max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-[#e6c2c9]">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#120207] via-[#0f0509] to-[#0b0205]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b0123a]/20 blur-[110px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-[#7a1028]/20 blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="text-center mb-24">
         <h1 className="relative inline-block text-4xl md:text-7xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white via-[#ff6b8a] to-[#b0123a] bg-clip-text text-transparent">
            Contact
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

        <br></br>

        <p className="text-[#a97b86] text-lg max-w-xl leading-relaxed mx-auto">
          Geïnteresseerd in samenwerking of heb je een vraag? Neem gerust contact op.
        </p>

        <br></br>

        <div className="inline-block px-5 py-2 bg-[#2a0610]/70 border border-[#b0123a]/20 rounded-full backdrop-blur-md">
          <p className="text-[#e6c2c9] text-sm font-medium tracking-wide">
            🚀 Beschikbaar voor stage: Sept 2026 - April 2027
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

        {/* CARD */}
        {[
          {
            title: "School Email",
            value: "302961230@student.rocmondriaan.nl",
            link: "mailto:302961230@student.rocmondriaan.nl",
            icon: "📧",
          },
          {
            title: "Email",
            value: "bercem.yildirimm@gmail.com",
            link: "mailto:bercem.yildirimm@gmail.com",
            icon: "📧",
          },
          {
            title: "LinkedIn",
            value: "Bercem Yildirim",
            link: "https://www.linkedin.com/in/bercem-yildirim-7767b0334/",
            icon: "🔗",
          },
          {
            title: "GitHub",
            value: "bercem0",
            link: "https://github.com/bercem0",
            icon: "💻",
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            className="group relative p-8 rounded-3xl
              bg-gradient-to-b from-[#2a0610]/80 to-[#1a0308]/60
              border border-[#b0123a]/20
              backdrop-blur-xl overflow-hidden
              text-center
              transition-all duration-500
              hover:-translate-y-2 hover:scale-[1.03]
              hover:border-[#ff4d6d]/50
              hover:shadow-[0_25px_80px_rgba(176,18,58,0.25)]"
          >

            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#b0123a]/20 blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#ff4d6d]/20 blur-[80px]" />
            </div>

            {/* ICON */}
            <div className="mb-5 text-4xl transition-transform duration-500 group-hover:scale-125">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-[#a97b86] text-xs font-bold uppercase tracking-[0.25em] mb-3">
              {item.title}
            </h3>

            {/* VALUE */}
            <p className="text-white font-medium text-sm break-all group-hover:text-[#ffccd5] transition">
              {item.value}
            </p>

            {/* underline glow */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff4d6d] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </a>
        ))}

      </div>

      {/* FOOTER TEXT */}
      <div className="mt-20 text-center">
        <p className="text-[#a97b86] text-sm max-w-sm italic">
          Altijd open voor nieuwe uitdagingen en interessante samenwerkingen.
        </p>
      </div>
    </div>
  );
}