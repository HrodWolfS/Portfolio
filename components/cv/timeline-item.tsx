"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface TimelineItemProps {
  data: any;
  type: "experience" | "education";
  index: number;
}

export function TimelineItem({ data, type, index }: TimelineItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-12"
    >
      {/* Point lumineux */}
      <div className="absolute left-0 top-0 w-8 h-8">
        <div className="absolute inset-0 bg-[rgb(var(--accent-neon))] rounded-full opacity-20 animate-pulse" />
        <div className="absolute inset-2 bg-[rgb(var(--accent-neon))] rounded-full" />
      </div>

      {/* Contenu */}
      <div className="glassmorphism p-6 rounded-xl hover:scale-[1.02] transition-transform">
        <div className="flex items-start gap-4 mb-4">
          {data.logo ? (
            <img
              src={data.logo}
              alt={type === "experience" ? data.company : data.school}
              className="w-12 h-12 rounded-full object-cover bg-white/10"
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
              {type === "experience" ? (
                <Briefcase size={24} />
              ) : (
                <GraduationCap size={24} />
              )}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-semibold neon-glow">
              {type === "experience" ? data.title : data.degree}
            </h3>
            <p className="text-[rgb(var(--accent-neon))] font-mono text-sm mb-1">
              {data.period}
            </p>
            <p className="text-gray-400">
              {type === "experience" ? data.company : data.school}
            </p>
          </div>
        </div>

        <p className="text-gray-300 mb-4">{data.description}</p>

        {/* Réalisations */}
        {data.achievements && (
          <ul className="space-y-2 mb-4">
            {data.achievements.map((achievement: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <span className="w-1.5 h-1.5 bg-[rgb(var(--accent-neon))] rounded-full" />
                {achievement}
              </motion.li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        {data.technologies && (
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="px-3 py-1 bg-white/5 rounded-full text-xs"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
