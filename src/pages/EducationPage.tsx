import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { Education } from '../types/portfolio';
import { GraduationCap, Star, Heart } from 'lucide-react';

export default function EducationPage() {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getEducation().then((data) => {
      setEducation(data);
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

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-white/95 border-2 border-amber-300 p-8 rounded-3xl wobbly-bubble-2 shadow-[8px_12px_0px_0px_rgba(30,58,138,0.1)] mb-12 text-center max-w-2xl mx-auto animate-cozy-float relative">
        <div className="absolute top-4 right-6 text-amber-200 animate-magic">
          <Heart size={32} fill="currentColor" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 flex items-center justify-center gap-3">
          <GraduationCap className="text-amber-500" size={32} />
          Estudios y Formación
        </h1>
        <p className="mt-3 text-blue-800 text-sm font-medium">
          Todo el recorrido académico que me ayudó a encontrar mi vocación docente (¡y sigo aprendiendo!).
        </p>
      </div>

      {/* Timeline of Cards */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {education.map((edu, idx) => (
          <div 
            key={edu.id} 
            className={`bg-white/90 border-2 border-amber-300 p-6 md:p-8 rounded-3xl shadow-[4px_6px_0px_0px_rgba(30,58,138,0.1)] transition-transform hover:-translate-y-1 hover:shadow-[4px_8px_0px_0px_rgba(251,191,36,0.3)] ${
              idx % 2 === 0 ? 'wobbly-bubble-1 animate-cozy-float' : 'wobbly-bubble-3 animate-cozy-float-slow'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b-2 border-amber-100 pb-4 mb-4">
              <div>
                <span className="text-xs font-bold font-mono text-blue-900 bg-amber-100 border-2 border-amber-300 px-3 py-1 rounded-full shadow-[1px_2px_0px_0px_rgba(251,191,36,0.4)]">
                  {edu.period}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold mt-4 text-blue-900">
                  {edu.degree}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-amber-600 font-bold text-sm mt-1">
                <Star size={16} fill="currentColor" />
                <span>{edu.institution}</span>
              </div>
            </div>
            <p className="text-blue-800 text-sm leading-relaxed font-medium">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
