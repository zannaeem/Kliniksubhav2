import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicePosters, getPosterById } from "@/lib/data/posters";
import WhatsAppBookButton from "@/components/ui/whatsapp-book-button";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return servicePosters.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const poster = getPosterById(id);
  if (!poster) return {};
  return {
    title: `${poster.label} | Klinik Subha`,
    description: poster.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const poster = getPosterById(id);
  if (!poster) notFound();

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-24 md:pb-0">
      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Services
        </Link>
      </div>

      {/* Main card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Poster - full, uncropped */}
            <div className="relative w-full aspect-[3/4] bg-gray-50">
              <Image
                src={poster.image}
                alt={poster.label}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Detail panel */}
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                {/* Category pill */}
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#46c8a1] bg-[#46c8a1]/10 px-3 py-1 rounded-full mb-5">
                  {poster.category}
                </span>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                  {poster.label}
                </h1>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
                  {poster.description}
                </p>

                {/* What's included */}
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400 mb-4">
                    What&apos;s included
                  </p>
                  <ul className="space-y-2">
                    {poster.details.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 w-4 h-4 rounded-full bg-[#46c8a1]/15 flex items-center justify-center shrink-0">
                          <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#46c8a1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-sm text-gray-600 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* WhatsApp CTA with language picker */}
              <WhatsAppBookButton
                serviceName={poster.label}
                whatsappNumber={poster.whatsappNumber}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA - visible on small screens only */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-gray-100 px-4 py-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={`https://wa.me/${poster.whatsappNumber}?text=Hi%2C+I%27d+like+to+enquire+about+${encodeURIComponent(poster.label)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 rounded-full text-sm w-full transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book via WhatsApp
        </a>
      </div>
    </main>
  );
}
