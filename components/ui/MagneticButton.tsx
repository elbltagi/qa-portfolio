"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    if (!ref.current || disabled) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    rectRef.current = ref.current.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (!rectRef.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
    const { clientX, clientY } = e;
    const { left, top, width, height } = rectRef.current;
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-[#FF5A36] text-[#181818] hover:bg-[#E04925] border border-[#FF5A36] shadow-sm font-bold",
    secondary:
      "bg-[#C6F36B] text-[#181818] hover:bg-[#B3E552] border border-[#C6F36B] font-semibold",
    dark:
      "bg-[#181818] text-[#F4F1EA] hover:bg-[#282828] border border-[#181818]",
    outline:
      "bg-transparent text-[#181818] hover:bg-[#181818] hover:text-[#F4F1EA] border-2 border-[#181818]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-mono",
    md: "px-6 py-3.5 text-sm font-mono tracking-tight",
    lg: "px-8 py-4.5 text-base font-mono tracking-tight",
  };

  const content = (
    <span
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.span
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", damping: 15, stiffness: 200, mass: 0.1 }}
        className={`group relative inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A36] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </motion.span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block focus:outline-none">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {content}
    </button>
  );
}
