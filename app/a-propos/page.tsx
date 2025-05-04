"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

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
              <img
                src="/images/moi.jpeg"
                alt="Profile"
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
              j'ai décidé de me reconvertir dans le développement web. Cette
              transition n'était pas un simple changement de carrière, mais une
              véritable passion qui a toujours été présente en moi.
            </p>
            <p>
              J'ai eu la chance, dans les télécoms, de naviguer entre le terrain
              et les bureaux : des chantiers techniques aux réunions de suivi
              client. Cette double exposition m'a appris à gérer toutes sortes
              de problèmes, à dialoguer avec des profils très différents, et à
              m'adapter à une multitude de méthodes de travail. J'en tire une
              vraie agilité professionnelle et une solide tolérance au chaos.
            </p>

            <p>
              Mon expérience en tant que technicien m'a appris à résoudre des
              problèmes complexes, à travailler en équipe et à m'adapter
              rapidement à de nouvelles situations. Ces compétences sont
              aujourd'hui des atouts précieux dans mon parcours de développeur.
            </p>

            <p>
              Ce qui me pousse aujourd'hui dans le développement web, c'est
              cette même passion pour la création. J'ai toujours aimé donner vie
              à mes idées — que ce soit en électronique, en bricolage ou
              maintenant en code. J'aime passer de l'idée à l'exécution, avoir à
              la fois la vision et les mains dedans. C'est ce mélange qui me
              fait vibrer.
            </p>

            <p>
              En dehors du code, je suis passionné par l'apprentissage continu,
              les nouvelles technologies et le partage de connaissances. Je
              considère chaque projet comme une opportunité d'apprendre et de
              grandir.
            </p>

            <p>
              Mon objectif ? Continuer de créer des applications utiles,
              apprendre sans relâche, et un jour pouvoir transmettre à mon tour
              ce que j'aurai appris.
            </p>
            <p>
              Le code, pour moi, ce n'est pas juste un job. C'est une manière de
              transformer les idées en choses concrètes. Et j'ai encore beaucoup
              d'idées.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
