"use client";

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-white bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* PROFILE IMAGE */}
      <div className="mb-10 relative">
        <div className="absolute -inset-2 bg-white/10 blur-2xl rounded-full" />
        <img
          src="/images/profile-foto.png"
          alt="Profile"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-white/10 shadow-xl"
        />
      </div>

      {/* NAME */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Zekiye Bercem Yildirim
          <span className="text-white/30">.</span>
        </h1>

        <div className="mt-4 w-20 h-[2px] bg-white/20 mx-auto" />
      </div>

      {/* ROLE */}
      <p className="mt-10 text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-500 font-semibold">
        Software Developer Student
      </p>

      {/* DESCRIPTION */}
      <p className="mt-6 text-center max-w-xl text-zinc-400 text-lg leading-relaxed">
      Hallo, mijn naam is Bercem Yildirim en ik ben een tweedejaars student Software Developer aan ROC Mondriaan. Mijn passie ligt bij technologie en het creëren van innovatieve oplossingen. 
      Ik ben een leergierige en nieuwsgierige persoon die graag nieuwe vaardigheden ontwikkelt en uitdagingen aangaat.

      Naast mijn studie werk ik aan persoonlijke projecten om mijn kennis te verdiepen en mijn creativiteit te tonen. 
      In mijn vrije tijd volg ik graag tech-gerelateerde ontwikkelingen en trends binnen de IT-wereld.

      Mijn droom is om een succesvolle carrière op te bouwen als softwareontwikkelaar en bij te dragen aan projecten die een positieve impact hebben.      
      </p>

      {/* MOTIVATION CARD */}
      <div className="mt-14 relative max-w-2xl w-full">

        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-white/5 to-blue-500/20 blur-2xl rounded-3xl" />

        {/* Card */}
        <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl">

          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4">
            Motivatie
          </h2>

          <p className="text-zinc-300 text-base leading-relaxed">
            Technologie fascineert mij omdat het ons leven eenvoudiger en slimmer maakt. 
            Daarom wil ik actief bijdragen aan de IT-wereld.
          </p>

          <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
            Mijn motivatie komt voort uit mijn ambitie om innovatieve en gebruiksvriendelijke oplossingen te bouwen 
            die echte problemen aanpakken. Voor mij gaat softwareontwikkeling niet alleen over code, maar over creativiteit en impact.
          </p>

          <div className="mt-6 w-16 h-[2px] bg-white/20" />

          <p className="mt-4 text-xs text-zinc-500 italic">
            “Dit is slechts het begin van mijn reis in technologie.”
          </p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-12 flex flex-col sm:flex-row gap-5">
        <a
          href="/projects"
          className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          Bekijk mijn werk →
        </a>

        <a
          href="/contact"
          className="px-8 py-4 rounded-2xl border border-white/10 bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-all hover:-translate-y-1"
        >
          Neem contact op
        </a>
      </div>

    </div>
  );
}