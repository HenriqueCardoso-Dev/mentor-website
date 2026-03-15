import './styles/NavigationMenu.css';
import Button from './ui/Button';
import './styles/Buttons.css'

export default function NavigationMenu() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-[40px] flex items-center justify-between navigation-menu">
      <div className="w-[500px] flex gap-5 items-center p-3">
        <a href="/" className="back-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5m7-7l-7 7 7 7"></path></svg>
          Voltar
        </a>
        <div className="w-[1px] height-[18px]">|</div>

        <div className='flex items-center'>
          <a href="/" 
            className="
              claramente-font
              text-[1.5rem]
              tracking-[0.08em]
              no-underline
          ">Claramente</a>
          <span
            className="
              nav-badge
              text-[0.55rem]
              tracking-[0.15em]
              uppercase
              text-emerald-600
              py-[6px]
              px-[12px]
              rounded-[50px]
              border-[1px]
              ml-6
          " >Para Profissionais</span>
        </div>
      </div>

      <ul className='list nav-links py-6 me-2 flex items-center'>
        <li><a href="#" className='text-gray-400 hover:text-white font-bold'>Benefícios</a></li>
        <li><a href="#" className='text-gray-400 hover:text-white font-bold'>Salas</a></li>
        <li><a href="#" className='text-gray-400 hover:text-white font-bold'>Rede Claramente</a></li>
        <li><a href="#" className='text-gray-400 hover:text-white font-bold'>Supervisão</a></li>
        <li><a href="#">
          <Button className="bg-emerald-400 hover:bg-emerald-500 text-black py-2 rounded-full px-5 cursor-pointer">
            Quero Saber Mais
          </Button>
        </a></li>
      </ul>
    </nav>
  )
}