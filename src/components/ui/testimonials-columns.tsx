"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  rating: number;
  date?: string;
}

// Generate a consistent background colour from the reviewer's name
function avatarColor(name: string) {
  const colors = [
    "bg-[#46c8a1]",
    "bg-teal-500",
    "bg-emerald-500",
    "bg-cyan-500",
    "bg-green-500",
    "bg-sky-500",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return colors[hash % colors.length];
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, rating, date }, i) => (
              <div
                className="p-6 rounded-2xl border border-gray-100 bg-white max-w-xs w-full"
                key={i}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: rating }).map((_, s) => (
                    <span key={s} className="text-yellow-400 text-sm">
                      &#9733;
                    </span>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-foreground text-sm leading-relaxed">{text}</p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 mt-4">
                  {/* Initials avatar */}
                  <div
                    className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold ${avatarColor(name)}`}
                  >
                    {initials(name)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium text-sm text-foreground leading-5">
                      {name}
                    </div>
                    {date && (
                      <div className="leading-5 text-xs text-muted">{date}</div>
                    )}
                  </div>
                </div>

                {/* Source badge */}
                <p className="text-[10px] text-gray-400 mt-3">via Google Reviews</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
