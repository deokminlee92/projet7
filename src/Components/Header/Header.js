import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img className="headerLogo" src={Logo} alt="Logo Kasa" />
        <ul>
          <li>
            <Link to="/" className="LinkHeaderLogo">
              {" "}
              Acceuil{" "}
            </Link>
          </li>
          <li>
            <Link to="/about" className="LinkeHeaderAbout">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
