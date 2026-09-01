export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: 'IoT & Embedded Systems' | 'Data Science & ML' | 'Big Data & SQL' | 'Frontend & Auth' | 'Database & Systems' | 'Web & E-Commerce';
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoAvailable?: boolean;
  metrics?: { label: string; value: string }[];
  simulatorType?: 'arduino-smart-classroom' | 'python-data-ml' | 'hadoop-sql-mgmt' | 'login-auth' | 'school-mgmt' | 'sneaker-store';
  codeSnippet?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'languages' | 'mlBigData' | 'databaseTools' | 'coreDsa' | 'softSkills' | 'frontend' | 'dataCertifications';
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
  category: 'Competitive Programming & DSA' | 'Leadership & Campus Impact' | 'Embedded IoT Innovation' | 'Technical Training' | 'Cultural & Arts' | 'Leadership & Campus' | 'Mentorship & Teaching';
  description: string;
  statNumber?: string;
  statLabel?: string;
  icon: string;
}

