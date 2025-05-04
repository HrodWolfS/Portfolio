"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-8 md:p-12 rounded-2xl space-y-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[rgb(var(--accent-neon))]">
              <Image
                src="/images/moi.jpeg"
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Qui suis-je ?
                <span className="text-[rgb(var(--accent-neon))] neon-glow">
                  {" "}
                  / Mon parcours
                </span>
              </h1>
            </div>
          </div>

          <div className="space-y-6 text-lg text-gray-400">
            <p>
              Après plusieurs années dans le domaine des télécommunications,
              j&apos;ai décidé de me reconvertir dans le développement web.
              Cette transition n&apos;était pas un simple changement de
              carrière, mais une véritable passion qui a toujours été présente
              en moi.
            </p>
            <p>
              J&apos;ai eu la chance, dans les télécoms, de naviguer entre le
              terrain et les bureaux : des chantiers techniques aux réunions de
              suivi client. Cette double exposition m&apos;a appris à gérer
              toutes sortes de problèmes, à dialoguer avec des profils très
              différents, et à m&apos;adapter à une multitude de méthodes de
              travail. J&apos;en tire une vraie agilité professionnelle et une
              solide tolérance au chaos.
            </p>

            <p>
              Mon expérience en tant que technicien m&apos;a appris à résoudre
              des problèmes complexes, à travailler en équipe et à
              m&apos;adapter rapidement à de nouvelles situations. Ces
              compétences sont aujourd&apos;hui des atouts précieux dans mon
              parcours de développeur.
            </p>

            <p>
              Ce qui me pousse aujourd&apos;hui dans le développement web,
              c&apos;est cette même passion pour la création. J&apos;ai toujours
              aimé donner vie à mes idées — que ce soit en électronique, en
              bricolage ou maintenant en code. J&apos;aime passer de l&apos;idée
              à l&apos;exécution, avoir à la fois la vision et les mains dedans.
              C&apos;est ce mélange qui me fait vibrer.
            </p>

            <p>
              En dehors du code, je suis passionné par l&apos;apprentissage
              continu, les nouvelles technologies et le partage de
              connaissances. Je considère chaque projet comme une opportunité
              d&apos;apprendre et de grandir.
            </p>

            <p>
              Mon objectif ? Continuer de créer des applications utiles,
              apprendre sans relâche, et un jour pouvoir transmettre à mon tour
              ce que j&apos;aurai appris.
            </p>
            <p>
              Le code, pour moi, ce n&apos;est pas juste un job. C&apos;est une
              manière de transformer les idées en choses concrètes. Et j&apos;ai
              encore beaucoup d&apos;idées.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
