export default function OperatingHours() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
            <div>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-1">
                Operating Hours
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                8:00 AM – 9:00 PM
              </h3>
            </div>
            <div>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-1">
                Availability
              </p>
              <p className="text-lg font-semibold text-foreground">
                Open every day, 365 days
              </p>
              <p className="text-sm text-muted mt-0.5">
                Including weekends &amp; public holidays
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-1">
                Our Locations
              </p>
              <p className="text-lg font-semibold text-foreground">
                Beaufort &amp; Membakut
              </p>
              <p className="text-sm text-muted mt-0.5">
                Two branches across Sabah
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
