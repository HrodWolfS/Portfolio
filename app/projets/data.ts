export const projectsData = [
  {
    id: 1,
    title: "MultiTab - Apprentissage des Tables de Multiplication",
    description:
      "Application ludique pour apprendre les tables de multiplication destinée aux enfants.",
    longDescription:
      "MultiTab est une application pédagogique conçue pour aider les enfants à apprendre les tables de multiplication. Elle propose deux modes : un mode classique pour s'entraîner et un mode aventure plus interactif. Le système de progression débloque les tables une à une, un tableau de statistiques permet de suivre les progrès, et des badges récompensent les efforts. Chaque profil est stocké dans le localStorage pour un suivi personnalisé.",
    type: "Fullstack",
    year: 2024,
    technologies: ["React", "Next.js", "Tailwind CSS", "localStorage"],
    image: "/images/multitab.png",
    gallery: [
      "https://raw.githubusercontent.com/HrodWolfS/Table/main/public/screens/screen1.png",
      "https://raw.githubusercontent.com/HrodWolfS/Table/main/public/screens/screen2.png",
      "https://raw.githubusercontent.com/HrodWolfS/Table/main/public/screens/screen3.png",
    ],
    challenges: [
      "Gérer les profils utilisateurs sans base de données",
      "Créer un système de progression cohérent avec feedback visuel",
      "Maintenir un code simple et performant malgré les multiples fonctionnalités",
    ],
    demoUrl: "https://table-pi-two.vercel.app",
    githubUrl: "https://github.com/HrodWolfS/Table",
    featured: true,
    mobileFriendly: true,
  },
  {
    id: 2,
    title: "2048 - Challenge Personnel",
    description:
      "Reproduction du jeu 2048 dans un style simple mais fidèle à l'original.",
    longDescription:
      "Ce projet est une réécriture du jeu 2048, codée à la main pour relever un défi personnel. Il respecte fidèlement les règles du jeu original tout en proposant une interface claire et minimaliste. Le but principal était de mieux comprendre la logique de déplacement des tuiles, les conditions de victoire et d'échec, et la manipulation de la grille dans le DOM. Le jeu est entièrement responsive et jouable sur mobile, avec des contrôles tactiles intuitifs.",
    type: "Frontend",
    year: 2024,
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/images/2048.png",
    gallery: [],
    challenges: [
      "Gérer dynamiquement la grille et les collisions de tuiles",
      "Implémenter la logique exacte de fusion et de génération aléatoire",
      "Créer une UX fidèle avec peu de dépendances",
    ],
    demoUrl: "https://2048-hrodwolf.vercel.app",
    githubUrl: "https://github.com/HrodWolfS/2048-Challenge",
    featured: false,
    mobileFriendly: true,
  },
  {
    id: 3,
    title: "Les Petites Histoires – Générateur d'Aventures Personnalisées",
    description:
      "Projet en cours de développement : générer des histoires pour enfants personnalisées avec le prénom du héros, un thème et une morale.",
    longDescription:
      "Cette application permet aux enfants (ou aux parents) de créer des histoires uniques en renseignant quelques paramètres simples : le prénom du héros, un thème d'aventure (pirate, forêt magique, espace, etc.), et une morale à transmettre. Le but est d'éduquer tout en amusant. Le contenu est généré dynamiquement par une IA. À terme, une narration vocale et une interface gamifiée sont prévues.",
    type: "Fullstack",
    year: 2025,
    technologies: ["React", "Next.js", "OpenAI API", "Tailwind CSS"],
    image: "/images/placeholder.png",
    gallery: [],
    challenges: [
      "Créer des prompts fiables et adaptés à un jeune public",
      "Permettre une personnalisation fluide sans complexité d'interface",
      "Prévoir une narration vocale ou des illustrations générées à terme",
    ],
    demoUrl: "",
    githubUrl: "",
    featured: false,
    wip: true,
    mobileFriendly: true,
  },
];
