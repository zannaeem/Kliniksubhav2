"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-[#46c8a1]/10 rounded-full text-xs font-bold uppercase tracking-[0.08em] text-[#46c8a1] mb-4">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            What our patients say
          </h2>
          <p className="mt-3 text-muted text-base max-w-lg mx-auto">
            Real feedback from families who trust Klinik Subha.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 max-h-[600px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <p className="text-sm text-muted">Had a great experience? Let others know.</p>
          <a
            href="https://www.google.com/search?sca_esv=09e795cc6b8f4569&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWUz12U8tYWGwkS66rHRdYlEo55QnnEgQb2wBR8lyvERX9YNtjc8DJeM3duXR-sy4cbk3W8WhnrwQ_v5xdLoPu148RlZu6fU7VaYWrOSznwwb0jj4v3n6jdsemIvTOLUIVzqF8tg7HuAjSC-z74LRjK1p7GrP1FgDh4NMhgP9rr1q355eHg%3D%3D&q=Klinik+Subha+Beaufort+%7C+Pusat+Xray,Perubatan+Warga+Emas,Kanak-Kanak+dan+Dewasa+Reviews&sa=X&ved=2ahUKEwis5_rF6PCTAxXtkq8BHTVTOsMQ0bkNegQIJxAH#lrd=0x323ccdc5d9a62b39:0x6563c45cbd6ee8ed,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#46c8a1] hover:bg-[#3ab891] text-white text-sm font-semibold transition-colors shadow-md shadow-[#46c8a1]/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586Z" />
            </svg>
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
