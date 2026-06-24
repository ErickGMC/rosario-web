import type { Project } from '../types/portfolio';

/**
 * Filtra los proyectos según su categoría.
 */
export const filterProjectsByCategory = (
  projects: Project[],
  category: 'all' | 'primaria' | 'universidad'
): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

/**
 * Capitaliza la primera letra de un texto.
 */
export const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
