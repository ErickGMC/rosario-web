import type { Project } from '../../types/portfolio';
import { ExternalLink, BookOpen, GraduationCap, Link2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPrimaria = project.category === 'primaria';

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-amber-300 bg-white/90 p-6 transition-all duration-300 wobbly-bubble-2 shadow-[4px_6px_0px_0px_rgba(30,58,138,0.1)] hover:shadow-[4px_8px_0px_0px_rgba(251,191,36,0.3)] hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border-2 border-amber-200 shadow-[1px_2px_0px_0px_rgba(251,191,36,0.4)] ${
            isPrimaria 
              ? 'bg-cyan-100 text-cyan-800' 
              : 'bg-indigo-100 text-indigo-800'
          }`}>
            {isPrimaria ? <BookOpen size={12} /> : <GraduationCap size={12} />}
            {isPrimaria ? 'Primaria' : 'Universidad'}
          </span>
        </div>
        
        <h3 className="text-xl font-extrabold text-blue-900 group-hover:text-amber-500 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="mt-3 text-blue-800 text-sm leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border-2 border-amber-200 px-2.5 py-0.5 rounded-lg shadow-[1px_1px_0px_0px_rgba(251,191,36,0.2)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t-2 border-amber-100 flex gap-4">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-xs font-extrabold text-blue-700 hover:text-amber-600 transition-colors border-2 border-amber-200 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 shadow-[1px_2px_0px_0px_rgba(30,58,138,0.1)]"
          >
            <Link2 size={14} />
            <span>Recurso</span>
          </a>
        )}
        {project.demoUrl && (
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-xs font-extrabold text-blue-700 hover:text-amber-600 transition-colors border-2 border-amber-200 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 shadow-[1px_2px_0px_0px_rgba(30,58,138,0.1)]"
          >
            <ExternalLink size={14} />
            <span>Ver Proyecto</span>
          </a>
        )}
      </div>
    </div>
  );
}
