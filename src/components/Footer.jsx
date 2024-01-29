import FacebookIcon from "../assets/icon-facebook.svg?react";
import InstagramIcon from "../assets/icon-instagram.svg?react";
import PinterestIcon from "../assets/icon-pinterest.svg?react";
import TwitterIcon from "../assets/icon-twitter.svg?react";

export const Footer = ({ menu, Logo }) => {

  return (
    <footer className="flex flex-col items-center p-8 py-16">
      <Logo className="m-2" />
      <ul>
        {menu.map((menuItem) => (
          <li className="my-5 cursor-pointer hover:text-stone-600 ease-in-out duration-300" key={menuItem}>{menuItem}</li>
        ))}
      </ul>

      <div className="flex items-center m-5">
        <FacebookIcon className="cursor-pointer mr-5" alt="Facebook-icon" />
        <TwitterIcon className="cursor-pointer mr-5" alt="Twitter-icon" />
        <PinterestIcon className="cursor-pointer mr-5" alt="Pinterest-icon" />
        <InstagramIcon className="cursor-pointer" alt="Instagram-icon" />
      </div>
      <p className="attribution">© 2021 Loopstudios. All rights reserved.</p>
    </footer>
  );
}
