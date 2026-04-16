import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-[#46c8a1] mb-6">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#46c8a1] hover:bg-[#38b890] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-600 font-semibold px-6 py-3 rounded-full text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
