import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { Skill } from '../types/portfolio';
import { SkillBadge } from '../components/ui/SkillBadge';
import { Heart, Star, Sparkles } from 'lucide-react';

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getSkills().then((data) => {
      setSkills(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <Star className="text-amber-400 animate-spin" size={40} fill="currentColor" />
      </div>
    );
  }

  const pedagogicSkills = skills.filter((s) => s.category === 'pedagogicas');
  const toolSkills = skills.filter((s) => s.category === 'herramientas');

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-white/95 border-2 border-amber-300 p-8 rounded-3xl wobbly-bubble-3 shadow-[8px_12px_0px_0px_rgba(30,58,138,0.1)] mb-12 text-center max-w-2xl mx-auto animate-cozy-float relative">
        <div className="absolute top-2 left-6 text-amber-300 animate-magic">
          <Sparkles size={28} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
          Mis Habilidades
        </h1>
        <p className="mt-3 text-blue-800 text-sm font-medium">
          Posta, estas son las herramientas y dinámicas con las que hago magia en el aula.
        </p>
      </div>

      {/* Skills Columns */}
      <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
        {/* Pedagogical Column */}
        <div className="bg-white/90 border-2 border-amber-300 p-6 rounded-3xl wobbly-bubble-1 shadow-[4px_6px_0px_0px_rgba(30,58,138,0.1)] animate-cozy-float space-y-6">
          <h2 className="text-lg font-extrabold flex items-center gap-2.5 pb-3 border-b-2 border-amber-100 text-amber-500 font-sans">
            <Heart size={20} fill="currentColor" />
            Dinámicas y Pedagogía
          </h2>
          <div className="space-y-4">
            {pedagogicSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Tools Column */}
        <div className="bg-white/90 border-2 border-amber-300 p-6 rounded-3xl wobbly-bubble-2 shadow-[4px_6px_0px_0px_rgba(30,58,138,0.1)] animate-cozy-float-slow space-y-6">
          <h2 className="text-lg font-extrabold flex items-center gap-2.5 pb-3 border-b-2 border-amber-100 text-blue-500 font-sans">
            <Star size={20} fill="currentColor" />
            Herramientas Digitales
          </h2>
          <div className="space-y-4">
            {toolSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
