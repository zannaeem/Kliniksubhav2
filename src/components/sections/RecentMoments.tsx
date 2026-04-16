"use client";

import Image from "next/image";

const photos = [
  {
    src: "/images/activity/activity-1.jpg",
    caption: "Official launch of Klinik Subha Membakut",
  },
  {
    src: "/images/activity/activity-2.jpg",
    caption: "Membakut launch celebration",
  },
  {
    src: "/images/activity/activity-3.jpg",
    caption: "Our team at Beaufort",
  },
  {
    src: "/images/activity/activity-4.jpg",
    caption: "Serving our community",
  },
];

export default function RecentMoments() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block px-5 py-2 bg-[#46c8a1]/10 rounded-full text-xs font-bold uppercase tracking-[0.08em] text-[#46c8a1]">
              Recent Moments
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#46c8a1] text-white text-xs font-bold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              April 2026 · Membakut Launch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Growing with our community
          </h2>
          <p className="mt-3 text-muted text-base max-w-lg mx-auto">
            Celebrating the official opening of Klinik Subha Membakut - bringing quality, accessible healthcare even closer to home.
          </p>
        </div>

        {/* Uniform 4-photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
