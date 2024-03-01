import { useState, useEffect } from 'react'; // Add the missing import statement for useEffect
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Initialize to true on larger screens

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(true);
      } else {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log('isMobileMenuOpen', isMobileMenuOpen);

  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        {/* Conditionally render the ul based on isMobileMenuOpen state */}
        {isMobileMenuOpen && (
          <ul className="flex items-center justify-center flex-1 gap-4 md:flex-row md:gap-16">
            {/* <ul className="flex items-center justify-center flex-1 flex-col gap-4 md:flex-row md:gap-16"></ul> */}
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="sm:text-sm text-xs md:text-lg leading-normal font-montserrat text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
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
