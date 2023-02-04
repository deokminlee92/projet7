import "./Lodging.css";
import React from "react";
import Header from "../../Components/Header/Header";
import Logements from "../../assets/logements.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LeftArrow from "../../assets/Images/LeftArrow.png";
import RightArrow from "../../assets/Images/RightArrow.png";

export default function Lodging() {
  const { id } = useParams();
  const { pictures } = Logements.find((logpic) => logpic.id === id);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const nextPicture = () => {
    setCurrentPhoto(
      currentPhoto === pictures.length - 1 ? 0 : currentPhoto + 1
    );
  };

  const previousPicture = () => {
    setCurrentPhoto(
      currentPhoto === 0 ? pictures.length - 1 : currentPhoto - 1
    );
  };

  return (
    <div className="Lodgings-container">
      <Header />
      {pictures.length > 1 && (
        <img
          className="LeftArrow"
          src={LeftArrow}
          alt="left Arrow"
          onClick={previousPicture}
        />
      )}
      {pictures.length > 1 && (
        <img
          className="RightArrow"
          src={RightArrow}
          alt="Right Arrow"
          onClick={nextPicture}
        />
      )}
      {pictures.map((picture, index) => {
        return (
          <div key={index}>
            {index === currentPhoto && (
              <img
                className="slideshowImg"
                src={picture}
                alt={picture.description}
              />
            )}
            {index === currentPhoto && (
              <div className="slideshowImgNumber">
                {currentPhoto + 1}/{pictures.length}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
