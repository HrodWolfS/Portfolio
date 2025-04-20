"use client";

import { cvData } from "@/app/cv/data";
import {
  Document,
  Font,
  Page,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";

// Enregistrer les polices
Font.register({
  family: "Inter",
  src: "/fonts/Inter-Regular.ttf",
});

Font.register({
  family: "Inter-Bold",
  src: "/fonts/Inter-Bold.ttf",
});

// Définir le type pour les compétences
type Skill = {
  name: string;
  level: number;
  badge?: string;
};

// Nouvelle palette de couleurs harmonieuse
const colors = {
  primary: "#ea580c", // Orange vif
  accent: "#f97316", // Accent orange
  text: {
    primary: "#111827", // Gris foncé
    secondary: "#374151", // Gris moyen
    muted: "#6B7280", // Gris clair
  },
  background: {
    main: "#ffffff",
    subtle: "#e5e7eb", // Gris très clair pour fond barre progression
  },
};

// Icônes SVG
const icons = {
  contact: (
    <Svg width="12" height="12" viewBox="0 0 24 24" fill={colors.primary}>
      <Path d="M22 2H2v20h20V2zM20 4v16H4V4h16z" />
      <Path d="M6 12h12v2H6v-2zm0-4h12v2H6V8zm0 8h8v2H6v-2z" />
    </Svg>
  ),
  skills: (
    <Svg width="12" height="12" viewBox="0 0 24 24" fill={colors.primary}>
      <Path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </Svg>
  ),
  experience: (
    <Svg width="12" height="12" viewBox="0 0 24 24" fill={colors.primary}>
      <Path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z" />
      <Path d="M9 8h6v2H9zm0 3h6v2H9zm0 3h4v2H9z" />
    </Svg>
  ),
  education: (
    <Svg width="12" height="12" viewBox="0 0 24 24" fill={colors.primary}>
      <Path d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </Svg>
  ),
  email: (
    <Svg width="10" height="10" viewBox="0 0 24 24" fill={colors.text.primary}>
      <Path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
    </Svg>
  ),
  web: (
    <Svg width="10" height="10" viewBox="0 0 24 24" fill={colors.text.primary}>
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </Svg>
  ),
  github: (
    <Svg width="10" height="10" viewBox="0 0 24 24" fill={colors.text.primary}>
      <Path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </Svg>
  ),
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: colors.background.main,
    color: colors.text.primary,
    fontFamily: "Inter",
  },
  header: {
    marginBottom: 10,
    paddingBottom: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: colors.accent,
    width: "100%",
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontFamily: "Inter-Bold",
    marginBottom: 4,
    color: colors.text.primary,
  },
  title: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 8,
    fontFamily: "Inter-Bold",
  },
  section: {
    marginBottom: 5,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginLeft: 8,
  },
  skillsContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 25,
  },
  skillColumn: {
    flex: 1,
  },
  mainContent: {
    flexDirection: "row",
    gap: 20,
  },
  column: {
    flex: 1,
  },
  skillCategory: {
    marginBottom: 14,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontFamily: "Inter-Bold",
    marginBottom: 6,
    textDecoration: "underline",
    color: colors.text.primary,
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  skillName: {
    flex: 1,
    fontSize: 8,
    color: colors.text.primary,
  },
  skillLevel: {
    width: 80,
    height: 2,
    backgroundColor: colors.background.subtle,
    borderRadius: 1,
    marginLeft: 8,
  },
  skillLevelFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 1,
  },
  experienceItem: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeft: "1px solid #fba751",
    position: "relative",
  },
  experienceTitle: {
    fontSize: 9,
    fontFamily: "Inter-Bold",
    color: colors.text.primary,
  },
  experienceCompany: {
    fontSize: 8,
    color: colors.primary,
    marginBottom: 2,
  },
  experiencePeriod: {
    fontSize: 7,
    color: colors.text.secondary,
    marginBottom: 2,
  },
  experienceDescription: {
    fontSize: 7,
    color: colors.text.muted,
    lineHeight: 1.3,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.primary,
    position: "absolute",
    left: -3,
    top: 3,
  },
  description: {
    fontSize: 8,
    color: colors.text.primary,
    lineHeight: 1.3,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  contactText: {
    fontSize: 8,
    color: colors.text.primary,
  },
});

export function CVDocument() {
  // Organiser manuellement les catégories dans les colonnes
  const leftColumnCategories = ["Frontend", "Backend"];
  const rightColumnCategories = ["Cloud", "Testing", "DevOps"];

  // Fonction pour obtenir les compétences d'une catégorie spécifique
  const getSkillsForCategory = (category: string) => {
    return Object.entries(cvData.skills)
      .filter(([cat]) => cat === category)
      .map(([_, skills]) => skills)[0];
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* En-tête */}
        <View style={styles.header}>
          <Text style={styles.name}>Rodolphe Stempfel</Text>
          <Text style={styles.title}>Développeur Junior</Text>
          <Text style={styles.description}>
            Je suis Rodolphe, développeur web en reconversion passionné par la
            création de solutions concrètes. J&apos;ai quitté les télécoms pour
            me consacrer à un métier qui me permet d&apos;imaginer, construire
            et livrer mes propres idées.
          </Text>
        </View>

        {/* Ligne horizontale orange */}
        <View style={styles.horizontalLine} />

        {/* Contact */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            {icons.contact}
            <Text style={styles.sectionTitle}>Contact</Text>
          </View>
          <View style={styles.contactItem}>
            {icons.email}
            <Text style={[styles.contactText, { marginLeft: 5 }]}>
              stempfel.rodolphe@gmail.com
            </Text>
          </View>
          <View style={styles.contactItem}>
            {icons.web}
            <Text style={[styles.contactText, { marginLeft: 5 }]}>
              hrodwolf.dev
            </Text>
          </View>
          <View style={styles.contactItem}>
            {icons.github}
            <Text style={[styles.contactText, { marginLeft: 5 }]}>
              github.com/HrodWolfS
            </Text>
          </View>
        </View>

        {/* Compétences */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            {icons.skills}
            <Text style={styles.sectionTitle}>Compétences</Text>
          </View>
          <View style={styles.skillsContainer}>
            {/* Colonne gauche des compétences */}
            <View style={styles.skillColumn}>
              {leftColumnCategories.map((category) => {
                const skills = getSkillsForCategory(category);
                return skills ? (
                  <View key={category} style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>{category}</Text>
                    {(skills as Skill[]).map((skill) => (
                      <View key={skill.name} style={styles.skillRow}>
                        <Text style={styles.skillName}>{skill.name}</Text>
                        <View style={styles.skillLevel}>
                          <View
                            style={[
                              styles.skillLevelFill,
                              { width: `${skill.level}%` },
                            ]}
                          />
                        </View>
                      </View>
                    ))}
                  </View>
                ) : null;
              })}
            </View>

            {/* Colonne droite des compétences */}
            <View style={styles.skillColumn}>
              {rightColumnCategories.map((category) => {
                const skills = getSkillsForCategory(category);
                return skills ? (
                  <View key={category} style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>{category}</Text>
                    {(skills as Skill[]).map((skill) => (
                      <View key={skill.name} style={styles.skillRow}>
                        <Text style={styles.skillName}>{skill.name}</Text>
                        <View style={styles.skillLevel}>
                          <View
                            style={[
                              styles.skillLevelFill,
                              { width: `${skill.level}%` },
                            ]}
                          />
                        </View>
                      </View>
                    ))}
                  </View>
                ) : null;
              })}
            </View>
          </View>
        </View>

        {/* Expérience et Formation côte à côte */}
        <View style={[styles.mainContent, { marginTop: 10 }]}>
          {/* Colonne gauche - Expérience */}
          <View style={styles.column}>
            <View style={styles.section}>
              <View style={styles.sectionTitleContainer}>
                {icons.experience}
                <Text style={styles.sectionTitle}>Expérience</Text>
              </View>
              {cvData.experience.map((exp) => (
                <View key={exp.title} style={styles.experienceItem}>
                  <View style={styles.dot} />
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceCompany}>{exp.company}</Text>
                  <Text style={styles.experiencePeriod}>{exp.period}</Text>
                  <Text style={styles.experienceDescription}>
                    {exp.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Colonne droite - Formation */}
          <View style={styles.column}>
            <View style={styles.section}>
              <View style={styles.sectionTitleContainer}>
                {icons.education}
                <Text style={styles.sectionTitle}>Formation</Text>
              </View>
              {cvData.education.map((edu) => (
                <View key={edu.degree} style={styles.experienceItem}>
                  <View style={styles.dot} />
                  <Text style={styles.experienceTitle}>{edu.degree}</Text>
                  <Text style={styles.experienceCompany}>{edu.school}</Text>
                  <Text style={styles.experiencePeriod}>{edu.period}</Text>
                  <Text style={styles.experienceDescription}>
                    {edu.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
