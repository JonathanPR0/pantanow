import { useState } from 'react';
import { GithubLogo } from 'phosphor-react';
import { Link } from 'react-scroll';
import Hamburguer from './Hamburger';

function Header({ links }) {
  const [isOpened, setIsOpened] = useState(false);
  function handleClick() {
    setIsOpened(!isOpened);
  }
  const background = isOpened
    ? 'bg-primaryColors-500 text-white'
    : 'bg-primaryColors-300 text-primaryColors-600';

  return (
    <header
      className={`w-full fixed z-50 top-0 left-0 shadow-md ${background} py-4 px-6 flex justify-center`}
    >
      <div className="w-full md:max-w-3xl lg:max-w-4xl flex items-center justify-between transition-colors ease-in">
        <h1
          className={`text-2xl font-bold ${
            !isOpened ? 'text-secondaryColors-500' : 'text-white'
          } transition-colors`}
        >
          #Panta
          <span
            className={`${!isOpened ? 'text-primaryColors-500' : 'text-whit'}`}
          >
            now
          </span>
        </h1>
        <nav className={`${isOpened ? 'active' : null}`}>
          <Hamburguer click={handleClick} />
          <ul
            className={`w-full md:w-auto md:h-auto font-bold md:font-normal absolute top-12 md:top-0 left-0 flex flex-col md:flex-row items-center gap-y-12 pt-10 md:pt-0 ${background} ${
              isOpened ? 'h-screen visible' : 'h-0 pt-0 invisible'
            } md:static transition-all ease-in text-2xl md:text-base md:visible`}
          >
            {links.map((link, i) => (
              <li
                key={i}
                className="block sm:inline-block md:ml-8 scroll-smooth cursor-pointer"
              >
                <Link
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpened(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="uppercase md:hidden py-4 px-8 bg-white text-primaryColors-500 text-base rounded-full">
              Conheça outros biomas
            </li>
            <li className="text-base font-normal">
              <a
                href="https://github.com/JonathanPR0/pantanow"
                className="flex flex-row md:hidden"
              >
                <GithubLogo size={24} className="mr-1" />
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
