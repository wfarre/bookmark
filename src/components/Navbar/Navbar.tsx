import React from "react";
import "./Navbar.scss";

import { ReactComponent as BookmarkLogo } from "../../assets/images/logo-bookmark.svg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar" id="nav">
      <div className="navbar__logo">
        <BookmarkLogo className="logo" />
      </div>

      <div className="navbar__nav">
        <ul className="nav">
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
