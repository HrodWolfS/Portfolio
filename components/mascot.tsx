"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const icons = [
  "/images/mac-cursor.png",
  "/images/basketball.png",
  "/images/bike.png",
  "/images/lightsaber.png",
];

export function Mascot() {
  const [iconIndex, setIconIndex] = useState(0);
  const [clicks, setClicks] = useState<number[]>([]);

  const handleClick = () => {
    setIconIndex((prev) => (prev + 1) % icons.length);
  };

  const handleGlobalClick = () => {
    const now = Date.now();
    setClicks((prev) => [...prev, now].filter((time) => now - time <= 1000));
  };

  useEffect(() => {
    if (clicks.length >= 2) {
      setIconIndex((prev) => (prev + 1) % icons.length);
      setClicks([]);
    }
  }, [clicks]);

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <motion.div
      className="w-10 h-10 cursor-pointer relative"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 0.5,
        times: [0, 0.25, 0.75, 1],
      }}
    >
      <Image
        src={icons[iconIndex]}
        alt="Mascot"
        fill
        className="object-contain"
      />
    </motion.div>
  );
}
