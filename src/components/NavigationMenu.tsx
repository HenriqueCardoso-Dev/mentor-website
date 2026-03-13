import './styles/NavigationMenu.css';
import Button from './ui/Button';
import './styles/Buttons.css'

export default function NavigationMenu() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 py-[22px] px-[40px] d-flex items-center justify-between navigation-menu">
      <div className="d-flex items-center gap-[20px]">
        <a href="/" className="back-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5m7-7l-7 7 7 7"></path></svg>
          Voltar
        </a>
        <div className="w-[1px] height-[18px]"></div>
        <a href="/" 
          className="
            font-['Cormorant Garamond', serif]
            text-[1.5rem]
            tracking-[0.08em]
            no-underline
        ">Claramente</a>
        <span className="nav-badge"
          className="
            text-[0.65rem]
            tracking-[0.15em]
            uppercase
            text-emerald-600
            py-[4px]
            px-[10px]
            rounded-[50px]
            border-[1px]
            border-opacity-80
        " >Para Profissionais</span>
      </div>

      <ul className='list nav-links py-6 me-16'>
        <li><a href="#">Benefícios</a></li>
        <li><a href="#">Salas</a></li>
        <li><a href="#">Rede Claramente</a></li>
        <li><a href="#">Supervisão</a></li>
        <li><a href="#">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-black py-2 rounded-full px-5 cursor-pointer">
            Quero Saber Mais
          </Button>
        </a></li>
      </ul>
    </nav>
  )
}