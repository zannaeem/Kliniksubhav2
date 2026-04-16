"use client";

import { useState } from "react";

interface Props {
  serviceName: string;
  whatsappNumber: string;
}

const MESSAGES = {
  en: (name: string) =>
    `Hi Klinik Subha! I'm interested in ${name}. Could I get more info? Thanks!`,
  ms: (name: string) =>
    `Hai Klinik Subha! Saya nak tanya pasal ${name}. Boleh bagi info sikit? Terima kasih!`,
};

export default function WhatsAppBookButton({ serviceName, whatsappNumber }: Props) {
  const [lang, setLang] = useState<"en" | "ms">("en");

  const message = MESSAGES[lang](serviceName);
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="space-y-4">
      {/* Language picker */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400 mb-2">
          Message language
        </p>
        <div className="inline-flex rounded-xl border border-gray-100 bg-gray-50 p-1 gap-1">
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              lang === "en"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang("ms")}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              lang === "ms"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Bahasa Melayu
          </button>
        </div>
      </div>

      {/* Message preview */}
      <div className="bg-[#f0fdf6] border border-[#46c8a1]/20 rounded-xl px-4 py-3">
        <p className="text-xs text-gray-400 mb-1 font-medium">Preview</p>
        <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
      </div>

      {/* WhatsApp button */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1aaa4f] text-white font-semibold px-6 py-4 rounded-2xl transition-colors text-sm"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Book Appointment via WhatsApp
      </a>

      <p className="text-center text-xs text-gray-400">
        Opens WhatsApp with your message pre-filled · We reply within the hour
      </p>
    </div>
  );
}
