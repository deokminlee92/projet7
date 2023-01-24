import "./Banner.css";

function Banner({ src, title, alt }) {
  return (
    <div className="banner">
      <div className="background">
        <img className="bannerImg" src={src} alt={alt} />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Banner;
