import type { JSX } from "react";
import "./../styles/BenefitsCard.css";

interface Benefit {
  icon?: JSX.Element;
  emoji?: string;
  title: string;
  description: string;
  badges?: string[];
  theme?: 'cream' | 'default' | undefined;
  watermark ?: 'purple' | 'green' | 'yellow'; // color for the watermark.
  className ?: string;
}

export default function BenefitsCard ( { icon, title, description, badges, theme, emoji, watermark, className }: Benefit) {


  return (
    <div  className={`relative overflow-hidden shadow-md w-full lg:max-w-[350px] flex flex-col items-start py-[36px] px-[28px] border border-zinc-700 rounded-3xl gap-6 benefit-card bg-(--cream) ${theme === 'cream' ? 'bg-(--cream)' : 'bg-[#ffffff08]'} ${className || ''}`}>

      {watermark && (
        <div className={`absolute -top-15 -right-15 w-40 h-40 bg-${watermark}-400 opacity-30 rounded-full`}></div>
      )}

      {icon && (
        <div className={`icon-bg-emerald max-w-[52px] h-[52px] w-full rounded-2xl p-[12px]`}>
          {icon}
        </div>
      )}

      {emoji && (
        <div>
          <span className="text-5xl">{emoji}</span>
        </div>
      )}

      <h2 className={`font-[Playfair_Display] text-xl font-semibold ${theme === 'cream' ? 'text-black' : 'text-white'}`}>{title}</h2>
    
      <p className={`benefit-desc text-start text-sm ${theme === 'cream' ? 'text-(--muted)' : 'text-gray-400'}`}>{description}</p>

      {badges && (
        <div className="flex gap-2 items-center flex-wrap justify-start">
          {badges.map((badge, index) => (
            <span key={index} className="bg-(--lavender)/20 text-(--purple) text-xs px-3 py-1.5 rounded-full border border-(--lavender)/20 flex">
              {badge}
            </span>
          ))}
        </div>
      ) }
    </div>
  )
}