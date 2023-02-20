import React, { ReactComponentElement } from "react";
import "./Card.scss";

type Props = { title: string; version: string; url: React.FunctionComponent };

const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="image">{<props.url />}</div>
        <h3 className="title">{props.title}</h3>
        <span className="version">{props.version}</span>
      </div>
      <div className="card__footer">
        <button type="submit" className="btn btn--blue">
          Add and install the extension
        </button>
      </div>
    </div>
  );
};

export default Card;
