"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Je construis, j’apprends, et je m’en lasse pas.
            <span className="text-[rgb(var(--accent-neon))] neon-glow">
              {" "}
              Chaque ligne de code m’emmène plus loin.
            </span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Ancien technicien télécom, aujourd’hui développeur web en
            reconversion. Mes projets évoluent sans cesse, parce que je préfère
            être jugé sur un produit imparfait que sur une idée jamais lancée.
            Ce que je code aujourd’hui me prépare à ce que je créerai demain.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/projets"
              className="glassmorphism px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[rgb(var(--accent-neon))] hover:text-black transition-all group"
            >
              Voir mes projets
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Projet en cours – affiché sous le bloc principal */}
        <div className="sm:mt-16 hidden sm:block text-center">
          <p className="text-lg text-gray-400 flex items-center justify-center gap-2 font-medium">
            <span className="animate-pulse text-2xl">⌨️</span>
            <span>
              Projet en cours :{" "}
              <strong className="text-white">Les Petites Histoires</strong> 🚧
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
