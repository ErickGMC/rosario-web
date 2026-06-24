import { useEffect, useState } from 'react';

/**
 * Custom hook para rastrear qué sección está visible en la pantalla.
 * Útil para iluminar la sección activa en el menú de navegación.
 */
export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      options || { rootMargin: '-20% 0px -60% 0px' } // Se activa cuando el elemento está en la zona media-superior
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [ids, options]);

  return activeId;
}
