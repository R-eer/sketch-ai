"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorEffect() {
  const cursorRef = useRef<SVGSVGElement>(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button, a, .cursor-hover") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "INPUT"
      ) {
        setHovered(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button, a, .cursor-hover") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "INPUT"
      ) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  const size = hovered ? 70 : 40;

  return (
    <svg
      ref={cursorRef}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        position: "fixed",
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 0.2s ease, height 0.2s ease",
        mixBlendMode: "difference",
      }}
    >
      <path
        d="M 50 8 C 62 6, 76 10, 85 20 C 96 31, 98 45, 93 58 C 88 72, 76 84, 62 90 C 48 96, 32 94, 20 85 C 8 76, 2 60, 5 46 C 8 30, 20 14, 35 9 C 40 7, 46 9, 50 8 Z"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
