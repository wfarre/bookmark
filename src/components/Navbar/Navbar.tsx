import React, { useState } from "react";
import "./Navbar.scss";

import { ReactComponent as BookmarkLogo } from "../../assets/images/logo-bookmark.svg";
import { ReactComponent as CloseButton } from "../../assets/images/icon-close.svg";
import { ReactComponent as MenuButton } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as BookmarkLogoWhite } from "../../assets/images/logo-bookmark-white.svg";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? "navbar open" : "navbar"} id="nav">
      <div className="navbar__logo">
        <BookmarkLogo className={isOpen ? "logo hidden" : "logo"} />
        <BookmarkLogoWhite className={isOpen ? "logo" : "hidden"} />
      </div>

      <div className="navbar__nav">
        <div className="navbar__nav__menu" onClick={() => setIsOpen(!isOpen)}>
          <MenuButton className={isOpen ? "hidden" : "icon"} />
          <CloseButton className={isOpen ? "icon" : "hidden"} />
        </div>
        <ul className={isOpen ? "nav open" : "nav"}>
          <li className="nav__item">
            <a className="nav__item__link" href="#">
              Features
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="#">
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link login" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
