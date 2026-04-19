"use client";

export default function AcademicPage() {
  const education = [
    {
      school: "ROC Mondriaan",
      degree: "Software Developer (MBO niveau 4)",
      date: "2024 - Heden",
      image: "/images/roc-mondriaan-logo.png",
      details: "Focus op full-stack development, databases en professionele software engineering."
    },
    {
      school: "ROC Mondriaan - ISK",
      degree: "Taalopleiding (Nederlands)",
      date: "2022 - 2024",
      image: "/images/roc-mondriaan-logo.png",
      details: "Intensieve Nederlandse taalverwerving en integratie."
    },
    {
      school: "Mehmet Salih Yasar Koleji",
      degree: "HAVO - Diploma",
      date: "2016 - 2020",
      image: "/images/images.png",
      details: "Algemene middelbare schoolopleiding met focus op exacte vakken en taalontwikkeling."
    }
  ];

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
          Onderwijs
        </h1>
        <div className="w-16 h-[2px] bg-white/20 mx-auto mt-6" />
        <p className="mt-6 text-zinc-400 max-w-xl mx-auto">
          Mijn academische achtergrond en ontwikkeling door de jaren heen.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md hover:border-white/20 transition-all"
          >
            {/* Logo */}
            <div className="w-full md:w-40 h-40 flex items-center justify-center bg-white rounded-2xl overflow-hidden border border-white/10">
              <img
                src={edu.image}
                alt={edu.school}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/200?text=School";
                }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-semibold">
                {edu.date}
              </span>

              <h2 className="text-2xl font-bold mt-2 text-white">
                {edu.school}
              </h2>

              <p className="text-zinc-300 font-medium mt-1">
                {edu.degree}
              </p>

              <p className="mt-3 text-zinc-500 text-sm leading-relaxed">
                {edu.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
