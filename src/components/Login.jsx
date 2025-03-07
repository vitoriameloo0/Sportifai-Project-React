import React, { useState } from "react";
import logo from "../images/icon.png";
import app from "../App.jsx";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert("Login realizado com sucesso!");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <section id="login" className="d-flex">
      <div className="container-fluid">
        <div className="col">
          <div id="logologin">
            <a href= {app}>
              <img
                id="logo"
                src={logo}
                width="65"
                onmouseover="trocarImagem()"
                onmouseout="voltaImagem()"
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
          <button type="button" onClick={handleLogin}>
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
