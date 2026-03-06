import './../styles/SplashCard.css';

export default function SplashCard({ title, subTitle, description, icon, link, linkTitle, typecard }: { title: string, subTitle: string, description: string, icon: {
  viewBox: string, fill: string,
  stroke: string,
  strokeWidth: number,
  d: string
}, link: string, linkTitle: string, typecard: 'patient' | 'professional' }) {
  return (
    <a href={link} className={`profile-card ${typecard} c1`}>
      <div className="card-corner"></div>
      <div className="card-icon">
        <svg viewBox={icon.viewBox} fill={icon.fill} stroke={icon.stroke} stroke-width={icon.strokeWidth}>
          <path d={icon.d}></path>
        </svg>
      </div>
      <div className="card-label">{title}</div>
      <div className="card-title">{subTitle}</div>
      <div className="card-desc">{description}</div>
      <div className="card-arrow">
        {linkTitle}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </div>
    </a>
  )
}

