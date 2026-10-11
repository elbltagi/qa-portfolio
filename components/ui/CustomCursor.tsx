"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view" | "inspect">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if touch device, coarse pointer, or user prefers reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || isReduced) return;

    let prevTarget: EventTarget | null = null;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target || target === prevTarget) return;
      prevTarget = target;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor") as "hover" | "view" | "inspect";
        setCursorVariant(type || "hover");
        setCursorText(cursorTarget.getAttribute("data-cursor-text") || "");
      } else if (target.closest("button, a, input, select, textarea")) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono text-[10px] uppercase font-bold tracking-wider rounded-full will-change-transform"
      style={{
        width: 36,
        height: 36,
        x: position.x - 18,
        y: position.y - 18,
        mixBlendMode: cursorVariant === "hover" ? "difference" : "normal",
      }}
      animate={{
        scale:
          cursorVariant === "view" || cursorVariant === "inspect"
            ? 2.0
            : cursorVariant === "hover"
            ? 1.15
            : 0.35,
        backgroundColor:
          cursorVariant === "inspect"
            ? "#FF5A36"
            : cursorVariant === "view"
            ? "#181818"
            : cursorVariant === "hover"
            ? "#C6F36B"
            : "#FF5A36",
        color: cursorVariant === "view" ? "#F4F1EA" : "#181818",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 350, mass: 0.15 }}
    >
      {cursorText && (
        <span className="text-center px-1 leading-tight select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
