import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Klinik Subha",
  description: "Important medical disclaimer for Klinik Subha's website.",
};

export default function DisclaimerPage() {
  return (
    <main className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-2 block">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Medical Disclaimer</h1>
          <p className="text-sm text-gray-400">Last updated: April 2025</p>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Not a Substitute for Professional Medical Advice</h2>
            <p>
              The information provided on this website is for general informational purposes only.
              It is not intended to be - and should not be used as - a substitute for professional
              medical advice, diagnosis, or treatment. Always seek the advice of your doctor or a
              qualified healthcare provider with any questions you may have regarding a medical
              condition.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">No Doctor-Patient Relationship</h2>
            <p>
              Visiting this website or contacting us via WhatsApp, social media, or any other
              channel does not establish a doctor-patient relationship. A formal consultation at
              our clinic is required before any medical advice, diagnosis, or treatment can be given.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Emergency Situations</h2>
            <p>
              If you are experiencing a medical emergency, please call <strong>999</strong> or go
              to your nearest hospital emergency department immediately. Do not rely on this website
              or WhatsApp messages for urgent medical guidance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Service Information</h2>
            <p>
              Details about our services, operating hours, and facilities are provided in good faith
              and kept as accurate as possible. However, they are subject to change without notice.
              Please call or WhatsApp us to confirm availability before visiting.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">External Links</h2>
            <p>
              This website may contain links to third-party services (such as Google Maps and
              WhatsApp). Klinik Subha is not responsible for the content or privacy practices of
              those external services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact Us</h2>
            <p>If you have questions about this disclaimer, please contact us at either branch:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Klinik Subha Beaufort</strong> - 087-212 157 / 016-223 5212</p>
              <p><strong>Klinik Subha Membakut</strong> - 087-887 788 / 016-298 5212</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
