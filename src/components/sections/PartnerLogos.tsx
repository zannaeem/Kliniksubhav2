"use client"

import { Sparkles } from "@/components/ui/sparkles"
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const logoFiles = [2,3,4,5,6,7,8,9,10,11,12,13,14,15]

export default function PartnerLogos() {
  return (
    <section className="relative bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Content layer */}
      <div className="relative z-10 pt-24 pb-0">
        <div className="mx-auto w-full max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#46c8a1] mb-3">
            Our Partners
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted panel partners
          </h2>
          <p className="text-muted text-lg font-normal mt-2">
            We work with leading insurance and corporate partners.
          </p>
        </div>

        {/* Infinite logo slider */}
        <div className="relative mt-8 md:mt-12 w-full overflow-hidden h-[80px] md:h-[140px]">
          <div className="marquee-track h-full items-center">
            {/* Three copies so -33.333% always lands cleanly */}
            {[...logoFiles, ...logoFiles, ...logoFiles].map((n, i) => (
              <div key={`logo-${i}`} className="flex items-center justify-center mx-6 md:mx-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/media/partner-logo/${n}.png`}
                  alt={`partner-${n}`}
                  className="h-[60px] md:h-[110px] w-auto block object-contain"
                />
              </div>
            ))}
          </div>
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 left-0 h-full w-[40px] sm:w-[100px] md:w-[200px]'
            direction='left'
            blurIntensity={1}
          />
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 right-0 h-full w-[40px] sm:w-[100px] md:w-[200px]'
            direction='right'
            blurIntensity={1}
          />
        </div>
      </div>

      {/* Half-rounded gradient + sparkles background */}
      <div className="relative h-[380px] md:h-72 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] -mt-4 md:mt-0">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#46c8a1,transparent_80%)] md:before:bg-[radial-gradient(circle_at_bottom_center,#46c8a1,transparent_70%)] before:opacity-60 md:before:opacity-40" />
        <div className="absolute -left-1/2 top-[40%] md:top-1/2 aspect-[1/0.7] md:aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-[#46c8a1]/20 bg-white" />
        <Sparkles
          density={800}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(60%_60%,white,transparent_90%)] md:[mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#46c8a1"
        />
      </div>
    </section>
  )
}
