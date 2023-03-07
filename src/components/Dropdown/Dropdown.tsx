import { useState } from "react";
import "./assets/Dropdown.scss";

type Props = { question: string; answer: string };

const Dropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "dropdown open" : "dropdown"}>
      <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="question">{props.question}</h3>
        <div className="icon-wrapper">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
          >
            <path
              fill="none"
              stroke="current"
              stroke-width="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </div>

      <div className="dropdown__main">
        <p>{props.answer}</p>
      </div>
    </div>
  );
};

export default Dropdown;
