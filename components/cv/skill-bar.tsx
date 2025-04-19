"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    badge?: string;
  };
}

export function SkillBar({ skill }: SkillBarProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{skill.name}</span>
          {skill.badge && (
            <span
              className={`
              px-2 py-0.5 text-xs rounded-full font-medium
              ${
                skill.badge === "En cours"
                  ? "bg-yellow-500/20 text-yellow-300"
                  : "bg-blue-500/20 text-blue-300"
              }
            `}
            >
              {skill.badge}
            </span>
          )}
        </div>
        <span className="text-sm font-mono text-[rgb(var(--accent-neon))]">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[rgb(var(--accent-neon))] rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
