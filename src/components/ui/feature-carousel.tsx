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

const AUTO_PLAY_INTERVAL = 4000;
// Clone first 2 items at the end for seamless looping
const TRACK = [...FEATURES, FEATURES[0], FEATURES[1]];

export function FeatureCarousel() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const resetScheduled = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsToShow = isMobile ? 1 : 2;

  const advance = useCallback(() => {
    setTransitioning(true);
    setIndex((prev) => prev + 1);
  }, []);

  const retreat = useCallback(() => {
    setTransitioning(true);
    setIndex((prev) => {
      if (prev === 0) {
        // Jump to the real last item instantly, then go back one
        return FEATURES.length - 1;
      }
      return prev - 1;
    });
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [advance, isPaused]);

  // When index reaches the cloned zone, silently reset to real position
  useEffect(() => {
    if (index >= FEATURES.length && !resetScheduled.current) {
      resetScheduled.current = true;
      // Wait for transition to finish (600ms), then snap back
      const timer = setTimeout(() => {
        setTransitioning(false);
        setIndex((prev) => prev - FEATURES.length);
        resetScheduled.current = false;
      }, 620);
      return () => clearTimeout(timer);
    }
  }, [index]);

  // Calculate translate percentage
  // Each item is 100/cardsToShow % of the container width.
  // The track width is TRACK.length * (100/cardsToShow) %.
  // So moving 1 item means moving (1 / TRACK.length) of the track width.
  const translatePct = index * (100 / TRACK.length);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Track container - clips overflow */}
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex gap-4"
          style={{
            width: `${TRACK.length * (100 / cardsToShow)}%`,
            transform: `translateX(-${translatePct}%)`,
            transition: transitioning ? "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          }}
        >
          {TRACK.map((feature, i) => (
            <div
              key={`${feature.id}-${i}`}
              // Each card is 1/TRACK.length of the track width,
              // which equals 50% of the visible container (2 cards shown)
              style={{ width: `${100 / TRACK.length}%` }}
              className="shrink-0"
            >
              <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden group">
                {/* Photo */}
                <img
                  src={feature.image}
                  alt={feature.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-3">
                    {String((i % FEATURES.length) + 1).padStart(2, "0")} · Klinik Subha
                  </span>
                  <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-2 tracking-tight">
                    {feature.label}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow icon top-right */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={retreat}
          aria-label="Previous"
          className="w-12 h-12 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>

        {/* Progress indicator */}
        <span className="text-sm text-white/90 font-medium tabular-nums">
          {(index % FEATURES.length) + 1} / {FEATURES.length}
        </span>

        <button
          onClick={advance}
          aria-label="Next"
          className="w-12 h-12 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FeatureCarousel;
