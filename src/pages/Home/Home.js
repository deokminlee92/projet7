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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
