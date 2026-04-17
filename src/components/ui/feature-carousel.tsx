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

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useCallback } from "react";

export function FeatureCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 1500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full relative">
      {/* Carousel Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
          {FEATURES.map((feature, i) => (
            <div
              key={feature.id}
              className="flex-shrink-0 min-w-0 pl-4 md:pl-6 basis-[85vw] md:basis-[420px]"
            >
              <Link
                href={`/services/${feature.id}`}
                className="block w-full h-[420px] rounded-3xl overflow-hidden relative group"
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300" />

                {/* Counter badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold tabular-nums">
                  {String(i + 1).padStart(2, "0")} / {FEATURES.length}
                </div>

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white shadow-sm text-[10px] font-bold uppercase tracking-widest mb-3">
                    View Details
                  </span>
                  <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-1.5 tracking-tight drop-shadow-md">
                    {feature.label}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-2 drop-shadow-sm">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FeatureCarousel;
