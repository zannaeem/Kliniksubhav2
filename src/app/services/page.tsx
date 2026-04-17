import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VideoHero from "@/components/ui/video-hero";
import { postersByCategory } from "@/lib/data/posters";

export const metadata: Metadata = {
  title: "Services | Klinik Subha",
  description:
    "Comprehensive healthcare services at Klinik Subha - general outpatient, diagnostics, vaccinations, and more.",
};

const CATEGORY_META: Record<string, { titleBm: string }> = {
  "Health Screenings": { titleBm: "Pakej Saringan Kesihatan" },
  "Vaccinations": { titleBm: "Vaksinasi" },
  "Family Planning": { titleBm: "Perancangan Keluarga" },
};

export default function ServicesPage() {
  return (
    <main>
      <VideoHero
        label="Our Services"
        title="What We Offer"
        subtitle="Complete healthcare services for your family - from routine checkups to advanced diagnostics, all under one roof."
      />

      {/* Poster grid by category */}
      <section className="py-20 md:py-32 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {Object.entries(postersByCategory).map(([category, posters]) => (
            <div key={category}>
              {/* Category heading */}
              <div className="mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-2 block">
                  {CATEGORY_META[category]?.titleBm ?? category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {category}
                </h2>
              </div>

              {/* Poster grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {posters.map((poster) => (
                  <Link
                    key={poster.id}
                    href={`/services/${poster.id}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-[#46c8a1]/40 transition-all"
                  >
                    {/* Full poster - aspect ratio matches the 1080x905 source images */}
                    <div className="relative w-full aspect-[6/5] bg-gray-50 border-b border-gray-100">
                      <Image
                        src={poster.image}
                        alt={poster.label}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    {/* Caption */}
                    <div className="px-5 py-4 border-t border-gray-50">
                      <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                        {poster.label}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                        {poster.description}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-3 text-[11px] font-semibold text-[#46c8a1]">
                        View details
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Consultation?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Book your appointment today via WhatsApp. Our Beaufort branch is open daily (8am-9pm), and our Membakut branch operates Monday to Saturday (8am-8pm).
          </p>
          <a
            href="https://wa.me/60162235212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Book via WhatsApp
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
