import './../styles/ProfessionalCard.css';

interface ProfessionalCardProps {
  name: string;
  crp: string;
  role: string;
  status: boolean;
  statusTitle: string;
  gender: boolean; // true = male | false = female
}

export default function ProfessionalCard({name, gender, crp, role, status, statusTitle} : ProfessionalCardProps) {

  const color = status ? 'emerald' : 'red';

  return (
    <div className='flex items-center justify-between w-full p-[16px] pro-card rounded-2xl'>
      <div className='flex items-center justify-start gap-3'>
        <div className="icon bg-[#6B4FA0] w-[44px] h-[44px] flex items-center justify-center rounded-full text-xl font-[Cormorant_Garamond]">
          {name.substring(0, 1)}
        </div>

        <div className='flex flex-col items-start text-sm'>
          <h1>
            {gender ? 'Dr.' : 'Dra.'} {name}
          </h1>

          <span className='text-xs text-gray-400 opacity-50'>
            CRP {crp.replace(/^(\d{2})(\d{0,5})$/, '$1/$2')} · {role}
          </span>
        </div>
      </div>

      <div className={`border-1 text-xs py-1 px-2 rounded-full status-bg-${color}`}>
        {statusTitle}
      </div>

    </div>
  )
}