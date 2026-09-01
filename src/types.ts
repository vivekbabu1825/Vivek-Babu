export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: 'Frontend & Auth' | 'Database & Systems' | 'Web & E-Commerce';
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoAvailable?: boolean;
  metrics?: { label: string; value: string }[];
  simulatorType?: 'login-auth' | 'school-mgmt' | 'sneaker-store';
  codeSnippet?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'languages' | 'frontend' | 'databaseTools' | 'dataCertifications' | 'softSkills';
  description: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Proficient', 'Familiar'
    percentage: number;
    iconName?: string;
    description: string;
  }[];
}

export interface TrainingExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Training' | 'Leadership' | 'Extracurricular';
  bullets: string[];
  skillsGained: string[];
  credentialLink?: string;
}

export interface Certification {
  id: string;
  title: string;
  date: string;
  issuer?: string;
  verificationLink: string;
  skillsCovered: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  highlights?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Cultural & Arts' | 'Leadership & Campus' | 'Mentorship & Teaching';
  description: string;
  statNumber?: string;
  statLabel?: string;
  icon: string;
}
