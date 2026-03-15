import type { JSX } from 'react';
import './styles/NotifyToast.css';

interface NotifyToastProps {
  icon: JSX.Element;
  title: string;
  description: string;
  status: boolean; //true - good | false - bad
  statusTitle: string;
}

export default function NotifyToast({
  icon,
  title,
  description,
  status,
  statusTitle,
}: NotifyToastProps) {

  const color = status ? 'emerald' : 'red';

  return (
    <div className="border-1 rounded-2xl p-[15px] flex items-center text-xs gap-5">
      <div className={`status-bg-${color} max-w-[40px] h-[35px] w-full rounded-lg flex items-center justify-center p-[10px]`}>
        {icon}
      </div>
      <div className="flex flex-col gap-1 items-start">
        <h5 className="text-xs font-bold text-gray-300 text-start">{title}</h5>
        <p className="text-xs text-gray-500">
          {description}
        </p>
      </div>
      <div className={`border-1 py-1 px-2 rounded-full status-bg-${color}`}>
        {statusTitle}
      </div>
    </div>
  )
}