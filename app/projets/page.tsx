"use client";

import { FilterButton } from "@/components/projects/filter-button";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { projectsData } from "./data";

export default function Projects() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const types = Array.from(
    new Set(projectsData.map((project) => project.type))
  );
  const years = Array.from(
    new Set(projectsData.map((project) => project.year))
  );

  const filteredProjects = projectsData
    .slice()
    .sort((a, b) => b.id - a.id)
    .filter((project) => {
      const matchesType = !selectedType || project.type === selectedType;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });

  return (
    <div className="min-h-screen pt-32 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* En-tête et filtres */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Projets
            <span className="text-[rgb(var(--accent-neon))] neon-glow">
              {" "}
              & Réalisations
            </span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Barre de recherche */}
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none focus:border-[rgb(var(--accent-neon))] transition-colors"
              />
            </div>

            {/* Filtres */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              <FilterButton
                active={selectedType === null}
                onClick={() => setSelectedType(null)}
              >
                <Filter size={16} />
                Tous
              </FilterButton>
              {types.map((type) => (
                <FilterButton
                  key={type}
                  active={selectedType === type}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </FilterButton>
              ))}
            </div>
          </div>
        </div>

        {/* Grille de projets */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de projet */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
