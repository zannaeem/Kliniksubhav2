"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Do I need to make an appointment?",
    a: "No appointment needed - we welcome walk-ins every day at both branches. If you'd like to book with a specific doctor, WhatsApp us at 016-2235212.",
  },
  {
    q: "Are you open on public holidays?",
    a: "Our Beaufort branch is open every day from 8:00 AM to 9:00 PM. Our Membakut branch is open Monday to Saturday from 8:00 AM to 8:00 PM. Both branches operate on public holidays.",
  },
  {
    q: "What services do you offer?",
    a: "We offer general consultation, health screenings, vaccinations, family planning, X-Ray, ECG, ultrasound, wound care, and more.",
  },
  {
    q: "Do you offer health screening packages?",
    a: "Yes - we offer screenings for diabetes, cholesterol, blood pressure, kidney and liver function, and more. WhatsApp us for the latest packages.",
  },
  {
    q: "Do I need to bring anything for my first visit?",
    a: "Just bring your MyKad (IC) or passport. If you have existing medical records or a referral letter, bring those too.",
  },
  {
    q: "Which branch should I go to?",
    a: "We have two branches - Beaufort Square and Membakut. Both offer the same standard of care. Visit our Contact page to find the one nearest to you.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-2 block">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Common questions, quick answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm">{item.q}</span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 1v8M1 5h8" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#46c8a1] hover:text-[#38b890] transition-colors"
          >
            View all FAQs
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
