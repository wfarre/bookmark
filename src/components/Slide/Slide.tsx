import React, { ReactNode, useState } from "react";
import "./Slide.scss";

type Props = {
  title: string;
  description: string;
  image: ReactNode;
  id: string;
};

const Slide = (props: Props) => {
  return (
    <div className="slide" id={props.id}>
      <div className="slide__image">{/* {props.image} */}</div>
      <div className="slide__main">
        <h3 className="slide__header">
          {/* <h3 className="title"> */}
          {props.title}
          {/* </h3> */}
        </h3>
        <p className="slide__content">{props.description}</p>
        <div className="slide__footer">
          <a className="btn btn--blue" href="#">
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
