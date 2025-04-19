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
                  ? "bg-orange-400/30 text-orange-300 dark:bg-yellow-500/30 dark:text-yellow-300 border border-orange-400/50"
                  : "bg-blue-400/30 text-blue-400 dark:bg-blue-500/30 dark:text-blue-300 border border-blue-400/50"
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
      <div className="h-2 bg-white/10 dark:bg-white/5 rounded-full overflow-hidden">
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
