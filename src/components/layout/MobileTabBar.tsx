"use client";

import { useState } from "react";
import { Calendar, MessageCircle, Phone, MapPin, X } from "lucide-react";

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
            href="https://wa.me/60162235212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 h-full text-gray-500 hover:text-[#46c8a1] transition-colors"
          >
            <MessageCircle className="w-[24px] h-[24px] mb-1 text-gray-500" />
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
