import type { Metadata } from "next";
import Image from "next/image";
import { facilityBranches } from "@/lib/data/facilities";
import VideoHero from "@/components/ui/video-hero";

export const metadata: Metadata = {
  title: "Facilities | Klinik Subha",
  description:
    "Take a tour of Klinik Subha's modern facilities — consultation rooms, treatment rooms, X-Ray room, and more.",
};

export default function FacilitiesPage() {
  return (
    <main>
      <VideoHero
        label="Our Facilities"
        title="Modern Healthcare Facilities"
        subtitle="Equipped with advanced diagnostic tools to provide you with comprehensive care."
      />

      <section className="py-20 md:py-32 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {facilityBranches.map((branch) => (
            <div key={branch.branch}>
              {/* Branch heading */}
              <div className="mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-2 block">
                  Our Clinic
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {branch.branch}
                </h2>
              </div>

              {/* Photo grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {branch.facilities.map((facility) => (
                  <div
                    key={facility.name}
                    className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-gray-100"
                  >
                    <div className="relative h-64">
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-semibold text-base leading-snug">
                          {facility.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
