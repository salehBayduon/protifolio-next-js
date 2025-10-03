"use client";
import { useEffect, useState } from "react";

export default function CursorShadow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-32 h-32 rounded-full 
                  bg-[#ffc800]/20 pointer-events-none 
                  transform -translate-x-1/2 -translate-y-1/2 
                  transition-all duration-300 ease-out z-50
                  ${hovering ? "scale-125 bg-blue-500/30" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        filter: "blur(40px)",
      }}
    />
  );
}
