import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Klinik Subha",
  description: "Learn how Klinik Subha collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-2 block">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: April 2025</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              Klinik Subha (operated by Jash Pillay Medresources Sdn Bhd) is a primary healthcare
              clinic with branches in Beaufort and Membakut, Sabah, Malaysia. We are committed to
              protecting the privacy of our patients and website visitors in accordance with the
              Personal Data Protection Act 2010 (PDPA) of Malaysia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Name, date of birth, and identification number (for patient registration)</li>
              <li>Contact details — phone number and address</li>
              <li>Medical history and clinical notes (for treatment purposes only)</li>
              <li>Messages sent to us via WhatsApp or other communication channels</li>
            </ul>
            <p className="mt-3">
              This website itself does not collect any personal data through forms or cookies beyond
              standard web server logs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>Your personal information is used solely for:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Providing medical consultation, treatment, and follow-up care</li>
              <li>Scheduling and managing appointments</li>
              <li>Communicating with you regarding your health and our services</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell, rent, or share your personal data with third parties
              for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. How We Protect Your Data</h2>
            <p>
              Patient records are stored securely within our clinic management system. Physical
              records are kept in restricted-access areas. Our staff are bound by professional
              confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
            <p>
              This website uses Google Maps embeds to display our clinic locations. By viewing these
              maps, you may be subject to Google&apos;s Privacy Policy. We also link to WhatsApp for
              appointment bookings — messages sent via WhatsApp are subject to Meta&apos;s privacy terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <p>
              Under the PDPA 2010, you have the right to access, correct, or request deletion of
              your personal data held by us. To make a request, please contact us directly at either
              of our branches.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be reflected on this
              page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Klinik Subha Beaufort</strong> — 016-2235212</p>
              <p><strong>Klinik Subha Membakut</strong> — 087-887 788</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
