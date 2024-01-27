import "./App.css";
import Logo from "./assets/logo.svg?react";
import interactive from "./assets/mobile/image-interactive.jpg";


import Attribution from "./components/Attribution";
import { useRef } from "react";
import { Header } from "./components/Header";
import Footer from "./components/footer";

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
      
      {/* The leader in interractive VR section */}
      <div className="flex flex-col m-6 my-12">
        <img
          src={interactive}
          alt="Person-wearing-VR-goggle"
          className="my-10"
        />

        <div className="mx-3">
          <h2 className="text-3xl">
            {`The leader in interactive VR`.toUpperCase()}
          </h2>
          <p className="mx-7 my-3">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <h2 className="text-3xl">{`Our creations`.toUpperCase()}</h2>
      See all Deep earth Night arcade Soccer team VR The grid From up above VR
      Pocket borealis The curiosity Make it fisheye
      <Footer />
      <Attribution />
    </>
  );
}

export default App;
