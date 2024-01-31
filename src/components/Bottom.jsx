import FacebookIcon from "../assets/icon-facebook.svg?react";
import InstagramIcon from "../assets/icon-instagram.svg?react";
import PinterestIcon from "../assets/icon-pinterest.svg?react";
import TwitterIcon from "../assets/icon-twitter.svg?react";

export const Footer = ({ menu, Logo }) => {
  return (
    <footer
      className="flex flex-col items-center p-8 py-16
                       md:flex-row md:items-between md:justify-between md:content-center"
    >
      <div className="md:ml-16">
        <Logo className="my-2 cursor-pointer " />
        <ul className="md:flex ">
          {menu.map((menuItem) => (
            <li
              className="my-5 cursor-pointer hover:text-stone-600 ease-in-out duration-300 md:mr-10"
              key={menuItem.id}
            >
              {menuItem.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center md:items-end md:mr-16">
        <div className="flex items-center m-5 md:">
          <FacebookIcon className="cursor-pointer mr-5" />
          <TwitterIcon className="cursor-pointer mr-5" />
          <PinterestIcon className="cursor-pointer mr-5" />
          <InstagramIcon className="cursor-pointer" />
        </div>
        <p className="attribution">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};
