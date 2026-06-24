import { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', id: 'home' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Estudios', id: 'education' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Contacto', id: 'contact' },
  ];

  const handlePageClick = (id: string) => {
    setIsOpen(false);
    onPageChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4">
      <div className="max-w-5xl mx-auto bg-white/90 border-2 border-amber-300 px-6 py-3 rounded-3xl wobbly-bubble-1 shadow-[4px_5px_0px_0px_rgba(251,191,36,0.6)] flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div 
          onClick={() => handlePageClick('home')}
          className="flex items-center gap-2 cursor-pointer font-extrabold text-xl text-blue-900 hover:text-amber-500 transition-colors"
        >
          <Star className="text-amber-400 animate-magic" size={24} fill="currentColor" />
          <span className="font-sans">Profe</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handlePageClick(item.id)}
                  className={`px-4 py-2 text-sm font-bold transition-all rounded-2xl cursor-pointer ${
                    currentPage === item.id 
                      ? 'bg-amber-400 text-blue-900 border-2 border-amber-500 shadow-[1px_2px_0px_0px_rgba(30,58,138,0.3)] scale-105' 
                      : 'text-blue-800 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Action */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border-2 border-amber-300 bg-white text-blue-900 cursor-pointer shadow-[1px_2px_0px_0px_rgba(251,191,36,0.6)]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto bg-white/95 border-2 border-amber-300 px-6 py-4 rounded-3xl wobbly-bubble-3 shadow-[4px_5px_0px_0px_rgba(251,191,36,0.6)] transition-all">
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handlePageClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 text-base font-bold rounded-2xl border-2 ${
                    currentPage === item.id 
                      ? 'bg-amber-400 text-blue-900 border-amber-500 shadow-[1px_2px_0px_0px_rgba(30,58,138,0.3)]' 
                      : 'text-blue-800 hover:text-amber-600 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
