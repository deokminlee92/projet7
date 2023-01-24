import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import ImgBannerHome from "../../assets/Images/ImgBannerHome.png";
import lodgingsData from "../../assets/logements.json";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Banner
        src={ImgBannerHome}
        title="Chez vous, partout et ailleurs"
        alt={"Montagne"}
      />
      <div className="card-container">
        {lodgingsData.map((logements, index) => (
          <Card
            // key에 대한 안정적인 값이 없으므로 index로 설정
            key={index}
            id={logements.id}
            title={logements.title}
            cover={logements.cover}
          />
        ))}
        @
      </div>
      <Footer />
    </div>
  );
}

export default Home;

//Import des composants nécessaires//
// import Banner from "../../Components/Banner/Banner";
// import Card from "../../Components/Card/Card";
// import Lodgings from "../../assets/logements.json";
// //import du CSS//
// import "./Home.css";
// //Import de la photo de bannière de la page Home//
// import BannerHomePhoto from "../../assets/Images/ImgBannerHome.png";
// //Fonction Home//
// export default function Home() {
//   return (
//     <main className="mainHome">
//       {/* Bannière avec sa source son alt et son titre  */}
//       <Banner
//         src={BannerHomePhoto}
//         alt="Falaises en bord de mer"
//         title={"Chez vous, partout et ailleurs"}
//       />
//       {/* Liste des logements disponibles grace à la méthode map et composant card qui affiche les logements renvoyés */}
//       <section className="homeCard">
//         {Lodgings.map((logements) => (
//           <Card logements={logements} key={logements.id} />
//         ))}
//       </section>
//     </main>
//   );
// }
