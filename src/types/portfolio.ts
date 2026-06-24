export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'primaria' | 'universidad';
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0 a 100
  category: 'pedagogicas' | 'herramientas';
}
