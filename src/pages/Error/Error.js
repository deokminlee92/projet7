import React from "react";
import Header from "../../Components/Header/Header";
import "./Error.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function Error() {
  return (
    <div className="error-container">
      <Header />
      <div className="error-body">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas</p>
        <Link to="/" className="errortoMainPage">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
