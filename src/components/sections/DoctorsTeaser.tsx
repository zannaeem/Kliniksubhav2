"use client";

import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/lib/data/doctors";
import { AnimatedText } from "@/components/ui/animated-underline-text";

// Re-order so Jason (index 0) appears in the visual middle slot (slot 1 of 3).
// doctors array: [Jason, Sharlinna, Nurul]
// display order: [Sharlinna, Jason, Nurul]
function getDisplayOrder() {
  const jason = doctors.find((d) => d.id === "dr-jason")!;
  const rest = doctors.filter((d) => d.id !== "dr-jason");
  // Insert Jason in the middle
  return [rest[0], jason, rest[1]].filter(Boolean);
}

const displayDoctors = getDisplayOrder();

export default function DoctorsTeaser() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-[#46c8a1]/10 rounded-full text-xs font-bold uppercase tracking-[0.08em] text-[#46c8a1] mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Meet our doctors
          </h2>
          <p className="mt-3 text-muted text-base max-w-lg mx-auto">
            Experienced medical professionals dedicated to your well-being.
          </p>
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View all doctors
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {displayDoctors.map((doctor) => {
            return (
              <div
                key={doctor.id}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border transition-all duration-300 border-[#46c8a1]/40 shadow-xl shadow-[#46c8a1]/10 hover:-translate-y-2 ring-1 ring-[#46c8a1]/20"
              >
                <div className="relative shrink-0 overflow-hidden bg-gray-100 h-64 md:h-80">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#46c8a1]/10 to-transparent pointer-events-none group-hover:from-[#46c8a1]/20 transition-colors duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <AnimatedText
                    text={doctor.name}
                    textClassName="text-base font-semibold text-foreground text-left"
                    underlineClassName="text-accent"
                    className="items-start"
                  />
                  <p className="text-sm text-muted mt-6 mb-4">{doctor.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
