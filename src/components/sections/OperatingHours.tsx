export default function OperatingHours() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left items-center">
            <div>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-1">
                Beaufort Branch
              </p>
              <h3 className="text-2xl font-bold text-foreground">
                8:00 AM – 9:00 PM
              </h3>
              <p className="text-sm text-muted mt-1">
                Open every day, 365 days
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-1">
                Membakut Branch
              </p>
              <p className="text-2xl font-bold text-foreground">
                8:00 AM – 8:00 PM
              </p>
              <p className="text-sm text-muted mt-1">
                Monday to Saturday (Closed Sundays)
              </p>
            </div>
            <div className="lg:border-l lg:border-gray-100 lg:pl-8">
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-1">
                Walk-ins Welcome
              </p>
              <p className="text-lg font-semibold text-foreground">
                Care when you need it
              </p>
              <p className="text-sm text-muted mt-0.5">
                No appointment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
