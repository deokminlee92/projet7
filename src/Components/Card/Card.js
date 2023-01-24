import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id, cover, title }) {
  //props 을 이용해서 속성값(logements 리스트의 id,cover,title) 들이 콘솔에 표시 (코딩앙마 #8)
  console.log({ id, title, cover });
  return (
    <Link
      to={`logements/${id}`}
      className="card"
      //webpack 을 이용한 backgroundImage 를 문자열로 제공
      style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }}
    >
      <div className="care-linearGradient"></div>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

//------------------------------------ Version 2 ------------------------------------//

//Utilisations des props pour passer les propriétés à l'élément enfant//
// export default function Card(props) {
//   return (
//     <figure
//       key={props.logements.id}
//       onClick={() =>
//         (window.location.href = `/logements/${props.logements.id}`)
//       }
//     >
//       <img src={props.logements.cover} alt={props.logements.title} />
//       <figcaption>
//         <h2>{props.logements.title}</h2>
//       </figcaption>
//     </figure>
//   );
// }
