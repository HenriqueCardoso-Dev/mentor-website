import { whatsappIcon } from "../FakeSVGIcons";

export default function WhatsappButton() {
  return (
    <div className="bg-green-300 flex gap-3 py-[16px] px-[32px] max-w-max items-center rounded-full text-black text-sm cursor-pointer">
      <svg
        style={{width: '18px', height: '18px'}}
        viewBox={whatsappIcon.viewBox} 
        fill={whatsappIcon.fill} 
      >
        <path d={whatsappIcon.d} />
      </svg>
      Falar pelo WhatsApp
    </div>
  )
}