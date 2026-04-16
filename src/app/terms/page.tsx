import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Klinik Subha",
  description: "Terms and conditions for using the Klinik Subha website.",
};

export default function TermsPage() {
  return (
    <main className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-2 block">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
          <p className="text-sm text-gray-400">Last updated: April 2025</p>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website (kliniksubha.com), you agree to be bound by these
              Terms of Use. If you do not agree with any part of these terms, please do not use this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Use of This Website</h2>
            <p>This website is provided for informational purposes. You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use this website for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to any part of the website</li>
              <li>Reproduce or distribute content from this website without written permission</li>
              <li>Use this website to harass, abuse, or harm others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. WhatsApp Booking</h2>
            <p>
              Appointment requests made via WhatsApp links on this website are not confirmed until
              you receive a reply from our clinic staff. We reserve the right to decline or
              reschedule appointments based on availability and clinical need.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website - including text, images, logos, and design - is the
              property of Jash Pillay Medresources Sdn Bhd unless stated otherwise. You may not
              reproduce or use any content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p>
              Klinik Subha and Jash Pillay Medresources Sdn Bhd shall not be liable for any
              direct or indirect damages arising from your use of this website, reliance on its
              content, or inability to access the website at any given time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Changes to These Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be posted on
              this page with an updated date. Continued use of the website after changes are posted
              constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Malaysia. Any disputes arising shall be
              subject to the jurisdiction of Malaysian courts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Contact</h2>
            <p>For any enquiries regarding these terms, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Klinik Subha Beaufort</strong> - 016-2235212</p>
              <p><strong>Klinik Subha Membakut</strong> - 087-887 788</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
