"use client"

import { Sparkles } from "@/components/ui/sparkles"
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

type LogoEntry = {
  src: string
  /** pill/square rounded corners */
  rounded?: boolean
  /** wider landscape crop box */
  landscape?: boolean
  /** bump up display size */
  large?: boolean
  /** jump to extra large display size */
  xlarge?: boolean
  /** crop to a square with heavy rounded edges */
  cropRounded?: boolean
}

const logoFiles: LogoEntry[] = [
  { src: '/media/partner-logo/2.png' },
  { src: '/media/partner-logo/MDB.jpeg' },
  { src: '/media/partner-logo/4.png' },
  { src: '/media/partner-logo/6.png' },
  { src: '/media/partner-logo/7.png' },
  { src: '/media/partner-logo/8.png' },
  { src: '/media/partner-logo/9.png' },
  { src: '/media/partner-logo/10.png' },
  { src: '/media/partner-logo/khazanahhealthcare.jpeg', xlarge: true },
  { src: '/media/partner-logo/12.png' },
  { src: '/media/partner-logo/13.png' },
  { src: '/media/partner-logo/14.png' },
  { src: '/media/partner-logo/15.png', xlarge: true },
  { src: '/media/partner-logo/loji.png', rounded: true },
  { src: '/media/partner-logo/sdsfreshmart.jpeg', xlarge: true },
  { src: '/media/partner-logo/winwin.jpeg', cropRounded: true },
]

// Base large logos (Secret Recipe + HLB)
const largeSrcs = new Set(['/media/partner-logo/6.png', '/media/partner-logo/15.png'])

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
        <div className="relative mt-8 md:mt-12 w-full overflow-hidden h-[140px] md:h-[140px]">
          <div className="marquee-track h-full items-center">
            {/* Three copies so -33.333% always lands cleanly */}
            {[...logoFiles, ...logoFiles, ...logoFiles].map((logo, i) => {
              const isLarge = largeSrcs.has(logo.src) || logo.large
              let heightCls = 'h-[110px] md:h-[100px]'
              if (isLarge) heightCls = 'h-[150px] md:h-[130px]'
              if (logo.xlarge) heightCls = 'h-[180px] md:h-[160px]'

              if (logo.landscape) {
                // Landscape crop: fixed width×height box, object-cover, rounded rect
                return (
                  <div key={`logo-${i}`} className="flex items-center justify-center mx-6 md:mx-10">
                    <div className="w-[180px] h-[90px] md:w-[210px] md:h-[105px] rounded-3xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-100 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo.src}
                        alt={`partner-${i}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                )
              }
              if (logo.cropRounded) {
                return (
                  <div key={`logo-${i}`} className="flex items-center justify-center mx-6 md:mx-10">
                    <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-3xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo.src}
                        alt={`partner-${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )
              }
              return (
                <div key={`logo-${i}`} className="flex items-center justify-center mx-6 md:mx-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={`partner-${i}`}
                    className={`w-auto block object-contain ${heightCls}${logo.rounded ? ' rounded-2xl overflow-hidden' : ''}`}
                  />
                </div>
              )
            })}
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
