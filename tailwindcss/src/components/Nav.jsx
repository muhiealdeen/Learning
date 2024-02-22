import { useState } from 'react';
import { headerLogo } from '../assets//images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul
          className={`max-lg:${
            isMobileMenuOpen ? '' : 'hidden' // Toggle visibility based on state
          } flex items-center justify-center flex-1 gap-16`}
        >
          {navLinks.map((item) => (
            <li key={item.leble}>
              <a
                href={item.href}
                className="text-lg leading-normal font-montserrat text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="menu"
            width={25}
            height={25}
            onClick={toggleMobileMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
