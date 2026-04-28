
interface StatisticCard {
  statistic: string;
  description: string;
}

export default function StatisticCard({statistic, description} : StatisticCard) {
  return (
    <div className="stat-card w-full border-1 border-gray-700 rounded-xl p-[12px]" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
      <div className="number font-[Cormorant_Garamond] text-[1.4rem] text-emerald-200">
        {statistic}
      </div>
      <p className="text-[0.65rem] text-gray-400">
        {description}
      </p>
    </div>
  )
}