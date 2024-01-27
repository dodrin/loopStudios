import mobileHero from "../assets/mobile/image-hero.jpg";
import Burger from "../assets/icon-hamburger.svg?react";

export const Header = ({ toggleMenu, Logo, menuRef, menu }) => {
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
            className="flex flex-col fixed top-0 left-0 w-screen bg-black overflow-hidden hidden"
            ref={menuRef}
          >
            {menu.map((menuItem) => (
              <a className="text-white text-3xl" key={menuItem}>
                {menuItem.toUpperCase()}
              </a>
            ))}
          </div>
          <div className="buger" onClick={toggleMenu}>
            <Burger alt="Menu-icon" />
          </div>
        </div>
        <div className="hero">
          <h1 className="text-white text-5xl border-2 border-white my-52 px-6 py-8 text-left">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
      {/* bg image section end */}
    </header>
  );
};
