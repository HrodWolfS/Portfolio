"use client"

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Désactive le scroll du body quand le modal est ouvert
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glassmorphism rounded-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Galerie d'images */}
        <div className="relative h-80">
          <Image
            src={project.gallery[0]}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
        </div>

        {/* Contenu */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[rgb(var(--accent-neon))] hover:underline"
                >
                  <ArrowUpRight size={16} />
                  Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[rgb(var(--accent-neon))] hover:underline"
                >
                  <Github size={16} />
                  Code source
                </a>
              </div>
            </div>
            <span className="text-sm font-mono text-[rgb(var(--accent-neon))]">
              {project.year}
            </span>
          </div>

          <p className="text-gray-300 mb-8">
            {project.longDescription}
          </p>

          {/* Défis techniques */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Défis techniques</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-gray-400">
                  <span className="w-1.5 h-1.5 bg-[rgb(var(--accent-neon))] rounded-full" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}