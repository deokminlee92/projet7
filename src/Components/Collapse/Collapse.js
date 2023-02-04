import "./Collapse.css";
import { useState } from "react";
import arrowDown from "../../assets/Images/ArrowDown.png";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse-container">
      <div
        className="collapse-title"
        onClick={() => {
          setIsOpen((e) => !e);
        }}
      >
        <h2>{title}</h2>
        <img
          src={arrowDown}
          alt="arrow"
          className={isOpen ? "arrowUp" : "arrowDown"}
        />
      </div>
      <div className={isOpen ? "collapse-txt active-txt" : "collapse-txt"}>
        {content}
      </div>
    </div>
  );
}
