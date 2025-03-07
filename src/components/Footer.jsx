import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img src="../src/assets/sport.svg" width="175" alt="Logo Sport" />
          </div>

          <div className="col-md-2">
            <h4>Company</h4>
            <ul className="navbar-nav">
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Empregos</a></li>
              <li><a href="#">Imprensa</a></li>
              <li><a href="#">Novidades</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h4>Comunidades</h4>
            <ul className="navbar-nav">
              <li><a href="#">Artistas</a></li>
              <li><a href="#">Desenvolvedores</a></li>
              <li><a href="#">Marcas</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h4>Links úteis</h4>
            <ul className="navbar-nav">
              <li><a href="#">Ajuda</a></li>
              <li><a href="#">Presentes</a></li>
              <li><a href="#">Player da web</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="social-links">
              <li><a href="#"><img src="../src/images/facebook.png" alt="Facebook" /></a></li>
              <li><a href="#"><img src="../src/images/twitter.png" alt="Twitter" /></a></li>
              <li><a href="#"><img src="../src/images/instagram.png" alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
