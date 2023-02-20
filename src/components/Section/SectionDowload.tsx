import React from "react";
import Card from "../Card/Card";

import { ReactComponent as LogoChrome } from "../../assets/images/logo-chrome.svg";
import { ReactComponent as LogoFirefox } from "../../assets/images/logo-firefox.svg";

import { ReactComponent as LogoOpera } from "../../assets/images/logo-opera.svg";

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

type Props = {};

const SectionDowload = (props: Props) => {
  return (
    <section className="section section--download">
      <header className="section__header">
        <h2 className="title"> Download the extension</h2>
        <p className="description">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </header>

      <div className="section__content">
        <div className="container">
          {cards.map((card) => {
            return (
              <Card
                key={card.title}
                title={card.title}
                version={card.version}
                url={card.url}
              />
            );
          })}
        </div>
      </div>

      <footer className="section__footer"></footer>
    </section>
  );
};

export default SectionDowload;
