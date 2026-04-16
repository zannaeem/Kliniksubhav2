"use client";

import { Calendar, MessageCircle, Phone, MapPin } from "lucide-react";

export default function MobileTabBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-around h-[68px]">
        
        <a href="https://wa.me/60162235212" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center flex-1 h-full text-gray-500 hover:text-[#46c8a1] transition-colors relative">
          <Calendar className="w-[26px] h-[26px] mb-1 text-[#46c8a1]" />
          <span className="text-[10px] font-medium text-gray-800">Appointment</span>
          {/* Subtle active state border like competitor */}
          <div className="absolute inset-0 pointer-events-none border border-dashed border-[#46c8a1]/30 m-1 rounded-md bg-[#46c8a1]/5" />
        </a>

        <div className="w-[1px] h-8 bg-gray-200" />

        <a href="https://wa.me/60162235212" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center flex-1 h-full text-[#123659] hover:text-[#46c8a1] transition-colors">
          <MessageCircle className="w-[26px] h-[26px] mb-1" />
          <span className="text-[10px] font-medium text-gray-800">WhatsApp</span>
        </a>

        <div className="w-[1px] h-8 bg-gray-200" />

        <a href="tel:0162235212" className="flex flex-col items-center justify-center flex-1 h-full text-[#123659] hover:text-[#46c8a1] transition-colors">
          <Phone className="w-[26px] h-[26px] mb-1" />
          <span className="text-[10px] font-medium text-gray-800">Call</span>
        </a>

        <div className="w-[1px] h-8 bg-gray-200" />

        <a href="https://maps.google.com/?q=Klinik+Subha+Beaufort" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center flex-1 h-full text-[#123659] hover:text-[#46c8a1] transition-colors">
          <MapPin className="w-[26px] h-[26px] mb-1" />
          <span className="text-[10px] font-medium text-gray-800">Map</span>
        </a>

      </div>
    </div>
  );
}
