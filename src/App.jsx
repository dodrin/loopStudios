import "./App.css";
import Logo from "./assets/logo.svg?react";
import { Attribution } from "./components/Attribution";
import { Header } from "./components/Header";
import { Footer } from "./components/Bottom";
import { Interactive } from "./components/Interactive";
import { useState } from "react";
import { Creation } from "./components/Creation";
import { menu } from "./constants/navMenu";
import { CreationsDesktop } from "./components/CreationDesktop";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        Logo={Logo}
        menu={menu}
        isMenuOpen={isMenuOpen}
      />
      <Interactive />
      <Creation />
      <CreationsDesktop />
      <Footer menu={menu} Logo={Logo} />
      <Attribution />
    </>
  );
}

export default App;
