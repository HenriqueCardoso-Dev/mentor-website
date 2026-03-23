import './../styles/DescriptionCard.scss';

interface DescriptionCard {
  number: string;
  title: string;
  description: string;
}

export default function NumericDescriptionCard({number, title, description} : DescriptionCard) {
  return (
    <div className="flex items-start gap-6 py-7 px-6 rounded-3xl border border-gray-800 numeric-description-card max-w-[560px]" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
      <div className="h-10 w-10 font-[Cormorant_Garamond] text-[2rem] text-(--lavender) opacity-45 description-number">
        {number}
      </div>

      <div className="flex flex-col gap-2 items-start">
        <h2 className="text-[0.9rem]">{title}</h2>
        <p className="text-[0.8rem] text-gray-500 text-start">{description}</p>
      </div>
    </div>
  )
}