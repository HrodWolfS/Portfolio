export const cvData = {
  skills: {
    Frontend: [
      { name: "JavaScript", level: 60 },
      { name: "React", level: 55 },
      { name: "Next.js", level: 50 },
      { name: "Tailwind CSS", level: 75 },
    ],
    DevOps: [
      { name: "Git", level: 70 },
      { name: "Kubernetes", level: 30, badge: "En cours" },
    ],
    Backend: [
      { name: "Node.js", level: 50 },
      { name: "Express", level: 45 },
      { name: "Prisma", level: 40 },
    ],
    Cloud: [
      { name: "GCP", level: 45 },
      { name: "Docker", level: 50 },
    ],
    Testing: [
      { name: "Jest", level: 50 },
      { name: "React Testing Library", level: 45 },
    ],
  },
  experience: [
    {
      title: "Technicien Telecom",
      company: "Tibco",
      period: "08/2020 – 05/2025",
      logo: "/images/Tibco.png",
      description:
        "Amélioration du réseau de transport SFR, création et migration de liens WDM en Bretagne puis dans toute la région Méditerranée.",
      achievements: [
        "Installation de routeurs 4G pour superviser les équipements clients",
        "Migration des équipements internet des magasins Nature & Découverte, Courir et Covéa",
        "Démontage des équipements DSLAM remplacés par les OLT",
      ],
      technologies: ["WDM", "Routeurs CISCO", "FORTINET", "DSLAM", "OLT"],
    },
    {
      title: "Conducteur de Travaux",
      company: "Eiffage Energie Systèmes Telecom Metralor",
      period: "09/2017 – 01/2019",
      logo: "/images/eiffage.jpeg",
      description:
        "Pilotage de projets télécoms pour les clients Nokia et Orange, couvrant les régions Nord-Est et Sud-Est de la France.",
      achievements: [
        "Gestion de plusieurs équipes multiculturelles, communication en anglais",
        "Optimisation des plannings pour répondre aux exigences clients tout en assurant la satisfaction des équipes",
        "Création de relations de confiance avec tous les interlocuteurs projet",
      ],
      technologies: [
        "Gestion de projet",
        "Outils de planification",
        "Gestion Financière",
        "KPIs",
      ],
    },
    {
      title: "Conducteur de travaux",
      company: "Circet",
      period: "01/2017 – 08/2017",
      logo: "/images/circet.jpeg",
      description:
        "Planification et coordination des travaux pour la région Nord-Est ; réalisation des devis.",
      achievements: [
        "Réunions hebdomadaires avec les équipes pour améliorer la satisfaction et la productivité",
        "Visites de site pour lancer de nouveaux chantiers",
        "Réalisation des devis pour chaque projet",
      ],
      technologies: [
        "Gestion de projet",
        "Coordination d'équipe",
        "Planification",
      ],
    },
    {
      title: "Chef de chantier",
      company: "Circet",
      period: "03/2015 – 12/2016",
      logo: "/images/circet.jpeg",
      description:
        "Soutien et formation des équipes terrain et résolution des problèmes liés aux chantiers au sein de UPR Nord-Est.",
      achievements: [
        "Encadrement de 6 équipes terrain",
        "Réduction des incidents techniques",
        "Optimisation du workflow chantier",
      ],
      technologies: ["Formation", "Support terrain", "Gestion des incidents"],
    },
    {
      title: "Technicien IMES",
      company: "Circet",
      period: "07/2014 – 02/2015",
      logo: "/images/circet.jpeg",
      description:
        "Installation de diverses équipements, fibrage, création d'infrastructure d'accueil, création et raccordement d'armoire énergie.",
      achievements: [
        "Installation de systèmes WDM Huawei",
        "Raccordement des réglettes optiques",
        "Installation et mise en service de DSLAM et OLT Huawei et Nokia",
      ],
      technologies: ["Huawei WDM", "Câblage fibre", "Sécurité électrique"],
    },
  ],
  education: [
    {
      degree: "Formation Kubernetes",
      school: "Dyma",
      period: "2025",
      logo: "/images/dyma.jpeg",
      description:
        "Administration de clusters Kubernetes : déploiement, scaling, networking et stockage.",
    },
    {
      degree: "Formation NextJs",
      school: "CodeLynx",
      period: "2025",
      logo: "/images/codelynx.jpeg",
      description:
        "Formation intensive Next.js : concepts de routage, SSR/SSG, API Routes, orchestration avec Prisma et déploiement sur Vercel. Et apprentissage de TypeScript.",
    },
    {
      degree: "Formation React",
      school: "CodeLynx",
      period: "2024",
      logo: "/images/codelynx.jpeg",
      description:
        "Approfondissement React : création de composants fonctionnels, JSX, props, state, hooks (useState, useEffect), gestion du cycle de vie, React Router, Context API et tests unitaires avec Jest.",
    },
    {
      degree: "Formation Javascript",
      school: "CodeLynx",
      period: "2024",
      logo: "/images/codelynx.jpeg",
      description:
        "Amelioration des connaissances de JavaScript : variables, types, structures de contrôle, fonctions, ES6+ (let/const, arrow functions, modules), manipulation du DOM, gestion des promesses, async/await et utilisation de l'API Fetch.",
    },
    {
      degree: "Formation React",
      school: "Dyma",
      period: "2023",
      logo: "/images/dyma.jpeg",
      description:
        "Création d'applications SPA avec React, gestion du state global et optimisation des performances.",
    },
    {
      degree: "Formation Javascript",
      school: "Dyma",
      period: "2022",
      logo: "/images/dyma.jpeg",
      description:
        "Principes JavaScript : closures, prototypes, fonctions asynchrones et modules.",
    },
    {
      degree: "Formation HTML/CSS",
      school: "Dyma",
      period: "2022",
      logo: "/images/dyma.jpeg",
      description:
        "Normes HTML5 et CSS3 : responsive design, Flexbox, Grid et accessibilité.",
    },
    {
      degree: "Formation Comunity Manager",
      school: "AFPA Roubaix",
      period: "2019",
      logo: "/images/afpa.png",
      description:
        "Stratégies de gestion de communauté : création de contenu, planification et analytics des réseaux sociaux.",
    },
    {
      degree: "Formation Technicien réseaux et télécoms",
      school: "Technicom Formation",
      period: "2012",
      logo: "/images/technicom.jpeg",
      description:
        "Principes réseaux et télécoms : TCP/IP, routage, commutation et bases de la fibre optique.",
    },
    {
      degree: "BTS Systèmes électronique",
      school: "Lycée Cesar Baggio",
      period: "2010",
      logo: "/images/baggio.png",
      description:
        "Études des systèmes électroniques : circuits analogiques, numériques et microcontrôleurs.",
    },
    {
      degree: "Bac STI électronique",
      school: "Lycée Cesar Baggio",
      period: "2008",
      logo: "/images/baggio.png",
      description:
        "Fondamentaux de l'électronique : composants, schémas et maintenance de systèmes.",
    },
  ],
  certifications: [],
};
