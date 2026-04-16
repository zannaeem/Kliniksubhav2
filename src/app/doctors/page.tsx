"use client";

import Image from "next/image";
import { AnimatedText } from "@/components/ui/animated-underline-text";
import { doctors } from "@/lib/data/doctors";
import VideoHero from "@/components/ui/video-hero";
import WhatsAppDoctorButton from "@/components/ui/whatsapp-doctor-button";

export default function DoctorsPage() {
  return (
    <main>
      <VideoHero
        label="Our Team"
        title="Meet Our Doctors"
        subtitle="Experienced, compassionate, and dedicated to your health and wellbeing."
      />

      {/* Doctor Profiles */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 space-y-16">
          {doctors.map((doctor, idx) => (
            <div
              key={doctor.id}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 items-center`}
            >
              <div className="w-full md:w-1/3">
                <div className="relative h-[360px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <AnimatedText
                  text={doctor.name}
                  textClassName="text-2xl md:text-3xl font-bold text-gray-900 text-left"
                  underlineClassName="text-accent"
                  className="items-start"
                />
                <p className="mt-6 text-sm font-semibold text-secondary uppercase tracking-wide">
                  {doctor.role}
                </p>
                <p className="mt-6 text-foreground/70 leading-relaxed max-w-lg">
                  {doctor.bio}
                </p>
                <WhatsAppDoctorButton
                  shortName={doctor.shortName}
                  gender={doctor.gender}
                  whatsappNumber={doctor.whatsappNumber}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
