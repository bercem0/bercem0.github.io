"use client";

import React from 'react';

export default function ContactPage() {
  return (
    <div className="relative py-24 px-6 max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-6xl md:text-7xl font-black tracking-tight uppercase">
          CONTACT
        </h1>

        <div className="w-16 h-[2px] bg-white/30 mx-auto" />

        <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mx-auto">
          Geïnteresseerd in samenwerking of heb je een vraag? Neem gerust contact op.
        </p>

        <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full">
          <p className="text-zinc-300 text-sm font-medium tracking-wide">
            🚀 Beschikbaar voor stage: Sept 2026 - April 2027
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <a
          href="mailto:302961230@student.rocmondriaan.nl"
          className="group relative p-8 bg-zinc-900 border border-white/10 rounded-3xl hover:bg-zinc-800 transition-all duration-300 text-center"
        >
          <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">📧</div>
          <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">School Email</h3>
          <p className="text-white font-medium text-sm break-all">302961230@student.rocmondriaan.nl</p>
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform" />
        </a>

        <a
          href="mailto:bercem.yildirimm@gmail.com"
          className="group relative p-8 bg-zinc-900 border border-white/10 rounded-3xl hover:bg-zinc-800 transition-all duration-300 text-center"
        >
          <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">📧</div>
          <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Email</h3>
          <p className="text-white font-medium text-sm break-all">bercem.yildirimm@gmail.com</p>
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform" />
        </a>

        <a
          href="https://www.linkedin.com/in/bercem-yildirim-7767b0334/"
          target="_blank"
          className="group relative p-8 bg-zinc-900 border border-white/10 rounded-3xl hover:bg-zinc-800 transition-all duration-300 text-center"
        >
          <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">🔗</div>
          <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">LinkedIn</h3>
          <p className="text-white font-medium text-sm">Bercem Yildirim</p>
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform" />
        </a>

        <a
          href="https://github.com/bercem0"
          target="_blank"
          className="group relative p-8 bg-zinc-900 border border-white/10 rounded-3xl hover:bg-zinc-800 transition-all duration-300 text-center"
        >
          <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">💻</div>
          <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">GitHub</h3>
          <p className="text-white font-medium text-sm">bercemO</p>
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform" />
        </a>

      </div>

      <div className="mt-20 text-center">
        <p className="text-zinc-500 text-sm max-w-sm italic">
          Altijd open voor nieuwe uitdagingen en interessante samenwerkingen.
        </p>
      </div>
    </div>
  );
}
