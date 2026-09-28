import React, { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === "undefined") return true;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;
  });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isTouchDevice || typeof window === "undefined") return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (target) {
        const interactive =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button";
        setIsPointer(!!interactive);
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
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice || reducedMotion || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Outer subtle ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-colors duration-200 ${
            isPointer ? "border-cyan-400 bg-cyan-400/10" : "border-slate-500/40"
          }`}
        />
      </div>

      {/* Center sharp dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 2.5}px, ${position.y - 2.5}px, 0)`,
        }}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            isPointer ? "bg-cyan-300" : "bg-cyan-400"
          }`}
        />
      </div>
    </>
  );
}
