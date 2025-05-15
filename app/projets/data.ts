export const projectsData = [
  {
    id: 1,
    title: "MultiTab - Apprentissage des Tables de Multiplication",
    description:
      "Application ludique pour apprendre les tables de multiplication destinée aux enfants.",
    longDescription:
      "MultiTab est une application pédagogique conçue pour aider les enfants à apprendre les tables de multiplication. Elle propose deux modes : un mode classique pour s'entraîner et un mode aventure plus interactif. Le système de progression débloque les tables une à une, un tableau de statistiques permet de suivre les progrès, et des badges récompensent les efforts. Chaque profil est stocké dans le localStorage pour un suivi personnalisé.",
    type: "Frontend",
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
    title: "2048 - Challenge",
    description:
      "Reproduction du jeu 2048 dans un style simple mais fidèle à l'original.",
    longDescription:
      "Ce projet est une reproduction fidèle du jeu 2048, avec un focus particulier sur la fluidité des animations. L’un des principaux défis techniques a été de gérer l’apparition et la fusion des tuiles avec des transitions visuelles cohérentes et dynamiques. L’objectif était de reproduire le comportement du jeu original tout en optimisant les performances et la clarté de l’interface. Le jeu est entièrement responsive et jouable sur mobile, avec des contrôles tactiles intuitifs.",
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
    demoUrl: "https://2048-challenge-hrodwolfs-projects.vercel.app/",
    githubUrl: "https://github.com/HrodWolfS/2048-Challenge",
    featured: false,
    mobileFriendly: true,
  },
  {
    id: 3,
    title: "Projet Cotisations Sociales",
    description:
      "Calcule ton salaire net automatiquement, en tenant compte de ton statut et des taux à jour.",
    longDescription:
      "Ce projet vise à fournir un outil fiable et à jour pour calculer son salaire net en fonction de son salaire brut. Il intègre un système de scraping pour récupérer automatiquement les taux en vigueur, ainsi qu'une interface utilisateur claire pour faciliter les calculs. L'automatisation des tests et des déploiements est également un aspect clé du projet.",
    type: "Frontend",
    year: 2025,
    technologies: ["React", "TypeScript", "GitHub Actions"],
    image: "/images/dubrutaunet.png",
    gallery: [],
    challenges: [
      "Écrire un script de scraping pour mettre à jour automatiquement les taux de cotisations",
      "Configurer GitHub Actions pour automatiser les tests et les déploiements",
      "Mettre en place des tests pour la première fois afin d'assurer la stabilité du code",
    ],
    demoUrl: "https://dubrutaunet.fr",
    githubUrl: "https://github.com/HrodWolfS/DuBrutAuNet",
    featured: false,
    mobileFriendly: true,
  },
  {
    id: 4,
    title: "Mon Histoire à moi – Générateur d'Aventures Personnalisées",
    description:
      "Crée des histoires magiques pour enfants en personnalisant le prénom, le thème et la morale.",
    longDescription:
      "Cette application permet aux enfants (ou aux parents) de créer des histoires personnalisées en quelques clics. L’utilisateur choisit un prénom, un âge, une émotion, un thème et une morale. Le texte est généré dynamiquement via l’API d’OpenAI, accompagné d’une narration audio. Aucune inscription, aucun abonnement, aucun compte à créer. Il suffit d’entrer sa propre clé OpenAI (stockée localement) pour utiliser l’application en toute autonomie. Cette version publique est pensée comme un terrain de jeu pour tester l’idée sans contrainte ni backend.",
    type: "Fullstack",
    year: 2025,
    technologies: ["React", "Next.js", "OpenAI API", "Tailwind CSS"],
    image: "/images/mham.png",
    gallery: [],
    challenges: [
      "Créer des prompts fiables et adaptés à un jeune public",
      "Permettre une personnalisation fluide sans complexité d'interface",
      "Prévoir une narration vocale ou des illustrations générées à terme",
    ],
    demoUrl: "https://mon-histoires-a-moi.vercel.app",
    githubUrl: "https://github.com/HrodWolfS/mon-histoires-a-moi",
    featured: false,
    mobileFriendly: true,
  },
  {
    id: 5,
    title: "TechnoGorafi – Le Blog Satirique de la Tech",
    description:
      "Blog parodique dans l’univers tech, façon Gorafi, pour mêler humour et code.",
    longDescription:
      "TechnoGorafi est un blog satirique qui détourne les codes du journalisme tech pour proposer des articles absurdes, ironiques mais toujours bien codés. Le but est de mêler humour et développement en publiant de faux articles comme : « OpenAI offre une remise si vous arrêtez de dire merci », ou « Un développeur junior affirme n’avoir jamais codé de todo list ». Ce projet montre mes compétences techniques sur un vrai CMS personnalisé, tout en affichant une facette créative et décalée.",
    type: "Fullstack",
    year: 2025,
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    image: "/images/placeholder.png",
    gallery: [],
    challenges: [
      "Créer une interface de publication simple mais puissante",
      "Maintenir une structure SEO-friendly malgré le contenu absurde",
      "Allier satire et qualité technique dans un même produit",
    ],
    demoUrl: "",
    githubUrl: "",
    featured: false,
    mobileFriendly: true,
    wip: true,
  },
];
