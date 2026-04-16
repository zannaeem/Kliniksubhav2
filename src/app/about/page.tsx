import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/ui/video-hero";
import AboutTimeline from "@/components/sections/AboutTimeline";

export const metadata: Metadata = {
  title: "About Us | Klinik Subha",
  description:
    "Learn about Klinik Subha — Beaufort's trusted family clinic since 1990. Our story, vision, mission, and values.",
};

const businesses = [
  {
    name: "Klinik Subha Beaufort",
    status: "Active",
    badge: "Main Branch",
    description:
      "Our flagship clinic at Beaufort Square, open every day from 8 AM to 9 PM — fully equipped with diagnostic, screening, and vaccination services.",
    image: "/images/branches/beaufort.jpg",
  },
  {
    name: "Klinik Subha Membakut",
    status: "New",
    badge: null,
    description:
      "Our newest branch, bringing the same standard of care closer to families in Membakut and surrounding areas.",
    image: "/images/branches/membakut.jpg",
  },
  {
    name: "Kinabalu Medic Spine & Rehabilitation Centre",
    status: "Active",
    badge: "Bandar Mingo",
    description:
      "Specialised spine care and rehabilitation services for patients across Sabah.",
    image: "/images/about/kinabalu-medic.png",
  },
];

export default function AboutPage() {
  return (
    <main>
      <VideoHero
        label="About Us"
        title="Our Story"
        subtitle="From a humble clinic in 1990 to Beaufort's most trusted family healthcare provider."
      />

      {/* Scroll-animated timeline */}
      <AboutTimeline />

      {/* Vision & Mission — clean two-column */}
      <section className="py-24 md:py-32 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
            <div className="bg-white p-10 md:p-14">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-4 block">
                Vision
              </span>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                To provide accessible, value-priced, and patient-centered primary care of the highest quality.
              </p>
            </div>
            <div className="bg-white p-10 md:p-14">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-4 block">
                Mission
              </span>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                To be the community's first choice in healthcare by delivering compassionate care that brings physical healing, comfort, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-4 block">
              Our Network
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Three facilities,<br className="hidden md:block" /> one standard of care.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {businesses.map((biz) => (
              <div
                key={biz.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                {/* Photo */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={biz.image}
                    alt={biz.name}
                    fill
                    className="object-cover"
                  />
                  {/* Status badge over image */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${
                        biz.status === "Active"
                          ? "bg-[#46c8a1] text-white"
                          : "bg-amber-400 text-white"
                      }`}
                    >
                      {biz.status}
                    </span>
                    {biz.badge && (
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/90 text-gray-600 backdrop-blur-sm">
                        {biz.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                    {biz.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {biz.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
