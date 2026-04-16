"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  StethoscopeIcon,
  HeartCheckIcon,
  HealthIcon,
  Syringe as SyringeIconHuge,
  MedicineIcon,
  MedicalFileIcon,
} from "@hugeicons/core-free-icons";

const FEATURES = [
  {
    id: "screening-pelajar-ipta",
    label: "Saringan Pelajar (IPTA/IPTS)",
    icon: MedicalFileIcon,
    image: "/images/services/service1.jpeg",
    description:
      "Health screening for university & college students. Includes X-Ray, eye test, and urine analysis.",
  },
  {
    id: "screening-pelajar-sekolah",
    label: "Saringan Pelajar (Sekolah)",
    icon: MedicalFileIcon,
    image: "/images/services/service2.jpeg",
    description:
      "Health screening for primary & secondary school students. Full package with blood tests included.",
  },
  {
    id: "screening-gdl-psv-baru",
    label: "Saringan GDL/PSV (Baru)",
    icon: HealthIcon,
    image: "/images/services/service3.jpeg",
    description:
      "Medical examination for new GDL/PSV licence applicants. Includes physical and coordination checks.",
  },
  {
    id: "screening-full-deluxe-lelaki",
    label: "Full Deluxe (Lelaki)",
    icon: HeartCheckIcon,
    image: "/images/services/service4.jpeg",
    description:
      "Comprehensive screening for men aged 40 and above. Covers cancer markers and cardiac risk.",
  },
  {
    id: "screening-standard",
    label: "Saringan Standard",
    icon: StethoscopeIcon,
    image: "/images/services/service5.jpeg",
    description:
      "Our most popular package. Full blood panel, liver, kidney, thyroid, and more.",
  },
  {
    id: "screening-pekerjaan-asas",
    label: "Saringan Pekerjaan (Asas)",
    icon: MedicalFileIcon,
    image: "/images/services/service6.jpeg",
    description:
      "Basic pre-employment health check. Fast, affordable, and widely accepted.",
  },
  {
    id: "screening-full-deluxe-wanita",
    label: "Full Deluxe (Wanita)",
    icon: HealthIcon,
    image: "/images/services/service7.jpeg",
    description:
      "Comprehensive screening for women aged 40 and above. Includes female-specific cancer markers.",
  },
  {
    id: "screening-gdl-psv-renew",
    label: "Saringan GDL/PSV (Renew)",
    icon: HealthIcon,
    image: "/images/services/service8.jpeg",
    description:
      "Medical check for GDL/PSV licence renewal. Quick process, results issued same day.",
  },
  {
    id: "screening-asas",
    label: "Saringan Kesihatan Asas",
    icon: StethoscopeIcon,
    image: "/images/services/service9.jpeg",
    description:
      "Essential health screening for adults. Blood panel, cholesterol, sugar, and organ function.",
  },
  {
    id: "screening-pekerjaan-lengkap",
    label: "Saringan Pekerjaan (Lengkap)",
    icon: MedicalFileIcon,
    image: "/images/services/service10.jpeg",
    description:
      "Full pre-employment medical. Includes X-Ray, ECG, drug test, and blood work.",
  },
  {
    id: "vaksin-gardasil",
    label: "Vaksin Gardasil 9",
    icon: SyringeIconHuge,
    image: "/images/services/service11.jpeg",
    description:
      "HPV Gardasil 9 vaccine to protect against cervical cancer. Recommended for women.",
  },
  {
    id: "vaksin-meningococcal",
    label: "Vaksin Meningococcal",
    icon: SyringeIconHuge,
    image: "/images/services/service12.jpeg",
    description:
      "Mandatory vaccine for Haji and Umrah pilgrims. Valid for 5 years.",
  },
  {
    id: "vaksin-typhoid",
    label: "Vaksin Typhoid",
    icon: SyringeIconHuge,
    image: "/images/services/service13.jpeg",
    description:
      "Mandatory for food handlers and restaurant workers. Vaccination certificate provided.",
  },
  {
    id: "vaksin-influenza",
    label: "Vaksin Influenza",
    icon: SyringeIconHuge,
    image: "/images/services/service14.jpeg",
    description:
      "Annual flu vaccine. Recommended for children, pregnant women, and the elderly.",
  },
  {
    id: "vaksin-pneumococcal",
    label: "Vaksin Pneumococcal",
    icon: SyringeIconHuge,
    image: "/images/services/service15.jpeg",
    description:
      "Synflorix vaccine for children. Guards against pneumonia, meningitis, and ear infections.",
  },
  {
    id: "vaksin-rotavirus",
    label: "Vaksin Rotavirus",
    icon: SyringeIconHuge,
    image: "/images/services/service16.jpeg",
    description:
      "Rotavirus vaccine for infants. Prevents severe gastroenteritis in young children.",
  },
  {
    id: "implanon",
    label: "Pemasangan Implanon",
    icon: MedicineIcon,
    image: "/images/services/service17.jpeg",
    description:
      "Long-term contraceptive implant with over 99% effectiveness. Lasts up to 3 years.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;

export function FeatureCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + FEATURES.length) % FEATURES.length);
  }, []);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % FEATURES.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(advance, AUTO_PLAY_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [advance, isPaused]);

  const current = FEATURES[index];
  const next = FEATURES[(index + 1) % FEATURES.length];

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Single card — full width, elegant cross-fade */}
      <div className="relative w-full rounded-3xl overflow-hidden" style={{ height: '520px' }}>
        {/* Prerender all slides, only current is visible */}
        {FEATURES.map((feature, i) => (
          <div
            key={feature.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
          >
            <img
              src={feature.image}
              alt={feature.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-3">
                {String(i + 1).padStart(2, "0")} · Klinik Subha
              </span>
              <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-2 tracking-tight">
                {feature.label}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        {/* Prev / Next tap zones — half of card each side, invisible */}
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous"
          className="absolute left-0 top-0 h-full w-1/2 z-10 cursor-pointer"
        />
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next"
          className="absolute right-0 top-0 h-full w-1/2 z-10 cursor-pointer"
        />

        {/* Progress counter top-right */}
        <div className="absolute top-5 right-5 z-20 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium tabular-nums">
          {index + 1} / {FEATURES.length}
        </div>
      </div>

      {/* Controls row: arrows + dots all in one centered line */}
      <div className="flex items-center justify-center gap-3 mt-4">
        {/* Prev arrow */}
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous"
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-600">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {FEATURES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 h-1.5 bg-[#46c8a1]"
                  : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next"
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-600">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FeatureCarousel;
