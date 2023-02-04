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
  const lodgingsContent = Logements.find((e) => e.id === id);
  const { title, location, tags, host, rating, description, equipments } =
    lodgingsContent || {};
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
          title="Equipements"
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
