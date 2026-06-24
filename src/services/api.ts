import type { Project, Education, Skill } from '../types/portfolio';

// Datos estáticos iniciales - Perfil de Profesora (Primaria y Universidad)
const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Jugando con los números (Primaria)',
    description: 'Material didáctico interactivo para enseñar matemáticas básicas de forma lúdica y mágica. Los chicos aprenden operaciones mientras resuelven acertijos.',
    category: 'primaria',
    technologies: ['Didáctica', 'Juegos de Mesa', 'Psicopedagogía'],
    githubUrl: 'https://ejemplo.com'
  },
  {
    id: 'p2',
    title: 'Posta, así aprendemos mejor',
    description: 'Investigación universitaria sobre el impacto de la gamificación en aulas de educación superior. Presentado en el Congreso Nacional de Educación.',
    category: 'universidad',
    technologies: ['Investigación', 'Gamificación', 'Tesis'],
    demoUrl: 'https://demo.com'
  },
  {
    id: 'p3',
    title: 'Planificaciones Mágicas',
    description: 'Set de plantillas descargables de planificación anual y mensual para docentes de primaria, con un diseño súper inspirador (¡re buena onda!).',
    category: 'primaria',
    technologies: ['Canva', 'Planificación', 'Diseño Curricular'],
    githubUrl: 'https://ejemplo.com'
  },
  {
    id: 'p4',
    title: 'Campus Virtual Renovado',
    description: 'Implementación de un nuevo diseño pedagógico en el entorno virtual de la cátedra de Didáctica I (Universidad), aumentando el engagement de los alumnos.',
    category: 'universidad',
    technologies: ['Moodle', 'Pedagogía Digital', 'Diseño Instruccional'],
    demoUrl: 'https://demo.com'
  }
];

const MOCK_EDUCATION: Education[] = [
  {
    id: 'e1',
    degree: 'Profesorado en Educación Primaria',
    institution: 'Instituto Superior de Formación Docente',
    period: '2015 - 2019',
    description: 'Formación integral en psicología evolutiva, didáctica de las ciencias y prácticas pedagógicas lúdicas (¡con mucha onda!).'
  },
  {
    id: 'e2',
    degree: 'Licenciatura en Ciencias de la Educación',
    institution: 'Universidad Nacional',
    period: '2019 - 2023',
    description: 'Especialización en investigación educativa, diseño curricular para educación superior y tecnologías aplicadas a la enseñanza.'
  },
  {
    id: 'e3',
    degree: 'Maestría en Docencia Universitaria',
    institution: 'Universidad Nacional',
    period: '2023 - Presente',
    description: 'Profundizando en dinámicas de aulas universitarias, innovación pedagógica y evaluación formativa.'
  }
];

const MOCK_SKILLS: Skill[] = [
  // Habilidades Pedagógicas
  { name: 'Manejo de Grupo', level: 95, category: 'pedagogicas' },
  { name: 'Didáctica y Planificación', level: 90, category: 'pedagogicas' },
  { name: 'Gamificación en el Aula', level: 85, category: 'pedagogicas' },
  { name: 'Innovación Educativa', level: 80, category: 'pedagogicas' },
  { name: 'Empatía y Resolución de Conflictos', level: 100, category: 'pedagogicas' },
  
  // Herramientas Digitales
  { name: 'Canva & Diseño de Materiales', level: 95, category: 'herramientas' },
  { name: 'Moodle / Google Classroom', level: 90, category: 'herramientas' },
  { name: 'Herramientas Interactivas (Kahoot, Genially)', level: 85, category: 'herramientas' },
  { name: 'Paquete Office / Google Workspace', level: 95, category: 'herramientas' }
];

/**
 * Servicio simulado para obtener datos del portafolio.
 */
export const apiService = {
  getProjects: async (): Promise<Project[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_PROJECTS), 200);
    });
  },

  getEducation: async (): Promise<Education[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_EDUCATION), 200);
    });
  },

  getSkills: async (): Promise<Skill[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_SKILLS), 200);
    });
  }
};
