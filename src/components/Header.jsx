import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
  <header>
    <div className="inner-content">
    <div className="left-side">
        <h2>De uma nova experiençia ao seu treino!</h2>
        <p>"O progresso nem sempre tem a ver com grandes saltos, mas sim com a consistência. O treino consistente e a suplementação certa superam a estagnação. Os resultados virão."</p>
        <Link to="/produtos" className="btn-more">
        <span>Ver Agora</span>
        <FontAwesomeIcon icon={faChevronRight}/>
        </Link>
    </div>
    <div className="right-side">
        <img src="../src/assets/img/bannerXp.png" alt="banner" />
    </div>
    </div>
  </header>
  );
}