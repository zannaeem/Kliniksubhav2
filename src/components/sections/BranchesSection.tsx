"use client";

import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

const branches = [
  {
    id: "beaufort",
    name: "Klinik Subha Beaufort",
    badge: "Beaufort",
    isNew: false,
    image: "/images/branches/beaufort.jpg",
    address: "Beaufort Square Avenue 2, Beaufort Square, 89800 Beaufort, Sabah",
    phone: "+60 16-223 5212",
    whatsapp: "60162235212",
    hours: "8:00 AM – 9:00 PM, Daily",
    mapsUrl: "https://www.google.com/maps/search/Klinik+Subha+Beaufort+Pusat+Xray+Beaufort+Square+Avenue+2+89800+Beaufort+Sabah",
  },
  {
    id: "membakut",
    name: "Klinik Subha Membakut",
    badge: "Membakut",
    isNew: true,
    image: "/images/branches/membakut.jpg",
    address: "Lot 5, Tingkat Bawah, Block A, Kedai Membakut Jaya Baru, 89727 Membakut, Sabah",
    phone: "+60 16-223 5212",
    whatsapp: "60162235212",
    hours: "8:00 AM – 9:00 PM, Daily",
    mapsUrl: "https://www.google.com/maps/search/Klinik+Subha+Membakut+Lot+5+Block+A+Kedai+Membakut+Jaya+Baru+89727+Membakut+Sabah",
  },
];

export default function BranchesSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-[#46c8a1]/10 rounded-full text-xs font-bold uppercase tracking-[0.08em] text-[#46c8a1] mb-4">
            Our Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Find us in Sabah
          </h2>
          <p className="mt-3 text-muted text-base max-w-lg mx-auto">
            Two branches, one community. Open every day so care is always within reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/8 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-gray-100">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Badges — top row */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-foreground backdrop-blur-sm">
                    {branch.badge}
                  </span>
                  {branch.isNew && (
                    <span className="px-3 py-1 rounded-full bg-[#46c8a1] text-xs font-bold text-white shadow-md">
                      New
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-5">
                  {branch.name}
                </h3>

                <div className="space-y-3 mb-7">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#46c8a1] mt-0.5 shrink-0" />
                    <p className="text-sm text-muted leading-relaxed">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#46c8a1] shrink-0" />
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#46c8a1] shrink-0" />
                    <p className="text-sm text-muted">{branch.hours}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-sm font-semibold text-foreground transition-colors"
                  >
                    Get Directions
                  </a>
                  <a
                    href={`https://wa.me/${branch.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl bg-[#46c8a1] hover:bg-[#3ab891] text-sm font-semibold text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
