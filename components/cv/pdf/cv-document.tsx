import { cvData } from "@/app/cv/data";
import {
  Document,
  Font,
  Page,
  StyleSheet,
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
  primary: "#2DD4BF", // Bleu-vert vif mais doux
  accent: "#0D9488", // Bleu-vert plus foncé pour la ligne
  text: {
    primary: "#ffffff",
    secondary: "#94A3B8", // Gris bleuté pour le texte secondaire
    muted: "rgba(255, 255, 255, 0.7)", // Pour les descriptions
  },
  background: {
    main: "#0a0a0a",
    subtle: "rgba(255, 255, 255, 0.1)", // Pour les barres de progression vides
  },
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
    backgroundColor: "#fba751",
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
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
    marginBottom: 15,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
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
        </View>

        {/* Ligne horizontale orange */}
        <View style={styles.horizontalLine} />

        {/* Compétences en deux colonnes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Compétences</Text>
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
        <View style={styles.mainContent}>
          {/* Colonne gauche - Expérience */}
          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Expérience</Text>
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
              <Text style={styles.sectionTitle}>Formation</Text>
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
