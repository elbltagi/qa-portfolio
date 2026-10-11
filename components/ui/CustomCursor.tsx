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
    // Check if touch device or coarse pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

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

    window.addEventListener("mousemove", onMouseMove);
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
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono text-[10px] uppercase font-bold tracking-wider"
      animate={{
        x: position.x - (cursorVariant === "view" || cursorVariant === "inspect" ? 36 : cursorVariant === "hover" ? 18 : 6),
        y: position.y - (cursorVariant === "view" || cursorVariant === "inspect" ? 36 : cursorVariant === "hover" ? 18 : 6),
        width: cursorVariant === "view" || cursorVariant === "inspect" ? 72 : cursorVariant === "hover" ? 36 : 12,
        height: cursorVariant === "view" || cursorVariant === "inspect" ? 72 : cursorVariant === "hover" ? 36 : 12,
        backgroundColor:
          cursorVariant === "inspect"
            ? "#FF5A36"
            : cursorVariant === "view"
            ? "#181818"
            : cursorVariant === "hover"
            ? "#C6F36B"
            : "#FF5A36",
        color: cursorVariant === "view" ? "#F4F1EA" : "#181818",
        scale: 1,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 350, mass: 0.15 }}
      style={{
        borderRadius: "9999px",
        mixBlendMode: cursorVariant === "hover" ? "difference" : "normal",
      }}
    >
      {cursorText && (
        <span className="text-center px-1 leading-tight select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
