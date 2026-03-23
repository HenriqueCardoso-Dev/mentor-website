interface Notification {
  title: string;
  dotColor: string;
  status: string;
}

export default function Notification({dotColor, title, status} : Notification) {
  return (
    <div className="flex justify-between w-full py-2.5 px-3 items-center border-1 border-gray-700 rounded-xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.03)'}}>
      <div className="flex items-center gap-3">
        <div className={`dot bg-${dotColor}-400 h-2 w-2 rounded-full`}></div>
        <h2 className="text-[0.78rem] text-gray-400">{title}</h2>
      </div>

      <p className="text-[0.65rem] text-gray-500 font-semibold">
        {status}
      </p>
    </div>
  )
}