export default function Hero() {
  return (
<div className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-[#e6c2c9] overflow-hidden">
      {/* Background Glow (LIGHTWEIGHT BORDEAUX) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7a1028]/30 blur-[80px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#b0123a]/20 blur-[80px] rounded-full" />
      </div>

      {/* PROFILE IMAGE */}
      <div className="mb-10 relative">
        <div className="absolute -inset-2 bg-[#b0123a]/20 blur-xl rounded-full" />
        <img
          src="/images/profile-foto.png"
          alt="Profile"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-[#b0123a]/40 shadow-xl"
        />
      </div>

      {/* NAME */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Zekiye Bercem Yildirim
          <span className="text-[#ff6b8a]">.</span>
        </h1>

        <div className="mt-4 w-20 h-[2px] bg-[#b0123a]/50 mx-auto" />
      </div>

      {/* ROLE */}
      <p className="mt-10 text-xs md:text-sm uppercase tracking-[0.3em] text-[#d9a3ad] font-semibold">
        Software Developer Student
      </p>

      {/* DESCRIPTION */}
      <p className="mt-6 text-center max-w-xl text-[#e6c2c9] text-lg leading-relaxed">
        Hallo, mijn naam is Bercem Yildirim en ik ben een tweedejaars student Software Developer aan ROC Mondriaan. Mijn passie ligt bij technologie en het creëren van innovatieve oplossingen. 
        Ik ben een leergierige en nieuwsgierige persoon die graag nieuwe vaardigheden ontwikkelt en uitdagingen aangaat.

        Naast mijn studie werk ik aan persoonlijke projecten om mijn kennis te verdiepen en mijn creativiteit te tonen. 
        In mijn vrije tijd volg ik graag tech-gerelateerde ontwikkelingen en trends binnen de IT-wereld.

        Mijn droom is om een succesvolle carrière op te bouwen als softwareontwikkelaar en bij te dragen aan projecten die een positieve impact hebben.
      </p>

      {/* MOTIVATION CARD */}
      <div className="mt-14 relative max-w-2xl w-full">

        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#b0123a]/30 via-[#3a0712]/40 to-[#b0123a]/30 blur-xl rounded-3xl" />

        {/* Card */}
        <div className="relative p-8 md:p-10 rounded-3xl border border-[#b0123a]/30 bg-[#2a0610]/70">

          <h2 className="text-xs uppercase tracking-[0.3em] text-[#d9a3ad] mb-4">
            Motivatie
          </h2>

          <p className="text-[#e6c2c9] text-base leading-relaxed">
            Technologie fascineert mij omdat het ons leven eenvoudiger en slimmer maakt. 
            Daarom wil ik actief bijdragen aan de IT-wereld.
          </p>

          <p className="mt-4 text-[#cfa3ad] text-sm leading-relaxed">
            Mijn motivatie komt voort uit mijn ambitie om innovatieve en gebruiksvriendelijke oplossingen te bouwen 
            die echte problemen aanpakken. Voor mij gaat softwareontwikkeling niet alleen over code, maar over creativiteit en impact.
          </p>

          <div className="mt-6 w-16 h-[2px] bg-[#b0123a]/40" />

          <p className="mt-4 text-xs text-[#a97b86] italic">
            “Dit is slechts het begin van mijn reis in technologie.”
          </p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-12 flex flex-col sm:flex-row gap-5">
        <a
          href="#projects"
          className="px-8 py-4 rounded-2xl bg-[#b0123a] text-white font-semibold hover:bg-[#c41645] transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          Bekijk mijn werk →
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-2xl border border-[#b0123a]/40 bg-[#2a0610] text-white font-semibold hover:bg-[#3a0712] transition-all hover:-translate-y-1"
        >
          Neem contact op
        </a>
      </div>

    </div>
  );
}