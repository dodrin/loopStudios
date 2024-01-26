import "./App.css";

// SVG assets
import Logo from "./assets/logo.svg?react";
import FacebookIcon from "./assets/icon-facebook.svg?react";
import InstagramIcon from "./assets/icon-instagram.svg?react";
import PinterestIcon from "./assets/icon-pinterest.svg?react";
import TwitterIcon from "./assets/icon-twitter.svg?react";
import Burger from "./assets/icon-hamburger.svg?react";
import interactive from "./assets/mobile/image-interactive.jpg";
import mobileHero from "./assets/mobile/image-hero.jpg";

import Attribution from "./components/Attribution";
import { useRef } from "react";

function App() {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.display =
        menuRef.current.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${mobileHero})` }}>
        {/* Top nav menu */}
        <div className="">
          <a href="#">
            <Logo />
          </a>
          <div className="bg-black overflow-hidden hidden " ref={menuRef}>
            <a>About</a>
            <a>Careers</a>
            <a>Events</a>
            <a>Products</a>
            <a>Support</a>
          </div>
          <div className="buger" onClick={toggleMenu}>
            <Burger />
          </div>
        </div>
        <div className="hero">
          <h1 class="text-white">Immersive experiences that deliver</h1>
        </div>
      </div>

      <div>
        <img src={interactive} alt="Person-wearing-VR-goggle" />
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
      <h2>Our creations</h2>
      See all Deep earth Night arcade Soccer team VR The grid From up above VR
      Pocket borealis The curiosity Make it fisheye
      <footer className="footer">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products Support</li>
        </ul>

        <div>
          <FacebookIcon alt="Facebook-icon" />
          <TwitterIcon alt="Twitter-icon" />
          <PinterestIcon alt="Pinterest-icon" />
          <InstagramIcon alt="Instagram-icon" />
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </footer>
      <Attribution />
    </>
  );
}

export default App;
