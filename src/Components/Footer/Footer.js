import "./Footer.css";
import LogoFooter from "../../assets/Images/LogoFooter.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={LogoFooter} alt="logo Kasa" />
        <p>@ 2023 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
