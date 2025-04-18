"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FilterButtonProps {
  children: ReactNode
  active: boolean
  onClick: () => void
}

export function FilterButton({ children, active, onClick }: FilterButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full flex items-center gap-2 transition-colors
        ${active
          ? 'bg-[rgb(var(--accent-neon))] text-black font-medium'
          : 'bg-white/5 hover:bg-white/10'
        }
      `}
    >
      {children}
    </motion.button>
  )
}