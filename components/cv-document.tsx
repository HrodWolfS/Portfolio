import { education, experiences, skills } from "@/app/cv/data";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Space Grotesk",
  src: "/fonts/SpaceGrotesk-Regular.ttf",
});

Font.register({
  family: "Space Grotesk Bold",
  src: "/fonts/SpaceGrotesk-Bold.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 30,
    fontFamily: "Space Grotesk",
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 32,
    fontFamily: "Space Grotesk Bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    color: "#FF6B00",
    marginBottom: 15,
  },
  description: {
    fontSize: 11,
    marginBottom: 20,
    lineHeight: 1.4,
    maxWidth: "80%",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Space Grotesk Bold",
    marginBottom: 10,
    color: "#FF6B00",
  },
  content: {
    flexDirection: "row",
    gap: 20,
  },
  leftColumn: {
    width: "40%",
  },
  rightColumn: {
    width: "60%",
  },
  skillCategory: {
    marginBottom: 10,
  },
  skillTitle: {
    fontSize: 12,
    fontFamily: "Space Grotesk Bold",
    marginBottom: 5,
  },
  skillItem: {
    fontSize: 10,
    marginBottom: 3,
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceTitle: {
    fontSize: 12,
    fontFamily: "Space Grotesk Bold",
  },
  experienceDate: {
    fontSize: 10,
    color: "#666",
    marginBottom: 5,
  },
  experienceDescription: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  contact: {
    fontSize: 10,
    marginTop: 20,
    color: "#666",
  },
});

export function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* En-tête */}
        <View style={styles.header}>
          <Text style={styles.name}>Rodolphe Stempfel</Text>
          <Text style={styles.title}>Développeur Junior</Text>
          <Text style={styles.description}>
            Ancien technicien télécom, aujourd&apos;hui développeur web en
            reconversion. Mes projets évoluent sans cesse, parce que je préfère
            être jugé sur un produit imparfait que sur une idée jamais lancée.
          </Text>
        </View>

        {/* Contenu principal */}
        <View style={styles.content}>
          {/* Colonne gauche */}
          <View style={styles.leftColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Compétences</Text>
              <View style={styles.skillCategory}>
                <Text style={styles.skillTitle}>Frontend</Text>
                {skills.frontend.map((skill) => (
                  <Text key={skill.name} style={styles.skillItem}>
                    • {skill.name}
                  </Text>
                ))}
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillTitle}>Backend</Text>
                {skills.backend.map((skill) => (
                  <Text key={skill.name} style={styles.skillItem}>
                    • {skill.name}
                  </Text>
                ))}
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillTitle}>DevOps</Text>
                {skills.devops.map((skill) => (
                  <Text key={skill.name} style={styles.skillItem}>
                    • {skill.name}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Formation</Text>
              {education.map((edu) => (
                <View key={edu.title} style={styles.experienceItem}>
                  <Text style={styles.experienceTitle}>{edu.title}</Text>
                  <Text style={styles.experienceDate}>{edu.date}</Text>
                  <Text style={styles.experienceDescription}>{edu.school}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Colonne droite */}
          <View style={styles.rightColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Expérience</Text>
              {experiences.map((exp) => (
                <View key={exp.title} style={styles.experienceItem}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.startDate} - {exp.endDate}
                  </Text>
                  <Text style={styles.experienceDescription}>
                    {exp.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Contact */}
        <Text style={styles.contact}>stempfel.rodolphe@gmail.com</Text>

        <Text style={styles.description}>
          Je suis actuellement en formation chez OpenClassrooms pour obtenir le
          titre professionnel de Développeur Web.
        </Text>
        <Text style={styles.description}>
          Cette formation me permet d&apos;acquérir les compétences nécessaires
          pour devenir un développeur web professionnel.
        </Text>
      </Page>
    </Document>
  );
}
