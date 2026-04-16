"use client";

import { useState } from "react";
import { Calendar, Phone, MapPin, X } from "lucide-react";

type SheetType = "call" | "map" | null;

export default function MobileTabBar() {
  const [activeSheet, setActiveSheet] = useState<SheetType>(null);

  const close = () => setActiveSheet(null);

  return (
    <>
      {/* Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-around h-[68px]">

          {/* Appointment */}
          <a
            href="/contact"
            className="flex flex-col items-center justify-center flex-1 h-full text-gray-500 hover:text-[#46c8a1] transition-colors relative"
          >
            <Calendar className="w-[24px] h-[24px] mb-1 text-[#46c8a1]" />
            <span className="text-[10px] font-medium text-gray-700">Appointment</span>
            <div className="absolute inset-0 pointer-events-none border border-dashed border-[#46c8a1]/30 m-1 rounded-md bg-[#46c8a1]/5" />
          </a>

          <div className="w-[1px] h-8 bg-gray-200" />

          {/* WhatsApp */}
          <a
            href="https://wa.me/60162235212?text=Hi%20Klinik%20Subha!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 h-full text-gray-500 hover:text-[#25D366] transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#25D366"
              className="mb-1"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-[10px] font-medium text-gray-700">WhatsApp</span>
          </a>

          <div className="w-[1px] h-8 bg-gray-200" />

          {/* Call — triggers bottom sheet */}
          <button
            onClick={() => setActiveSheet("call")}
            className="flex flex-col items-center justify-center flex-1 h-full text-gray-500 hover:text-[#46c8a1] transition-colors"
          >
            <Phone className="w-[24px] h-[24px] mb-1 text-gray-500" />
            <span className="text-[10px] font-medium text-gray-700">Call</span>
          </button>

          <div className="w-[1px] h-8 bg-gray-200" />

          {/* Map — triggers bottom sheet */}
          <button
            onClick={() => setActiveSheet("map")}
            className="flex flex-col items-center justify-center flex-1 h-full text-gray-500 hover:text-[#46c8a1] transition-colors"
          >
            <MapPin className="w-[24px] h-[24px] mb-1 text-gray-500" />
            <span className="text-[10px] font-medium text-gray-700">Map</span>
          </button>

        </div>
      </div>

      {/* Bottom Sheet Backdrop */}
      {activeSheet && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={close}
        />
      )}

      {/* Call Bottom Sheet */}
      <div
        className={`md:hidden fixed left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out ${
          activeSheet === "call" ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ bottom: 0 }}
      >
        <div className="px-6 pt-5 pb-10">
          {/* Handle bar */}
          <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-6" />

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#46c8a1] mb-1">Select Clinic</p>
              <h3 className="text-xl font-bold text-gray-900">Which clinic to call?</h3>
            </div>
            <button
              onClick={close}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={16} className="text-gray-500" />
            </button>
          </div>

          <div className="space-y-3">
            <a
              href="tel:0162235212"
              onClick={close}
              className="flex items-center gap-4 w-full p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-[#46c8a1]/5 hover:border-[#46c8a1]/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-full bg-[#46c8a1]/10 flex items-center justify-center shrink-0 group-hover:bg-[#46c8a1]/20 transition-colors">
                <Phone size={18} className="text-[#46c8a1]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-base">Beaufort</p>
                <p className="text-sm text-gray-500">016-223 5212</p>
              </div>
              <svg className="ml-auto text-gray-300 group-hover:text-[#46c8a1] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>

            <a
              href="tel:087887788"
              onClick={close}
              className="flex items-center gap-4 w-full p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-[#46c8a1]/5 hover:border-[#46c8a1]/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-full bg-[#46c8a1]/10 flex items-center justify-center shrink-0 group-hover:bg-[#46c8a1]/20 transition-colors">
                <Phone size={18} className="text-[#46c8a1]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-base">Membakut</p>
                <p className="text-sm text-gray-500">087-887 788</p>
              </div>
              <svg className="ml-auto text-gray-300 group-hover:text-[#46c8a1] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Map Bottom Sheet */}
      <div
        className={`md:hidden fixed left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out ${
          activeSheet === "map" ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ bottom: 0 }}
      >
        <div className="px-6 pt-5 pb-10">
          {/* Handle bar */}
          <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-6" />

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#46c8a1] mb-1">Select Clinic</p>
              <h3 className="text-xl font-bold text-gray-900">Which clinic to navigate?</h3>
            </div>
            <button
              onClick={close}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={16} className="text-gray-500" />
            </button>
          </div>

          <div className="space-y-3">
            <a
              href="https://maps.google.com/?q=Klinik+Subha+Beaufort+Square+Sabah"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center gap-4 w-full p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-[#46c8a1]/5 hover:border-[#46c8a1]/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-full bg-[#46c8a1]/10 flex items-center justify-center shrink-0 group-hover:bg-[#46c8a1]/20 transition-colors">
                <MapPin size={18} className="text-[#46c8a1]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-base">Beaufort</p>
                <p className="text-sm text-gray-500">Lot C-019 &amp; C-020, Beaufort Square</p>
              </div>
              <svg className="ml-auto text-gray-300 group-hover:text-[#46c8a1] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>

            <a
              href="https://maps.google.com/?q=Klinik+Subha+Membakut+Sabah"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center gap-4 w-full p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-[#46c8a1]/5 hover:border-[#46c8a1]/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-full bg-[#46c8a1]/10 flex items-center justify-center shrink-0 group-hover:bg-[#46c8a1]/20 transition-colors">
                <MapPin size={18} className="text-[#46c8a1]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-base">Membakut</p>
                <p className="text-sm text-gray-500">Lot 5, Block A, Kedai Membakut Jaya</p>
              </div>
              <svg className="ml-auto text-gray-300 group-hover:text-[#46c8a1] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
