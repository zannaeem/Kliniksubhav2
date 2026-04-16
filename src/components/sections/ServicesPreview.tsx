import Link from "next/link";
import { FeatureCarousel } from "@/components/ui/feature-carousel";

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#46c8a1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-white/20 rounded-full text-xs font-bold uppercase tracking-[0.08em] text-white mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What we offer
          </h2>
          <p className="mt-3 text-white/90 text-base max-w-lg mx-auto">
            Comprehensive healthcare services for the whole family, all under one roof.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            View all services
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

        {/* Feature Carousel */}
        <FeatureCarousel />
      </div>
    </section>
  );
}
