"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ICONS = [
  "/images/mac-cursor.png",
  "/images/lightsaber.png",
  "/images/basketball.png",
  "/images/bike.png",
] as const;

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorIndex, setCursorIndex] = useState(0);
  const clickCount = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      clickCount.current++;

      if (clickCount.current === 3) {
        setCursorIndex((prev) => (prev + 1) % ICONS.length);
        clickCount.current = 0;
      }

      timeoutRef.current = setTimeout(() => {
        clickCount.current = 0;
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorIndex((prev) => (prev + 1) % ICONS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{ x: position.x + 20, y: position.y + 20 }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    >
      <motion.img
        src={ICONS[cursorIndex]}
        alt="cursor"
        className="w-12 h-12 rounded-xl object-cover"
        initial={{ scale: 0.8, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 260 }}
      />
    </motion.div>
  );
}
