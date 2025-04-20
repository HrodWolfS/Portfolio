"use client";

import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Mascot } from "./mascot";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/a-propos", label: "À propos" },
    { href: "/cv", label: "Mon CV" },
    { href: "/contact", label: "Contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Rendu initial pour éviter les problèmes d'hydratation
  const initialNav = (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glassmorphism px-6 py-3">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold neon-glow">
            Portfolio
          </Link>
          <Mascot />
        </div>
      </div>
    </nav>
  );

  if (!mounted) return initialNav;

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glassmorphism px-6 py-3">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold neon-glow">
            Portfolio
          </Link>
          <Mascot />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[rgb(var(--accent-neon))] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-64 glassmorphism md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex flex-col p-8 space-y-6 mt-16">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg hover:text-[rgb(var(--accent-neon))] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center space-x-2 hover:text-[rgb(var(--accent-neon))] transition-colors"
          >
            {theme === "dark" ? (
              <>
                <Sun size={20} />
                <span>Mode clair</span>
              </>
            ) : (
              <>
                <Moon size={20} />
                <span>Mode sombre</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
