"use client";

import { motion } from "framer-motion";
import { Construction, Smartphone } from "lucide-react";
import Image from "next/image";
import { ProjectSkeleton } from "./project-skeleton";

interface ProjectCardProps {
  project: any;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl glassmorphism border border-white/10 hover:border-[rgb(var(--accent-neon))] transition-colors">
        {/* Badges */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 items-end">
          {project.wip && (
            <div className="px-3 py-1 bg-[rgb(var(--accent-neon))] text-black text-xs font-medium rounded-full flex items-center gap-1">
              <Construction size={14} />
              En cours
            </div>
          )}
          {project.mobileFriendly && (
            <div className="px-3 py-1 bg-[rgb(var(--accent-neon))] text-black text-xs font-medium rounded-full flex items-center gap-1">
              <Smartphone size={14} />
              Mobile Friendly
            </div>
          )}
        </div>

        {/* Image avec effet parallax */}
        <div className="relative h-48 overflow-hidden">
          {project.wip ? (
            <ProjectSkeleton />
          ) : (
            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="brightness-75 group-hover:brightness-100 transition-all"
              />
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-neon))] transition-colors">
              {project.title}
            </h3>
            <span className="text-sm font-mono text-[rgb(var(--accent-neon))]">
              {project.year}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-4">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
