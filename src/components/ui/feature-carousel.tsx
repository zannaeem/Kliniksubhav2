"use client";

import React from "react";
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
    label: "Full Deluxe (Lelaki) — RM315",
    icon: HeartCheckIcon,
    image: "/images/services/service4.jpeg",
    description:
      "Comprehensive screening for men aged 40+. Cancer markers, cardiac risk, Hepatitis A, H.Pylori & free physio session.",
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
    id: "screening-standard-addon",
    label: "Saringan Kesihatan — Add On",
    icon: MedicalFileIcon,
    image: "/images/services/service-addon.jpeg",
    description:
      "Optional add-on tests for any screening package. Vitamin D, Pap Smear, cancer markers, and more — individually priced.",
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
    label: "Full Deluxe (Wanita) — RM360",
    icon: HealthIcon,
    image: "/images/services/service7.jpeg",
    description:
      "Comprehensive screening for women aged 40+. Includes Pap Smear, ovarian & breast cancer markers, and free physio session.",
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
    id: "screening-warga-emas-lelaki",
    label: "Saringan Warga Emas (Lelaki) — RM335",
    icon: HeartCheckIcon,
    image: "/images/services/service-warga-emas-lelaki.jpeg",
    description:
      "Special package for men aged 55+. Joint, thyroid, vitamin & mineral screening, cancer markers, free flu vaccine & physio.",
  },
  {
    id: "screening-warga-emas-wanita",
    label: "Saringan Warga Emas (Wanita) — RM335",
    icon: HealthIcon,
    image: "/images/services/service-warga-emas-wanita.jpeg",
    description:
      "Special package for women aged 65+. Joint, thyroid, vitamin & mineral screening, female cancer markers, free flu vaccine & physio.",
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

// Tripled so the -33.333% loop lands cleanly
const TRACK = [...FEATURES, ...FEATURES, ...FEATURES];

export function FeatureCarousel() {
  return (
    <div className="w-full">
      <style>{`
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .carousel-track {
          display: flex;
          width: max-content;
          animation: carousel-scroll 60s linear infinite;
          will-change: transform;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Overflow mask */}
      <div className="relative w-full overflow-hidden">
        <div className="carousel-track" style={{ gap: "16px" }}>
          {TRACK.map((feature, i) => (
            <div
              key={`${feature.id}-${i}`}
              /* Mobile: ~85vw card | Desktop: ~420px card showing 2 at once */
              className="flex-shrink-0 w-[78vw] md:w-[420px] rounded-3xl overflow-hidden relative"
              style={{ height: "420px" }}
            >
              {/* Background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.image}
                alt={feature.label}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Counter badge */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-[10px] font-medium tabular-nums">
                {String((i % FEATURES.length) + 1).padStart(2, "0")} /{" "}
                {FEATURES.length}
              </div>

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-3">
                  Klinik Subha
                </span>
                <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-1.5 tracking-tight">
                  {feature.label}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fade — left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-20 bg-gradient-to-r from-[#46c8a1] to-transparent" />
        {/* Edge fade — right */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-20 bg-gradient-to-l from-[#46c8a1] to-transparent" />
      </div>
    </div>
  );
}

export default FeatureCarousel;
