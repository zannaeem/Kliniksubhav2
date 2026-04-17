const stats = [
  { value: "35+", label: "Years Serving Beaufort" },
  { value: "3", label: "Specialist Doctors" },
  { value: "15+", label: "Panel Insurance Partners" },
  { value: "Daily", label: "Open Every Public Holiday" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-foreground/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
