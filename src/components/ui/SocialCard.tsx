import './../styles/SocialCard.css'
import type { JSX } from "react";

interface SocialCard {
  icon: JSX.Element
  label: string;
  content: string;
}

export default function SocialCard({icon, label, content} : SocialCard) {
  return(
    <div className="info-card flex gap-4 description-card p-5 rounded-2xl border border-gray-700" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
      <div className="icon-bg-emerald h-12 w-12 rounded-xl p-[14px] flex">
        {icon}
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="uppercase text-xs text-gray-500">{label}</h2>
        <p className="text-md">{content}</p>
      </div>
    </div>
  )
}