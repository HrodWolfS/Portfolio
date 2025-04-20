"use client";

import { ParticlesBackground } from "@/components/cv/particles-background";
import { DownloadCVButton } from "@/components/cv/pdf/download-cv-button";
import { SkillBar } from "@/components/cv/skill-bar";
import { TimelineItem } from "@/components/cv/timeline-item";
import { motion } from "framer-motion";
import { Award, Briefcase, Code2, GraduationCap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cvData } from "./data";

export default function CV() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <ParticlesBackground />

      {/* En-tête */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[rgb(var(--accent-neon))]">
                <img
                  src="/images/moi.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Rodolphe Stempfel
                  <span className="text-[rgb(var(--accent-neon))] neon-glow">
                    {" "}
                    / Développeur Junior
                  </span>
                </h1>
                <p className="text-lg text-gray-400 mb-6 max-w-2xl">
                  Ancien technicien télécom, aujourd'hui développeur web en
                  reconversion. Mes projets évoluent sans cesse, parce que je
                  préfère être jugé sur un produit imparfait que sur une idée
                  jamais lancée. Ce que je code aujourd'hui me prépare à ce que
                  je créerai demain.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/rodolphe-s-ba6a7a232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glassmorphism px-6 py-2 rounded-full hover:bg-[rgb(var(--accent-neon))] hover:text-black transition-all"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/HrodWolfS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glassmorphism px-6 py-2 rounded-full hover:bg-[rgb(var(--accent-neon))] hover:text-black transition-all"
                  >
                    GitHub
                  </a>
                  <DownloadCVButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Compétences */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-[rgb(var(--accent-neon))]" />
            Compétences Techniques
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(cvData.skills).map(([category, skills]) => (
              <div key={category} className="glassmorphism p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">{category}</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Expérience */}
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <Briefcase className="text-[rgb(var(--accent-neon))]" />
                Expérience
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[rgb(var(--accent-neon))] to-transparent" />
                <div className="space-y-8">
                  {cvData.experience.map((exp, index) => (
                    <TimelineItem
                      key={index}
                      data={exp}
                      type="experience"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Formation */}
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <GraduationCap className="text-[rgb(var(--accent-neon))]" />
                Formation
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[rgb(var(--accent-neon))] to-transparent" />
                <div className="space-y-8">
                  {cvData.education.map((edu, index) => (
                    <TimelineItem
                      key={index}
                      data={edu}
                      type="education"
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      {cvData.certifications.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Award className="text-[rgb(var(--accent-neon))]" />
              Certifications
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cvData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism p-6 rounded-xl hover:scale-105 transition-transform"
                >
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{cert.issuer}</p>
                  <p className="text-[rgb(var(--accent-neon))] font-mono text-sm">
                    {cert.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
