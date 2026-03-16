import type { JSX } from "react";
import Button from "./Button";
import "./../styles/SubscriptionCard.css";

interface SubscriptionCardProps {
  icon: JSX.Element;
  frequency: string;
  frequencyDescription: string;
  price: string
  benefits: string[];
  buttonText: string;
  isPremium?: boolean;
}

export function SubscriptionCard({ icon, frequency, frequencyDescription, price, benefits, buttonText, isPremium }: SubscriptionCardProps) {
  return (
    <div className={`min-w-[384px] w-full min-h-[627px] rounded-[28px] subscription-card py-[40px] px-[32px] flex flex-col justify-between ${isPremium && 'isPremium'}`}>
      <div className="head-card flex flex-col gap-6 border-b-1 border-zinc-700 relative">

        {isPremium && 
          <span className="absolute right-0 py-[5px] px-[12px] rounded-full isPremium-badge uppercase text-[0.68rem] tracking-[0.12em]">Mais escolhido</span>
        }

        <div className="rounded-2xl subscription-icon w-[52px] h-[52px] p-[12px]">
          {icon}
        </div>

        <div className="flex flex-col items-start gap-1">
          <h5 className="text-2xl font-[Cormorant_Garamond] font-semibold">{frequency}</h5>
          <h6 className="text-xs text-gray-500 font-semibold
          ">{frequencyDescription}</h6>
        </div>

        <p className="font-[Cormorant_Garamond] text-4xl text-emerald-400 text-start mb-6">
          {price}
        </p>
      </div>



      <div className="benefits-list flex flex-col gap-2 items-start mt-6 h-full ">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item text-sm text-gray-400">
            ✔️ {benefit}
          </div>
        ))}
      </div>

      <a className={`border-1 w-full p-[14px] rounded-xl text-sm ${isPremium ? 'bg-[var(--sage)] text-[#0e091d]' : ''} cursor-pointer`}>
        {buttonText}
      </a>
    </div>
  )
}