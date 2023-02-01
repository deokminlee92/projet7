import Star from "../../assets/Images/Star.png";
import StarEmpty from "../../assets/Images/StarEmpty.png";
import "./Rating.css";

export default function Rating(rate) {
  const star = [1, 2, 3, 4, 5];
  // map((starnumber,key) , starnumber:callback , key : 어떤 아이템이 바뀌고 추가되었는지 인식하기 위해서 넣어줌
  return star.map((starnumber, index) =>
    //<Rating rating={rating} />, pages/Lodgings 의 프로퍼티 rating을 가져와서 사용
    starnumber <= rate.rating ? (
      <img className="Star" src={Star} alt="ColoredStar" key={index} />
    ) : (
      <img className="StarEmpty" src={StarEmpty} alt="EmptyStar" key={index} />
    )
  );
}

console.log(Rating);
