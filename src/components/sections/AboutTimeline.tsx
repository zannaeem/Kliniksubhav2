"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const milestones = [
  {
    year: "1990",
    title: "Our Origins",
    body: "Klinik Subha Beaufort was founded by Dr. Subhagan Chandran in Beaufort - a small clinic with a straightforward purpose: to make reliable healthcare available to everyone in the community, regardless of background.",
    aside: "Beaufort, Sabah",
    image: "/images/about/old-clinic.png",
    imageAlt: "The original Klinik Subha clinic in Beaufort",
  },
  {
    year: "2018",
    title: "A New Chapter",
    body: "Dr. Jason Jimmy Lee Pillay took over the practice under Jash Pillay Medresources Sdn Bhd. His approach was simple - honour what Dr. Subhagan built, and build further. Modern diagnostic tools were introduced, and the clinic's reputation for personal, unhurried care was kept intact.",
    aside: "Jash Pillay Medresources Sdn Bhd · est. 17 Aug 2018",
    image: "/images/about/dr-jason.jpg",
    imageAlt: "Dr. Jason Jimmy Lee Pillay",
  },
  {
    year: "2021",
    title: "Strategic Expansion",
    body: "The clinic relocated to a dual-shoplot space at Beaufort Square - a purpose-designed facility equipped with ultrasound, X-ray, ECG, and a full blood count machine. For the first time, patients could complete a full diagnostic workup in a single visit, without travelling to the city.",
    aside: "Beaufort Square, 89800 Beaufort",
    image: "/images/about/activity-2021.jpg",
    imageAlt: "Klinik Subha Beaufort Square facility",
  },
  {
    year: "Present",
    title: "Growing With You",
    body: "Today, the Klinik Subha group spans three facilities: our flagship clinic in Beaufort, the Kinabalu Medic Spine and Rehabilitation Centre, and the soon-to-open Membakut branch. Each one reflects the same founding belief - that good healthcare starts with actually listening.",
    aside: "Three locations · Beaufort, Membakut & Beyond",
    image: "/images/about/activity-present.jpg",
    imageAlt: "Recent moments at Klinik Subha",
  },
];

function TimelineNode({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  // Even index (0, 2): text LEFT, photo RIGHT
  // Odd index  (1, 3): photo LEFT, text RIGHT
  const textOnLeft = index % 2 === 0;

  return (
    <div ref={ref} className="mb-14 md:mb-28">
      {/* ── Mobile layout: single column with dot on left ── */}
      <motion.div
        className="md:hidden flex gap-5"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center pt-1">
          <div className="w-3 h-3 rounded-full bg-[#46c8a1] ring-[3px] ring-[#46c8a1]/20 shrink-0" />
          <div className="w-px flex-1 bg-gray-100 mt-2" />
        </div>
        <div className="flex-1 pb-6">
          <span className="text-[10px] font-bold tracking-widest text-[#46c8a1] uppercase block mb-2">
            {milestone.year}
          </span>
          <TextBlock milestone={milestone} />
          <div className="mt-4 relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
            <Image src={milestone.image} alt={milestone.imageAlt} fill className="object-cover" />
          </div>
        </div>
      </motion.div>

      {/* ── Desktop layout: alternating left/right ── */}
      <div className="hidden md:grid grid-cols-[1fr_60px_1fr] gap-0">
        {/* Left cell */}
        <div className="flex justify-end items-center pr-10">
          {textOnLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-xs text-right"
            >
              <TextBlock milestone={milestone} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-full max-w-xs"
            >
              <PhotoBlock milestone={milestone} />
            </motion.div>
          )}
        </div>

        {/* Centre: dot + year */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.35, ease: "backOut", delay: 0.1 }}
            className="relative z-10"
          >
            <div className="w-4 h-4 rounded-full bg-[#46c8a1] ring-4 ring-[#46c8a1]/20" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[10px] font-bold tracking-widest text-[#46c8a1] uppercase whitespace-nowrap"
          >
            {milestone.year}
          </motion.span>
        </div>

        {/* Right cell */}
        <div className="flex justify-start items-center pl-10">
          {textOnLeft ? (
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-full max-w-xs"
            >
              <PhotoBlock milestone={milestone} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-xs"
            >
              <TextBlock milestone={milestone} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function TextBlock({ milestone }: { milestone: (typeof milestones)[number] }) {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug">
        {milestone.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{milestone.body}</p>
      <span className="inline-block text-[11px] text-gray-400 font-medium tracking-wide">
        {milestone.aside}
      </span>
    </div>
  );
}

function PhotoBlock({ milestone }: { milestone: (typeof milestones)[number] }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
      <Image
        src={milestone.image}
        alt={milestone.imageAlt}
        fill
        className="object-cover"
      />
    </div>
  );
}

export default function AboutTimeline() {
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-16 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HvI Intro */}
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 24 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12 md:mb-32"
        >
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#46c8a1] mb-5 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6">
            Three decades of showing up
            <br className="hidden md:block" /> for the people of Beaufort.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-4">
            Klinik Subha started in 1990 as a single clinic in Beaufort. Not
            with a grand vision statement, but with a simple commitment - that
            everyone around here deserves a doctor who actually listens.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            That idea hasn&apos;t changed. What has changed is how far we can take it.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical centre line - desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2"
            aria-hidden="true"
          />

          {milestones.map((milestone, index) => (
            <TimelineNode key={milestone.year} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
