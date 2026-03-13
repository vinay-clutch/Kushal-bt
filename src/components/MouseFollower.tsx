"use client";
import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function MouseFollower() {
  const springConfig = { damping: 40, stiffness: 200 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="mouse-glow fixed inset-0 pointer-events-none z-[9999]"
      style={{
        translateX: mouseX,
        translateY: mouseY,
        x: "-50%",
        y: "-50%",
      }}
    />
  );
}
