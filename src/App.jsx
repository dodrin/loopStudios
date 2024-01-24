import "./App.css";
import Footer from "./components/footer";
import Logo from './assets/logo.svg?react';

function App() {
  return (
    <>
      <div className="topnav">
        <a href="#">
          <Logo />
        </a>
        <div>
          <a>About</a>
          <a>Careers</a>
          <a>Events</a>
          <a>Products</a>
          <a>Support</a>
        </div>
      </div>
      <div className="hero">
        <h1>Immersive experiences that deliver</h1>
      </div>
      <div>
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
      Pocket borealis The curiosity Make it fisheye About Careers Events
      Products Support © 2021 Loopstudios. All rights reserved.
      <Footer />
    </>
  );
}

export default App;
