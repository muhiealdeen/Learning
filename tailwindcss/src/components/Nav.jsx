import { headerLogo } from '../assets//images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 maxc-lg:hidden">
          {/* <li className="inline-block mr-6">
            <a href="/">Home</a>
          </li>
          <li className="inline-block mr-6">
            <a href="/">Products</a>
          </li>
          <li className="inline-block mr-6">
            <a href="/">About</a>
          </li>
          <li className="inline-block mr-6">
            <a href="/">Contact</a>
          </li>
          <li className="inline-block">
            <img src={hamburger} alt="menu" width={20} height={20} />
          </li> */}
          {navLinks.map((item) => (
            <li key={item.leble}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
