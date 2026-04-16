"use client"

export default function AboutClinic() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Text content */}
          <div className="flex-1 max-w-xl">
            <span className="inline-block px-5 py-2 bg-[#46c8a1]/10 rounded-full text-xs font-bold uppercase tracking-[0.08em] text-[#46c8a1] mb-6">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Rooted in Sabah,
              <span className="block text-[#46c8a1]">Trusted Since 1990.</span>
            </h2>
            <p className="text-gray-700 text-[17px] md:text-[18px] leading-[1.8] mb-5">
              Founded by Dr. Subhagan Chandran, Klinik Subha started as a single GP clinic in Beaufort in 1990. Over 35 years later, we have grown to serve more communities across Sabah, with branches in <strong>Beaufort</strong> and <strong>Membakut</strong> - bringing the same standard of care closer to where people live.
            </p>
            <p className="text-gray-700 text-[17px] md:text-[18px] leading-[1.8] mb-8">
              Each clinic is open daily from <strong>8:00 AM to 9:00 PM</strong> including public holidays, so you always have somewhere to go when it matters most.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Beaufort's oldest GP clinic, founded in 1990",
                "Open daily 8AM to 9PM, every day of the year",
                "Panel clinic for major insurers and corporates",
                "Digital X-Ray, Ultrasound, ECG and full lab on-site",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#46c8a1] flex items-center justify-center mt-1">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[17px] md:text-[18px] leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-700 transition-all duration-300"
            >
              Discover Our Story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: Corporate video */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed/arcxcJ1C7yA?rel=0&modestbranding=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
