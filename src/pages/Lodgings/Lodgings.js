// 코드 연구해보고 다시 짜볼 것

import "./Lodgings.css";
import Lodging from "../../Components/Lodging/Lodging";
import Rating from "../../Components/Rating/Rating";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";
import Logements from "../../assets/logements.json";
import Collapse from "../../Components/Collapse/Collapse";
import Footer from "../../Components/Footer/Footer";

export default function Lodgings() {
  const { id } = useParams();
  // console.log({ id });

  //find() pour comparer l'id & l'id passé dans l'URL
  const lodgingsContent = Logements.find((e) => e.id === id);

  //Création de la variable contenant l'objet avec les caractéristiques du logement ou un objet vide
  const { title, location, tags, host, rating, description, equipments } =
    lodgingsContent || {};
  // console.log(lodgingsContent, "lodgingsContent");

  //Recherche s'il y a bien un contenu
  return lodgingsContent ? (
    <main className="main-container">
      <Lodging />
      <section className="lodgingsDetails">
        <div className="lodgingsDetailsLogement">
          <h1 className="logementTitle">{title}</h1>
          <h2 className="logementLocation">{location}</h2>
          <div className="logementTags">
            {tags.map((tag) => {
              return (
                <p key={`${tag}`} className="tag">
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
        <div className="lodgingsDetailsHost">
          <div className="hostInformations">
            <p className="hostInformationsName">{host.name}</p>
            <img
              className="hostInformationsPicture"
              src={host.picture}
              alt="Host"
            />
          </div>
          <div className="hostInformationsRating">
            <Rating rating={rating} />
          </div>
        </div>
      </section>
      {/* Caractéristiques du logement */}
      <section className="lodgingsCollapses">
        <Collapse
          className="lodgingsCollContent"
          title="Description"
          content={
            <span className="lodgingsDetailsCollapsesContent">{`${description}`}</span>
          }
        />
        <Collapse
          className="lodgingsCollContent"
          title="Equipments"
          content={
            <ul className="lodgingsDetailsDescriptionContent">
              {equipments.map((equip, index) => {
                return <li key={index}>{equip}</li>;
              })}
            </ul>
          }
        />
      </section>
      <Footer />
    </main>
  ) : (
    <Error />
  );
}
