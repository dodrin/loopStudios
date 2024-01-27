import Logo from "../assets/logo.svg?react";
import FacebookIcon from "../assets/icon-facebook.svg?react";
import InstagramIcon from "../assets/icon-instagram.svg?react";
import PinterestIcon from "../assets/icon-pinterest.svg?react";
import TwitterIcon from "../assets/icon-twitter.svg?react";

export default function Footer() {

  const menu = ["About", "Careers", "Events", "Products", "Supoort"];

  return (
    <footer className="footer flex flex-col items-center p-8 py-16">
      <Logo className="m-2" />
      <ul>
        {menu.map((menuItem) => (
          <li className="my-5" key={menuItem}>{menuItem}</li>
        ))}
      </ul>

      <div className="flex items-center m-5">
        <FacebookIcon className="mr-5" alt="Facebook-icon" />
        <TwitterIcon className="mr-5" alt="Twitter-icon" />
        <PinterestIcon className="mr-5" alt="Pinterest-icon" />
        <InstagramIcon alt="Instagram-icon" />
      </div>
      <p>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
  );
}
