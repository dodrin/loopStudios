import "./App.css";
import Logo from "./assets/logo.svg?react";
import { Attribution } from "./components/Attribution";
import { Header } from "./components/Header";
import { Footer } from "./components/footer";
import { Interactive } from "./components/Interactive";
import { useRef } from "react";
import { Creation } from "./components/Creation";

function App() {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.display =
        menuRef.current.style.display === "block" ? "none" : "block";
    }
  };

  const menu = ["About", "Careers", "Events", "Products", "Supoort"];

  return (
    <>
      <Header toggleMenu={toggleMenu} Logo={Logo} menuRef={menuRef} menu={menu} />
      <Interactive />
      <Creation />
      <Footer menu={menu} Logo={Logo}/>
      <Attribution />
    </>
  );
}

export default App;
