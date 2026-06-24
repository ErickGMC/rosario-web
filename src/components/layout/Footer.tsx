import { Mail, Star } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-amber-300 bg-white/60 py-12 transition-all">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-extrabold text-blue-900">
          <Star className="text-amber-400" size={20} fill="currentColor" />
          <span className="font-sans">Profe</span>
        </div>
        
        <p className="text-sm text-blue-800 text-center md:text-left font-medium">
          &copy; {currentYear} Portafolio Educativo. Diseñado con mucha magia y onda ✨
        </p>

        <div className="flex gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-xl border-2 border-amber-300 bg-white hover:bg-amber-50 text-blue-800 hover:text-amber-500 transition-all shadow-[1px_2px_0px_0px_rgba(251,191,36,0.6)] hover:translate-y-0.5 active:translate-y-1 active:shadow-none"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-xl border-2 border-amber-300 bg-white hover:bg-amber-50 text-blue-800 hover:text-amber-500 transition-all shadow-[1px_2px_0px_0px_rgba(251,191,36,0.6)] hover:translate-y-0.5 active:translate-y-1 active:shadow-none"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a 
            href="mailto:correo@ejemplo.com" 
            className="p-2 rounded-xl border-2 border-amber-300 bg-white hover:bg-amber-50 text-blue-800 hover:text-amber-500 transition-all shadow-[1px_2px_0px_0px_rgba(251,191,36,0.6)] hover:translate-y-0.5 active:translate-y-1 active:shadow-none"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
