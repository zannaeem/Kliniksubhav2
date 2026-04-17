import type { Metadata } from "next";
import { Phone, Clock, MapPin } from "lucide-react";
import VideoHero from "@/components/ui/video-hero";

export const metadata: Metadata = {
  title: "Contact | Klinik Subha",
  description:
    "Find us at Beaufort Square or Membakut. Call, WhatsApp, or follow us on social media.",
};

const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactPage() {
  return (
    <main>
      <VideoHero
        label="Contact Us"
        title="Find Us"
        subtitle="Two locations serving Beaufort and Membakut. We're open every day - walk in or reach out anytime."
      />

      {/* Quick contact strip */}
      <section className="bg-[#46c8a1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col gap-1">
                <a
                  href="tel:087-212157"
                  className="flex items-center gap-2 text-white font-medium text-sm hover:text-white/80 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  087-212 157 / 016-223 5212 <span className="text-white/70 font-normal">(Beaufort)</span>
                </a>
                <a
                  href="tel:087-887788"
                  className="flex items-center gap-2 text-white font-medium text-sm hover:text-white/80 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  087-887 788 / 016-298 5212 <span className="text-white/70 font-normal">(Membakut)</span>
                </a>
              </div>
              <span className="flex items-center gap-2 text-white/90 text-sm">
                <Clock className="w-4 h-4" />
                Open daily 8:00 AM – 9:00 PM
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
              <a
                href="https://wa.me/60162235212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#46c8a1] hover:bg-white/90 font-semibold px-4 py-2 rounded-full text-xs transition-colors w-full sm:w-auto justify-center"
              >
                {WA_ICON}
                Beaufort
              </a>
              <a
                href="https://wa.me/60162985212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#46c8a1] hover:bg-white/90 font-semibold px-4 py-2 rounded-full text-xs transition-colors w-full sm:w-auto justify-center"
              >
                {WA_ICON}
                Membakut
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Branch cards + maps */}
      <section className="py-20 md:py-32 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-2 block">
              Our Locations
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Two branches, one standard of care.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── Beaufort Branch ── */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative w-full h-64">
                <iframe
                  src="https://maps.google.com/maps?q=Klinik+Subha+Beaufort+Square+Sabah&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Klinik Subha Beaufort on Google Maps"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#46c8a1] mb-1 block">
                      Main Branch
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">Klinik Subha Beaufort</h3>
                  </div>
                  <span className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#46c8a1]/10 text-[#46c8a1]">
                    Active
                  </span>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Lot C-019 & C-020, Ground Floor,<br />
                    Beaufort Square, 89800 Beaufort, Sabah
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                  <div className="text-sm text-gray-500">
                    <a href="tel:087-212157" className="hover:text-gray-700 transition-colors">087-212 157</a>
                    <span className="mx-1">/</span>
                    <a href="tel:016-2235212" className="hover:text-gray-700 transition-colors">016-223 5212</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                  <p className="text-sm text-gray-500">Open daily · 8:00 AM – 9:00 PM</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Klinik+Subha+Beaufort+Square+89800+Beaufort+Sabah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#46c8a1] hover:text-[#38b890] transition-colors"
                >
                  Get directions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Membakut Branch ── */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative w-full h-64">
                <iframe
                  src="https://maps.google.com/maps?q=KLINIK+SUBHA+MEMBAKUT+LOT+5+TINGKAT+BAWAH+BLOCK+A+KEDAI+MEMBAKUT+JAYA+BARU+89727+Membakut+Sabah&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Klinik Subha Membakut on Google Maps"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#46c8a1] mb-1 block">
                      New Branch
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">Klinik Subha Membakut</h3>
                  </div>
                  <span className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600">
                    New
                  </span>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Lot 5, Tingkat Bawah, Block A,<br />
                    Kedai Membakut Jaya Baru,<br />
                    89727 Membakut, Sabah
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                  <div className="text-sm text-gray-500">
                    <a href="tel:087-887788" className="hover:text-gray-700 transition-colors">087-887 788</a>
                    <span className="mx-1">/</span>
                    <a href="tel:016-2985212" className="hover:text-gray-700 transition-colors">016-298 5212</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                  <p className="text-sm text-gray-500">Open daily · 8:00 AM – 9:00 PM</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=KLINIK+SUBHA+MEMBAKUT+LOT+5+TINGKAT+BAWAH+BLOCK+A+KEDAI+MEMBAKUT+JAYA+BARU+89727+Membakut+Sabah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#46c8a1] hover:text-[#38b890] transition-colors"
                >
                  Get directions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Follow us - social + WhatsApp */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Social */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-5">
                Follow Us
              </p>
              <div className="flex items-center gap-3">

                {/* Facebook - full branded button */}
                <a
                  href="https://www.facebook.com/kliniksubhabeaufort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#1464d8] text-white font-semibold px-5 py-3 rounded-2xl text-sm transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>
                    Facebook
                    <span className="block text-[11px] font-normal text-white/70">@kliniksubhabeaufort</span>
                  </span>
                </a>

                {/* Instagram - full branded gradient button */}
                <a
                  href="https://www.instagram.com/kliniksubha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white font-semibold px-5 py-3 rounded-2xl text-sm transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span>
                    Instagram
                    <span className="block text-[11px] font-normal text-white/70">@kliniksubha</span>
                  </span>
                </a>

              </div>
            </div>

            {/* WhatsApp */}
            <div className="text-center md:text-right">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-5">
                Book an Appointment
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3">
                <a
                  href="https://wa.me/60162235212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm w-full sm:w-auto"
                >
                  {WA_ICON}
                  Beaufort
                </a>
                <a
                  href="https://wa.me/60162985212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm w-full sm:w-auto"
                >
                  {WA_ICON}
                  Membakut
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
