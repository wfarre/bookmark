import React from "react";
import "./assets/Header.scss";
import { ReactComponent as HeroImage } from "./assets/illustration-hero.svg";
// import { ReactComponent as Bgdot } from "../../assets/images/illustration-features-tab-1.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      {/* <div className="decoration">
        <Bgdot />
      </div> */}
      <div className="header__image">
        {/* <HeroImage className="image" /> */}
      </div>

      <div className="header__main">
        <h1 className="title">A Simple Bookmark Manager</h1>
        <p className="content">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="footer">
          <button className="btn btn--cta btn--blue">Get it on Chrome</button>
          <button className="btn btn--cta btn--white">Get it on Firefox</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
