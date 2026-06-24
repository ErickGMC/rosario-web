import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { Project } from '../types/portfolio';
import { ProjectCard } from '../components/ui/ProjectCard';
import { filterProjectsByCategory } from '../utils/helpers';
import { BookOpen, Star } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<'all' | 'primaria' | 'universidad'>('all');

  useEffect(() => {
    apiService.getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const filteredProjects = filterProjectsByCategory(projects, activeCategory);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <Star className="text-amber-400 animate-spin" size={40} fill="currentColor" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Floating Header Card */}
      <div className="bg-white/95 border-2 border-amber-300 p-8 rounded-3xl wobbly-bubble-1 shadow-[8px_12px_0px_0px_rgba(30,58,138,0.1)] mb-12 text-center max-w-2xl mx-auto animate-cozy-float relative">
        <div className="absolute top-2 left-4 text-amber-300 rotate-12 opacity-50">
          <BookOpen size={24} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
          Proyectos <span className="text-amber-500">Mágicos</span>
        </h1>
        <p className="mt-3 text-blue-800 text-sm font-medium">
          Un recorrido por las secuencias didácticas, investigaciones y locuras lindas que armé para mis clases.
        </p>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {(['all', 'primaria', 'universidad'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold cursor-pointer border-2 transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-blue-900 border-amber-500 shadow-[2px_3px_0px_0px_rgba(30,58,138,0.2)] scale-105'
                  : 'bg-white/80 text-blue-800 border-amber-200 hover:bg-amber-50 hover:border-amber-400 hover:-translate-y-0.5'
              }`}
            >
              {cat === 'all' && 'Todos'}
              {cat === 'primaria' && 'Primaria'}
              {cat === 'universidad' && 'Universidad'}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="animate-cozy-float-slow">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
