"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GridBackground from "./grid-background";
import { ParticlesBackground } from "./particles-background";

export function BackgroundSwitcher() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Fond sombre + grille en mode dark, fond clair + particules en mode light
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {resolvedTheme === "light" ? (
        <>
          <div
            className="fixed inset-0 w-full h-full z-0"
            style={{
              backgroundColor: "rgb(255, 251, 235)",
            }}
          />
          <ParticlesBackground />
        </>
      ) : (
        <>
          <div
            className="fixed inset-0 w-full h-full z-0"
            style={{
              backgroundColor: "#0a0a0a",
            }}
          />
          <GridBackground />
        </>
      )}
    </div>
  );
}
