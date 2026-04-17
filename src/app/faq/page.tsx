import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Klinik Subha",
  description: "Frequently asked questions about Klinik Subha - appointments, services, operating hours, and more.",
};

const faqs = [
  {
    category: "Appointments & Registration",
    items: [
      {
        q: "Do I need to make an appointment?",
        a: "No appointment is needed - we accept walk-ins at both branches every day. However, if you prefer to plan ahead or want to book with a specific doctor, you can contact us via WhatsApp.",
      },
      {
        q: "How do I book an appointment?",
        a: "The easiest way is via WhatsApp at 016-2235212 (Beaufort) or 016-298 5212 (Membakut). You can also use the booking buttons on our Doctors or Services pages.",
      },
      {
        q: "Do I need to bring anything for my first visit?",
        a: "Please bring your MyKad (IC) or passport. If you have existing medical records or a referral letter, bring those too. For children, bring their immunisation booklet.",
      },
      {
        q: "Is there a registration fee?",
        a: "A standard consultation fee applies. Our fees are kept affordable - please contact us directly for the latest fee schedule.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        q: "What services do you offer?",
        a: "We offer general consultation, health screenings, vaccinations, family planning, X-Ray, ECG, ultrasound, wound care, and more. Visit our Services page for the full list.",
      },
      {
        q: "Do you offer health screening packages?",
        a: "Yes, we offer a range of health screenings including diabetes, cholesterol, blood pressure, kidney function, liver function, and more. Check our Services page or WhatsApp us for current packages.",
      },
      {
        q: "Do you provide vaccinations for adults?",
        a: "Yes - we offer vaccinations for adults including Hepatitis B, Influenza, HPV (Gardasil), Pneumococcal, and others. Contact us to confirm availability.",
      },
      {
        q: "Is X-Ray available at both branches?",
        a: "X-Ray is currently available at our Beaufort branch. Please contact us to confirm availability at Membakut.",
      },
    ],
  },
  {
    category: "Operating Hours & Location",
    items: [
      {
        q: "What are your opening hours?",
        a: "We are open every day - Monday to Sunday, including public holidays - from 8:00 AM to 9:00 PM.",
      },
      {
        q: "Are you open on public holidays?",
        a: "Yes, Klinik Subha is open on all public holidays during regular hours (8:00 AM – 9:00 PM).",
      },
      {
        q: "Where is the Beaufort branch?",
        a: "Lot C-019 & C-020, Ground Floor, Beaufort Square, 89800 Beaufort, Sabah. See our Contact page for a map.",
      },
      {
        q: "Where is the Membakut branch?",
        a: "Lot 5, Tingkat Bawah, Block A, Kedai Membakut Jaya Baru, 89727 Membakut, Sabah. See our Contact page for a map.",
      },
    ],
  },
  {
    category: "Payments & Insurance",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, DuitNow QR, and major debit/credit cards. Please contact us to confirm the latest payment options.",
      },
      {
        q: "Do you accept panel insurance?",
        a: "We accept selected panel insurance. Please contact us with your insurer's name to confirm whether your panel is accepted before visiting.",
      },
      {
        q: "Do you accept MySejahtera or government subsidies?",
        a: "Please contact us directly to find out about any applicable government health subsidy programmes.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="py-20 md:py-32 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-2 block">
            Help
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-base">
            Can&apos;t find your answer here? WhatsApp us at{" "}
            <a href="https://wa.me/60162235212" className="text-[#46c8a1] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
              016-2235212
            </a>{" "}
            and we&apos;ll get back to you.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-base font-bold uppercase tracking-[0.12em] text-[#46c8a1] mb-5">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.q}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#46c8a1] rounded-3xl p-8 text-center">
          <p className="text-white font-semibold text-lg mb-2">Still have questions?</p>
          <p className="text-white/80 text-sm mb-6">Our team is happy to help - reach out anytime.</p>
          <a
            href="https://wa.me/60162235212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#46c8a1] font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
