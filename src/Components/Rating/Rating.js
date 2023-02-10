import Star from "../../assets/Images/Star.png";
import StarEmpty from "../../assets/Images/StarEmpty.png";
import "./Rating.css";

export default function Rating(rate) {
  console.log(rate, "rate");
  const star = [1, 2, 3, 4, 5];
  return star.map((starnumber, index) =>
    starnumber <= rate.rating ? (
      <img className="Star" src={Star} alt="ColoredStar" key={index} />
    ) : (
      <img className="StarEmpty" src={StarEmpty} alt="EmptyStar" key={index} />
    )
  );
}
