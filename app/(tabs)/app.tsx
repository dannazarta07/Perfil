import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};

const AVATAR = require('../../assets/images/mi_foto.jpeg');

const SKILLS = [
  { key: 'react', label: 'React Native', emoji: '💻' },
  { key: 'js', label: 'JavaScript', emoji: '🟨' },
  { key: 'tailwind', label: 'TailwindCSS', emoji: '🎨' },
  { key: 'db', label: 'Base de datos', emoji: '�️' },
  { key: 'git', label: 'Git', emoji: '🔧' },
];

const PROJECTS = [
  {
    id: 'p1',
    title: 'App de Tareas',
    description: 'Aplicación para gestionar tareas con sync y notificaciones.',
    tags: ['React Native', 'JavaScript'],
  },
  {
    id: 'p2',
    title: 'Portfolio Mobile',
    description: 'Portfolio personal con animaciones y layout responsive.',
    tags: ['Base de datos', 'TailwindCSS'],
  },
];

const SkillChip = ({ emoji, label }: { emoji: string; label: string }) => (
  <View style={styles.chip}>
    <Text style={styles.chipText}>{emoji}  {label}</Text>
  </View>
);

const ProjectCard = ({ title, description, tags }: { title: string; description: string; tags: string[] }) => (
  <View style={styles.projectCard}>
    <Text style={styles.projectTitle}>{title}</Text>
    <Text style={styles.projectDesc}>{description}</Text>
    <View style={styles.tagsRow}>
      {tags.map((t) => (
        <View key={t} style={styles.tag}>
          <Text style={styles.tagText}>{t}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default function App(_props: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mi Perfil</Text>
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image source={AVATAR} style={styles.avatar} />
        </View>

        {/* Nombre */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Dana Zarta</Text>
          <Text style={styles.job}>Desarrollador Mobile</Text>
        </View>

        {/* Info de contacto */}
        <View style={styles.contactCard}>
          <View style={styles.row}>
            <Text style={styles.icon}>📧</Text>
            <View style={styles.flex1}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>sofiazarta09@gmail.com</Text>
            </View>
          </View>

          <View style={[styles.row, styles.mb4]}>
            <Text style={styles.icon}>🔗</Text>
            <View style={styles.flex1}>
              <Text style={styles.label}>GitHub</Text>
              <Text style={styles.value}>dannazarta07 </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.icon}>📍</Text>
            <View style={styles.flex1}>
              <Text style={styles.label}>Ubicación</Text>
              <Text style={styles.value}>Bogotá, Colombia</Text>
            </View>
          </View>
        </View>

        {/* Sobre mí */}
        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>Sobre Mi</Text>
          <Text style={styles.aboutText}>
            Soy una desarrolladora apasionada por crear soluciones eficientes y centradas en el usuario.
             Tengo experiencia en el diseño, desarrollo y mantenimiento de aplicaciones utilizando buenas prácticas, 
             trabajo colaborativo y aprendizaje continuo para ofrecer productos de alta calidad.
          </Text>
        </View>

        {/* Mis Habilidades */}
        <View style={styles.skillsCard}>
          <Text style={styles.sectionTitle}>Mis Habilidades</Text>
          <View style={styles.chipsRow}>
            {SKILLS.map((s) => (
              <SkillChip key={s.key} emoji={s.emoji} label={s.label} />
            ))}
          </View>
        </View>

        {/* Mis Proyectos */}
        <View style={styles.projectsCard}>
          <Text style={styles.sectionTitle}>Mis Proyectos</Text>
          <View style={styles.projectsList}>
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} title={p.title} description={p.description} tags={p.tags} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#ffffff' },
  scroll: { paddingBottom: 20, backgroundColor: '#ffffff' },
  header: {
    backgroundColor: '#238e0eff', // bg-blue-600
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  headerTitle: { color: '#ffffff', fontSize: 20, fontWeight: '700' },
  avatarContainer: { alignItems: 'center', marginTop: -64 },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  nameContainer: { alignItems: 'center', marginTop: 16, paddingHorizontal: 20 },
  name: { fontSize: 28, fontWeight: '700', color: '#111827' },
  job: { fontSize: 16, color: '#4b5563', marginTop: 4 },
  contactCard: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 0 },
  mb4: { marginBottom: 16 },
  icon: { fontSize: 20, marginRight: 12 },
  flex1: { flex: 1 },
  label: { fontSize: 12, color: '#6b7280' },
  value: { fontSize: 16, color: '#111827', fontWeight: '500' },
  aboutCard: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  aboutTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 8 },
  aboutText: { fontSize: 14, color: '#4b5563', lineHeight: 22 },
  /* Skills */
  skillsCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 12 },
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: { fontSize: 14, color: '#111827' },
  /* Projects */
  projectsCard: {
    marginHorizontal: 20,
    marginBottom: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  projectsList: { marginTop: 8 },
  projectCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  projectTitle: { fontSize: 16, fontWeight: '700', color: '#111827' },
  projectDesc: { fontSize: 14, color: '#4b5563', marginTop: 6 },
  tagsRow: { flexDirection: 'row', marginTop: 8, flexWrap: 'wrap' },
  tag: { backgroundColor: '#eef2ff', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, marginRight: 8, marginBottom: 8 },
  tagText: { fontSize: 12, color: '#1e40af' },
});