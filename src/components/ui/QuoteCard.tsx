import './../styles/QuoteCard.css'

interface QuoteCard {
  quote: string;
  signature: string;
  className?: string | '';
}

export default function QuoteCard({quote, signature, className} : QuoteCard) {
  return (
    <div className={`${className} sup-quote border border-gray-800`}>
      <div className="sup-quote-mark">"</div>
      <p className='font-[Cormorant_Garamond] text-[1.55rem]'>{quote}</p>

      <div>
        <span></span>
        <p className='text-xs text-gray-500 font-semibold'><span className="tracking-[-2px] me-2 text-emerald-200">----</span>{signature}</p>
      </div>
    </div>
  )
}