import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";
import SectionFeatures from "./components/Section/SectionFeatures";
import Card from "./components/Card/Card";

import { ReactComponent as LogoChrome } from "./assets/images/logo-chrome.svg";
import { ReactComponent as LogoFirefox } from "./assets/images/logo-firefox.svg";

import { ReactComponent as LogoOpera } from "./assets/images/logo-opera.svg";
import SectionDowload from "./components/Section/SectionDowload";

import { ReactComponent as IconChecvron } from "./assets/images/icon-arrow.svg";
import Dropdown from "./components/Dropdown/Dropdown";
import SectionFaq from "./components/Section/SectionFaq";

import { ReactComponent as IconFacebook } from "./assets/images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "./assets/images/icon-twitter.svg";
import { ReactComponent as LogoBookmard } from "./assets/images/logo-bookmark-footer.svg";

import IconFacebook2 from "./assets/images/icon-facebook.svg";
import FacebookIcon from "./components/Footer/assets/FacebookIcon";
import TwitterIcon from "./components/Footer/assets/TwitterIcon";

const cards = [
  {
    title: "Add to Chrome",
    version: "Minimum version 62",
    url: LogoChrome,
  },
  {
    title: "Add to Firefox",
    version: "Minimum version 55",
    url: LogoFirefox,
  },
  {
    title: "Add to Opera",
    version: "Minimum version 46",
    url: LogoOpera,
  },
];

const faqs = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact",
  },
];

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const input: string = e.target.value;
    setEmail(input);
    if (checkEmailIsValid(input)) {
      setError("");
    }
    if (!checkEmailIsValid(input)) {
      setError("error");
    }
  };

  const checkEmailIsValid = (email: string): boolean => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return emailRegex.test(email);
  };

  useEffect(() => {
    console.log(email);
  });

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <SectionFeatures />
        <SectionDowload />
        <SectionFaq />
      </main>
      <footer className="footer" id="footer">
        <div className="footer__header">
          <span className="subtitle">35,000+ already joined</span>
          <h2 className="title">Stay up-to-date with that we're doing</h2>
        </div>
        <div className="footer__main">
          <form className="form" action="">
            <input
              className={"input " + error}
              id="input"
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
            />
            <span className="error-message">
              Whoops, make sure it's an email!
            </span>
            <button className="btn btn--secondary" type="submit">
              contact us
            </button>
          </form>
        </div>
        <div className="footer__footer">
          <nav className="footer-nav">
            <div className="logo-wrapper">
              {/* <LogoBookmard className="logo" /> */}
              <svg
                className="logo"
                // width="148"
                // height="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                  <g>
                    <circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5" />
                    <path
                      d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                      fill="#FFF"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <ul className="navigation">
              <li className="navigation__item">
                <a className="navigation__item__link" href="#">
                  Features
                </a>
              </li>
              <li className="navigation__item">
                <a className="navigation__item__link" href="#">
                  Pricing
                </a>
              </li>
              <li className="navigation__item">
                <a className="navigation__item__link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navigation navigation--sns">
              <li className="navigation__item">
                <a
                  href="#"
                  className="sns-icon"
                  aria-aria-labelledby="Facebook"
                >
                  {/* <img src={IconFacebook2} className="icon" alt="" /> */}
                  {/* <IconFacebook className="icon" /> */}
                  <FacebookIcon />
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="sns-icon" aria-aria-labelledby="Twitter">
                  {/* <IconTwitter className="icon" /> */}
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
