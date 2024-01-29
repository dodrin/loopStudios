import mobileHero from "../assets/mobile/image-hero.jpg";
import Burger from "../assets/icon-hamburger.svg?react";
import CloseIcon from "../assets/icon-close.svg?react";

export const Header = ({ toggleMenu, Logo, menu, isMenuOpen }) => {
  return (
    <header>
      {/* bg image section */}
      <div
        className="p-5 py-8"
        style={{
          backgroundImage: `url(${mobileHero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Top nav menu */}
        <div className="flex justify-between items-center">
          <a href="#">
            <Logo alt="Loopstudios-logo" />
          </a>
          <div
            className={`fixed top-0 left-0 w-screen h-full bg-black overflow-hidden transition-opacity duration-500 ease-in-out ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-between items-center mx-5 my-8">
              <Logo alt="Loopstudios-logo" />
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
          <div className="buger" onClick={toggleMenu}>
            <Burger alt="Menu-icon" />
          </div>
        </div>
        <div className="hero">
          <h1 className="text-white text-5xl border-2 border-white my-52 px-4 py-6 text-left">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
      {/* bg image section end */}
    </header>
  );
};
