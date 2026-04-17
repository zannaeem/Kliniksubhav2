"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Autoplay prevented by browser:", e));
    }
  }, []);
  return (
    <section className="w-full relative z-0">
      <div className="w-full mx-auto px-3 sm:px-4 pt-3">
        <div className="relative w-full h-[93svh] md:h-[95vh] min-h-[600px] rounded-[32px] overflow-hidden shadow-xl bg-gray-900">
          {/* Native Video Background (Forced RAW HTML for iOS Safari Autoplay bypass) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            dangerouslySetInnerHTML={{
              __html: `
                <video
                  src="/media/Revision_Klinik_Subha_Compressed.mp4"
                  autoplay
                  loop
                  muted
                  playsinline
                  style="width: 100%; height: 100%; object-fit: cover;"
                ></video>
              `
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content - centred */}
          <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
              <span className="inline-block px-5 py-2 bg-[#46c8a1] rounded-full text-xs font-bold uppercase tracking-[0.08em] text-white">
                Welcome to Klinik Subha
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Kesihatan Anda,
                <br />
                Komitmen Kami
              </h1>
              <p className="text-lg md:text-xl text-white/75 max-w-lg font-medium">
                Beaufort: Daily 8am-9pm | Membakut: Mon-Sat 8am-8pm
              </p>
              <a
                href="https://kliniksubha.yezza.co/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center bg-primary text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-primaryDark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Make an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
