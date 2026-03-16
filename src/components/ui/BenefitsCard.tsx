import type { JSX } from "react";
import "./../styles/BenefitsCard.css";

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function BenefitsCard ( { icon, title, description }: Benefit) {


  return (
    <div  className="w-full max-w-[285px] min-h-[286px] flex flex-col items-start py-[36px] px-[28px] border-1 border-zinc-700 rounded-3xl gap-6 bg-violet-950 benefit-card">
      <div className={`icon-bg-emerald max-w-[52px] h-[52px] w-full rounded-2xl flex items-center justify-center p-[12px]`}>
        {icon}
      </div>

      <h2 className="font-[Cormorant_Garamond] text-[1.3rem] font-semibold">{title}</h2>
    
      <p className="benefit-desc text-start text-sm text-gray-400">{description}</p>
    </div>
  )
}