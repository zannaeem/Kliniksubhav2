"use client";

import {
  Heart,
  Stethoscope,
  MonitorSmartphone,
  Users,
  MapPin,
  Clock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const stats = [
  { value: 35, suffix: "+", label: "Years in Sabah" },
  { value: 2, suffix: "", label: "Branches" },
  { value: 15, suffix: "+", label: "Panel Insurers" },
  { value: 365, suffix: "", label: "Days Open" },
];

const features = [
  {
    icon: Stethoscope,
    title: "Experienced Doctors",
    description:
      "Decades of combined clinical experience ensuring the highest standard of care at every consultation.",
    accent: true,
    index: 1,
  },
  {
    icon: Heart,
    title: "Comprehensive Care",
    description:
      "From general outpatient to chronic disease management, maternity, and vaccinations — all under one roof.",
    accent: false,
    index: 2,
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Facilities",
    description:
      "On-site ultrasound, X-Ray, ECG, and full blood count testing with up-to-date equipment.",
    accent: false,
    index: 3,
  },
  {
    icon: Users,
    title: "Patient-First Approach",
    description:
      "We treat every patient as family — listening, understanding, and guiding you through your health journey.",
    accent: true,
    index: 4,
  },
  {
    icon: MapPin,
    title: "Conveniently Located",
    description:
      "Two branches across Sabah, making quality healthcare easy to reach wherever you are.",
    accent: false,
    index: 5,
  },
  {
    icon: Clock,
    title: "Open Every Day",
    description:
      "8AM–9PM daily, including public holidays. Because your health doesn't wait.",
    accent: false,
    index: 6,
    wide: true,
  },
];

/* ─── Animated Counter ──────────────────────────────────────────────────── */

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Feature Card ──────────────────────────────────────────────────────── */

function FeatureCard({
  feature,
  className,
}: {
  feature: (typeof features)[number];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isAccent = feature.accent;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${feature.index * 70}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className={`
        group rounded-2xl p-6 md:p-7 border transition-colors duration-300
        ${isAccent
          ? "bg-[#46c8a1]/10 border-[#46c8a1]/20 hover:bg-[#46c8a1]/15"
          : "bg-white/5 border-white/8 hover:bg-white/8"
        }
        ${className ?? ""}
      `}
    >
      <div
        className={`
          w-10 h-10 rounded-xl flex items-center justify-center mb-5
          ${isAccent ? "bg-[#46c8a1]/15" : "bg-white/8"}
        `}
      >
        <feature.icon
          className={`w-4.5 h-4.5 ${isAccent ? "text-[#46c8a1]" : "text-white/50"}`}
          size={18}
        />
      </div>

      <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-white/45">
        {feature.description}
      </p>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */

const regular = features.filter((f) => !f.wide);
const wide = features.find((f) => f.wide)!;

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 px-3 sm:px-4">
      <div className="rounded-3xl bg-gray-900 px-8 py-16 md:px-16 md:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-[#46c8a1]/15 rounded-full text-xs font-bold uppercase tracking-[0.08em] text-[#46c8a1] mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Why choose Klinik Subha
            </h2>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 pb-14 border-b border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white tracking-tight tabular-nums">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/40 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Bento feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">

            {/* Row 1 — two half-width */}
            {regular.slice(0, 2).map((feature) => (
              <FeatureCard key={feature.title} feature={feature} className="md:col-span-3" />
            ))}

            {/* Row 2 — three equal-width */}
            {regular.slice(2, 5).map((feature) => (
              <FeatureCard key={feature.title} feature={feature} className="md:col-span-2" />
            ))}

            {/* Row 3 — full-width */}
            <FeatureCard feature={wide} className="md:col-span-6" />

          </div>

        </div>
      </div>
    </section>
  );
}
