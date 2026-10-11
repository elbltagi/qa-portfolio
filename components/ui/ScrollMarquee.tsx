"use client";

import { useRef, useEffect } from "react";

interface MarqueeProps {
  text?: string;
  theme?: "light" | "dark" | "orange";
  className?: string;
}

export default function ScrollMarquee({
  text = "BUILD • TEST • IMPROVE • REPEAT",
  theme = "light",
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Repeat the slogan enough times to fill seamless scroll
  const items = Array.from({ length: 6 }, () => text);

  const themeClasses = {
    light: "bg-[#E8E5DD] text-[#181818] border-y border-[#D5D0C8]",
    dark: "bg-[#111215] text-[#F4F1EA] border-y border-white/10",
    orange: "bg-[#FF5A36] text-[#F4F1EA] border-y border-[#181818]",
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden py-4 select-none ${themeClasses[theme]} ${className}`}
      aria-hidden="true"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-12">
            <span>{item}</span>
            <span className="w-3 h-3 rounded-full bg-[#FF5A36] shrink-0"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
