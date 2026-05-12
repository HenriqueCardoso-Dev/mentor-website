import './styles/NavigationMenu.css';
import Button from './ui/Button';
import './styles/Buttons.css'
import { useEffect, useState } from 'react';

export default function NavigationMenu() {

  const [ativo, setAtivo] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setAtivo(true);
      } else {
        setAtivo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#benefits", text: "Benefícios" },
    { href: "#salas", text: "Salas" },
    { href: "#rede-claramente", text: "Rede Claramente" },
    { href: "#supervisao", text: "Supervisão" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-[40px] flex items-center justify-between navigation-menu" style={{
        background: ativo ? "" : "#1a1030e8",
        transition: "0.3s",
      }}>
      <div className="w-[500px] flex gap-5 items-center p-3">
        <a href="/" className="back-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5m7-7l-7 7 7 7"></path></svg>
          Voltar
        </a>
        <div className="w-[1px] height-[18px]">|</div>

        <div className='hidden md:flex items-center'>
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

      {/* Hamburger Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden p-2 text-white"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Desktop Menu */}
      <ul className='hidden xl:flex nav-links gap-3 py-6 me-2 flex items-center'>
        {navLinks.map((link, index) => (
          <li key={index}><a href={link.href} className='text-gray-400 hover:text-white font-bold'>{link.text}</a></li>
        ))}
        <li><a href="#contato">
          <Button className="bg-green-300 text-black py-2 rounded-full px-5 cursor-pointer font-semibold">
            Quero Saber +
          </Button>
        </a></li>
      </ul>

      {/* Mobile Menu */}
      <div className={`xl:hidden absolute top-full left-0 right-0 bg-[#1a1030e9] flex flex-col items-center py-4 space-y-4 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className='text-gray-400 hover:text-white font-bold' onClick={() => setIsOpen(false)}>
            {link.text}
          </a>
        ))}
        <a href="#contato" onClick={() => setIsOpen(false)}>
          <Button className="bg-green-300 text-black py-2 rounded-full px-5 cursor-pointer font-semibold">
            Quero Saber +
          </Button>
        </a>
      </div>
    </nav>
  )
}