"use client";

interface VideoHeroProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function VideoHero({ label, title, subtitle }: VideoHeroProps) {
  return (
    <section className="relative text-white pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden min-h-[280px] md:min-h-[340px]">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/klinik-subha.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-[#46c8a1]">
          {label}
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          {title}
        </h1>
        <p className="mt-4 text-base md:text-xl text-white/80 max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}
