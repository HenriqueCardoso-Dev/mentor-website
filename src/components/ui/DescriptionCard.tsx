import type { JSX } from "react";
import './../styles/DescriptionCard.scss';

interface DescriptionCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function DescriptionCard({icon, title, description} : DescriptionCard) {
  return (
    <div className="flex gap-6 description-card p-5 rounded-xl border border-transparent">
      <div className="icon-bg-emerald h-10 w-10 rounded-xl p-2.5 flex">
        {icon}
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-[0.9rem]">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}