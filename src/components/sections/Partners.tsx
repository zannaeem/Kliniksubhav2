"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { partners } from "@/lib/data/partners";

export default function Partners() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Trusted panel partners
          </h2>
          <p className="mt-3 text-muted text-base">
            We work with leading insurance and corporate partners.
          </p>
        </div>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          <InfiniteSlider duration={35}>
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex-shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-white rounded-full border border-gray-200 text-sm font-medium text-foreground whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </InfiniteSlider>

          <div className="mt-4">
            <InfiniteSlider duration={40} reverse>
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex-shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-white rounded-full border border-gray-200 text-sm font-medium text-muted whitespace-nowrap"
                >
                  {partner}
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
