import React, { useState } from "react";
import logo from "../images/icon.png";
import app from "../App.jsx";
import "../styles/Login.css";
import { trocarImagem, voltaImagem, verificarCamposPreenchidosLogin } from "../utils/functions.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logoSrc, setLogoSrc] = useState(logo);  // Adiciona o estado para logo

  const handleLogin = () => {
    // Passa os valores de email e senha para a função de verificação
    verificarCamposPreenchidosLogin(email, password);
  };

  return (
    <section id="login" className="d-flex">
      <div className="container-fluid">
        <div className="col">
          <div id="logologin">
            <a href={app}>
            <img
                id="logo"
                src={logoSrc}
                width="80"
                onMouseOver={() => trocarImagem(setLogoSrc)}
                onMouseOut={() => voltaImagem(setLogoSrc)}
              />
            </a>
            <h1>Login</h1>
          </div>

          <br />
          <label htmlFor="email">E-mail ou nome de usuário</label>
          <input
            type="email"
            id="email"
            placeholder="Email ou nome de usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br />
          <br />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />
          <br />
          <button type="button" onClick={handleLogin} class="bt-enviar">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
