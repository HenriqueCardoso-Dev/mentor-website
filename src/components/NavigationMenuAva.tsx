import "./styles/NavigationMenu.css";
import "./styles/Buttons.css";

interface MenuLink {
  text: string;
  href: string;
}

interface NavigationMenuAvaProps {
  className?: string;
  menuLinks?: MenuLink[];
}

export default function NavigationMenuAva({
  className = "",
  menuLinks = [],
}: NavigationMenuAvaProps) {
  return (
    <nav
      className={`z-[100] px-4 md:px-10 flex items-center justify-between navigation-menu ${className}`}
    >
      <div className="flex gap-5 items-center p-3">
        <a href="/" className="back-btn">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5m7-7l-7 7 7 7"></path>
          </svg>
          Voltar
        </a>

        <div className="w-[1px] h-[18px]">|</div>

        <div className="flex items-center">
          <a
            href="/"
            className="claramente-font text-[1.5rem] tracking-[0.08em] no-underline"
          >
            Claramente
          </a>
        </div>
      </div>

      {menuLinks.length > 0 && (
        <ul className="list nav-links py-6 me-2 flex items-center gap-5">
          {menuLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-white font-bold"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
