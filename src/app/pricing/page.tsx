import type { Metadata } from "next";
import { pricingData } from "@/lib/data/pricing";
import VideoHero from "@/components/ui/video-hero";

export const metadata: Metadata = {
  title: "Pricing | Klinik Subha",
  description:
    "Transparent and affordable healthcare pricing at Klinik Subha, Beaufort. View our consultation, treatment, and vaccination rates.",
};

export default function PricingPage() {
  return (
    <main>
      <VideoHero
        label="Pricing"
        title="Transparent Pricing"
        subtitle="Quality healthcare at affordable rates for the Beaufort community."
      />

      {/* Disclaimer */}
      <section className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-yellow-800 text-center">
            Prices are indicative and subject to change. Contact us for the
            latest rates or to verify panel coverage.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {pricingData.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-bold text-primary mb-6">
                {category.title}
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-primary">
                        Service
                      </th>
                      <th className="text-right px-6 py-4 text-sm font-semibold text-primary">
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, idx) => (
                      <tr
                        key={item.service}
                        className={
                          idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }
                      >
                        <td className="px-6 py-4 text-sm text-foreground">
                          {item.service}
                        </td>
                        <td className="px-6 py-4 text-sm text-primary font-semibold text-right whitespace-nowrap">
                          {item.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Pricing?</h2>
          <p className="text-white/70 mb-8">
            Contact us via WhatsApp for the latest rates or to check your panel
            insurance coverage.
          </p>
          <a
            href="https://wa.me/60162235212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Contact Us
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
