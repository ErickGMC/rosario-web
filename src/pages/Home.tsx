import { BookOpen, Star, GraduationCap, Mail, Heart, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      {/* Welcome Card (Mandalay/Angelic Style) */}
      <div className="bg-white/95 border-2 border-amber-300 p-8 md:p-12 rounded-3xl wobbly-bubble-1 shadow-[8px_12px_0px_0px_rgba(30,58,138,0.1)] text-center max-w-2xl relative animate-cozy-float">
        
        {/* Cute stamp/icon in the top right (Eudamón Clock / Angelic vibe) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-16 h-16 border-2 border-dashed border-amber-400 rounded-full flex items-center justify-center rotate-12 select-none opacity-80 bg-amber-50">
          <Clock className="text-amber-500" size={28} />
        </div>

        {/* Small floating stars/magic motifs */}
        <div className="absolute -top-4 -left-4 animate-magic opacity-70">
          <Star className="text-amber-400" size={32} fill="currentColor" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-blue-800 font-bold bg-amber-100 border-2 border-amber-300 px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(251,191,36,0.6)]">
          ¡Che, bienvenidos a mi espacio educativo!
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mt-8 leading-tight">
          Educación con toda la <span className="text-amber-500">magia</span>
        </h1>

        <div className="mt-6 space-y-4">
          <p className="text-blue-800 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-medium">
            ¡Hola! Soy profe de educación primaria y universitaria. Posta, me encanta lo que hago y creo que en cada aula <span className="font-bold text-amber-500">hay un lugar</span> para aprender cosas increíbles.
          </p>
          <p className="text-blue-700/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto italic">
            "Resiste, que siempre hay algo nuevo por descubrir..."
          </p>
        </div>

        {/* Quick Navigation Bubbles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          <button
            onClick={() => onNavigate('projects')}
            className="flex flex-col items-center p-4 bg-blue-50 border-2 border-amber-300 rounded-2xl wobbly-bubble-3 shadow-[2px_3px_0px_0px_rgba(30,58,138,0.2)] hover:translate-y-0.5 hover:shadow-[1px_2px_0px_0px_rgba(251,191,36,0.4)] cursor-pointer transition-all hover:bg-white group"
          >
            <BookOpen className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-xs font-bold text-blue-900">Proyectos</span>
          </button>

          <button
            onClick={() => onNavigate('education')}
            className="flex flex-col items-center p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl wobbly-bubble-1 shadow-[2px_3px_0px_0px_rgba(30,58,138,0.2)] hover:translate-y-0.5 hover:shadow-[1px_2px_0px_0px_rgba(251,191,36,0.4)] cursor-pointer transition-all hover:bg-white group"
          >
            <GraduationCap className="text-amber-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-xs font-bold text-blue-900">Estudios</span>
          </button>

          <button
            onClick={() => onNavigate('skills')}
            className="flex flex-col items-center p-4 bg-cyan-50 border-2 border-amber-300 rounded-2xl wobbly-bubble-2 shadow-[2px_3px_0px_0px_rgba(30,58,138,0.2)] hover:translate-y-0.5 hover:shadow-[1px_2px_0px_0px_rgba(251,191,36,0.4)] cursor-pointer transition-all hover:bg-white group"
          >
            <Heart className="text-cyan-500 mb-2 group-hover:scale-110 transition-transform" size={24} fill="currentColor" />
            <span className="text-xs font-bold text-blue-900">Habilidades</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="flex flex-col items-center p-4 bg-indigo-50 border-2 border-amber-300 rounded-2xl wobbly-bubble-3 shadow-[2px_3px_0px_0px_rgba(30,58,138,0.2)] hover:translate-y-0.5 hover:shadow-[1px_2px_0px_0px_rgba(251,191,36,0.4)] cursor-pointer transition-all hover:bg-white group"
          >
            <Mail className="text-indigo-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
            <span className="text-xs font-bold text-blue-900">Contacto</span>
          </button>
        </div>
      </div>
    </div>
  );
}
