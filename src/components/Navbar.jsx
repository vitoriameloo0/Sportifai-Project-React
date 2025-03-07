import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/sport.svg"; // Importe o logo
import { Link } from "react-router-dom"; // Importe o Link do React Router
import "../styles/Menu.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
      <div className="container">
        
        <a href="/" className="navbar-brand">
          <img src={logo} width="175" alt="Sportifai" />
        </a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-principal">
          <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="nav-principal">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={() => alert("Página ainda não implementada!")}>
                Premium
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={() => alert("Página ainda não implementada!")}>
                Ajuda
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={() => alert("Página ainda não implementada!")}>
                Baixar
              </a>
            </li>
            <li className="nav-item divisor"></li>
            <li className="nav-item">
              <Link to="/cadastro" className="nav-link">Inscrever-se</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Entrar</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
