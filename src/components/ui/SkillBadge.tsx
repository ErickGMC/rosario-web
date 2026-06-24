import type { Skill } from '../../types/portfolio';

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const isPedagogic = skill.category === 'pedagogicas';

  // Colores celestiales / mágicos
  let bgClass = 'bg-cyan-50/50';
  let barClass = 'from-cyan-400 to-blue-500';
  let textBadgeClass = 'text-blue-900 bg-cyan-100';

  if (isPedagogic) {
    bgClass = 'bg-amber-50/50';
    barClass = 'from-amber-400 to-amber-500';
    textBadgeClass = 'text-amber-900 bg-amber-100';
  }

  return (
    <div className={`border-2 border-amber-300 p-4 rounded-2xl wobbly-bubble-3 shadow-[2px_3px_0px_0px_rgba(30,58,138,0.1)] transition-transform hover:scale-[1.03] hover:shadow-[4px_5px_0px_0px_rgba(251,191,36,0.3)] ${bgClass}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-extrabold text-blue-900 text-sm">{skill.name}</span>
        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg border-2 border-amber-200 shadow-[1px_1px_0px_0px_rgba(251,191,36,0.2)] ${textBadgeClass}`}>
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-white border-2 border-amber-200 h-2.5 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`bg-gradient-to-r ${barClass} h-full rounded-full transition-all duration-1000 ease-out`} 
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
