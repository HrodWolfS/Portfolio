"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillBarProps {
  skill: {
    name: string
    level: number
  }
}

export function SkillBar({ skill }: SkillBarProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
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
  )
}