import React, { useEffect } from "react";
import Slide from "../Slide/Slide";
import { ReactComponent as ImageFeatures } from "./assets/images/illustration-features-tab-1.svg";
import "./assets/Section.scss";
import { useState } from "react";
import { log } from "console";
type Props = {};

const slides = [
  {
    key: 0,
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: <ImageFeatures className="image" />,
  },
  {
    key: 1,
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: <ImageFeatures className="image" />,
  },
  {
    key: 2,
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. ",
    image: <ImageFeatures className="image" />,
  },
];

const SectionFeatures = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState("slide-0");
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(e.target.id);
    setCurrentSlide("slide-" + e.target.id);
    setSlideIndex(parseInt(e.target.id));
  };

  const viewport = document.getElementById("viewport");
  const viewportWidth = 0 || viewport?.offsetWidth;

  useEffect(() => {
    if (viewportWidth) {
      const slide = viewportWidth * slideIndex;
      viewport?.scroll({ left: slide, behavior: "smooth" });
    }
  });

  console.log(viewport);
  return (
    <section className="section section--features">
      <header className="section__header">
        <h2 className="title">Features</h2>
        <p className="description">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </header>

      <div className="section__content">
        <div className="carousel">
          <div className="carousel__header">
            <ul className="buttons">
              <li>
                <a
                  href="#slide-0"
                  id="0"
                  className={
                    currentSlide === "slide-0" ? "link active" : "link"
                  }
                  onClick={handleClick}
                >
                  Simple Bookmarking
                </a>
              </li>
              <li>
                <a
                  href="#slide-1"
                  id="1"
                  className={
                    currentSlide === "slide-1" ? "link active" : "link"
                  }
                  onClick={handleClick}
                >
                  Speedy Searching
                </a>
              </li>
              <li>
                <a
                  href="#slide-2"
                  id="2"
                  className={
                    currentSlide === "slide-2" ? "link active" : "link"
                  }
                  onClick={handleClick}
                >
                  Easy Sharing
                </a>
              </li>
            </ul>
            <div id="viewport" className="viewport">
              {slides.map((slide) => {
                return (
                  <Slide
                    key={slide.key}
                    title={slide.title}
                    description={slide.description}
                    image={slide.image}
                    id={"slide-" + slide.key}
                  />
                );
              })}
            </div>
            {/* <Slide
              title="Bookmark in one click"
              description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
              image={<ImageFeatures />}
            /> */}
            {/* <Slide />
          <Slide /> */}
          </div>
        </div>
      </div>

      <footer className="section__footer"></footer>
    </section>
  );
};

export default SectionFeatures;
