import './styles/NavigationMenu.css';
import Button from './ui/Button';

export default function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <ul className='list nav-links'>
        <li><a href="#">Benefícios</a></li>
        <li><a href="#">Salas</a></li>
        <li><a href="#">Rede Claramente</a></li>
        <li><a href="#">Supervisão</a></li>
        <li><a href="#">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quero Saber Mais
          </Button>
        </a></li>
      </ul>
    </nav>
  )
}