import Burger from "../assets/icon-hamburger.svg?react";
import CloseIcon from "../assets/icon-close.svg?react";
import "../styles/Header.css";

export const Header = ({ toggleMenu, Logo, menu, isMenuOpen }) => {
  return (
    <header>
      {/* bg image section */}
      <div className="p-5 py-8" id="top-bg">
        {/* Top nav menu */}
        <div className="flex justify-between items-center md:mx-8">
          <a href="#">
            <Logo alt="Loopstudios-logo" className="cursor-pointer" />
          </a>
          {/*Mobile menu */}
          <div
            className={`fixed top-0 left-0 w-screen h-full bg-black z-50 overflow-hidden transition-opacity duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } md:hidden`}
          >
            <div className="flex justify-between items-center mx-5 my-8">
              <Logo alt="Loopstudios-logo" className="cursor-pointer" />
              <CloseIcon
                onClick={toggleMenu}
                alt="close-icon"
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col my-48">
              {menu.map((menuItem) => {
                const { id, title, link } = menuItem;
                return (
                  <div className="flex mx-7 my-5" key={id}>
                    <a
                      href={link}
                      className="text-white text-3xl hover:text-stone-600 ease-in-out duration-300"
                    >
                      {title.toUpperCase()}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sm:hidden" onClick={toggleMenu}>
            <Burger alt="Menu-icon" />
          </div>
          {/* Mobile menu end */}

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            {menu.map((menuItem) => {
              const { id, title, link } = menuItem;
              return (
                <div key={id}>
                  <a
                    href={link}
                    className="mx-4 text-white text-2xl hover:text-black hover:border-b-4 border-black ease-in-out duration-300 "
                    id="desktop-menu"
                  >
                    {title}
                  </a>
                </div>
              );
            })}
          </div>
          {/* Desktop menu end */}
        </div>
        <div className="hero md:mx-32 md:w-1/3">
          <h1 className="text-white text-5xl border-2 border-white my-52 px-4 py-6 text-left">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
      
    </header>
  );
};
