"use client";

import { Code2 } from "lucide-react";

export function ProjectSkeleton() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,#000000,45%,#1a1a1a,55%,#000000)] bg-[length:200%_100%] animate-shimmer" />
      <Code2 className="w-16 h-16 text-[rgb(var(--accent-neon))] relative z-10 opacity-50" />
    </div>
  );
}
