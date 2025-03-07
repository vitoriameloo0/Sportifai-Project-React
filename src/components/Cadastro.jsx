import React, { useState } from 'react';
import { trocarImagem, voltaImagem, validarEExibirSaudacao } from "../utils/functions.js";
import logo from "../images/icon.png";
import '../styles/Cadastro.css'; // Importar seu CSS customizado
import app from "../App.jsx";

function Cadastro() {
    const [logoSrc, setLogoSrc] = useState(logo);  // Adiciona o estado para logo

    const[formData, setFormData] = useState({
        primeiroNome: '',
        sobrenome: '',
        email: '',
        celular: '',
        senha: '',
        confirmarSenha: '',
        genero: '',
        interesses: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData(prev => ({
                ...prev,
                interesses: checked
                    ? [...prev.interesses, value]
                    : prev.interesses.filter(i => i !== value)
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }

    return (
        <div className="container">
            <div className="form">
                <form action="">
                    <div className="form-header">
                        <div className="title">
                            <a href={app}>
                            <img
                                id="logo"
                                src={logoSrc}
                                width="80"
                                onMouseOver={() => trocarImagem(setLogoSrc)}
                                onMouseOut={() => voltaImagem(setLogoSrc)}
                            />
                            </a>
                            <h1>Se inscreva e comece a curtir</h1>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-box">
                            <label for="firstname">Primeiro nome</label>
                            <input type="text" name="firstname" id="firstname" placeholder="Digite seu primeiro nome" required />
                        </div>

                        <div class="input-box">
                            <label for="lastname">Sobrenome</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Digite seu sobrenome" required />
                        </div>

                        <div class="input-box">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" id="email" placeholder="Digite seu email" required />
                        </div>

                        <div class="input-box">
                            <label for="number">Celular</label>
                            <input type="tel" name="number" id="number" placeholder="(xx) xxxx-xxxx" required />
                        </div>

                        <div class="input-box">
                            <label for="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Digite sua senha" required />
                        </div>

                        <div class="input-box">
                            <label for="Confirmpassword">Confirme sua senha</label>
                            <input type="password" name="Confirmpassword" id="Confirmpassword"
                                placeholder="Digite sua senha" required />
                        </div>
                    </div>

                    <div className="gender-inputs">
                        <div className="gender-title">
                            <h6> Gênero</h6>
                        </div>

                        <div className="gender-group">
                            <div className="gender-input">
                                <input type="radio" id="female" name="gender" />
                                <label htmlFor="female">Feminino</label>
                            </div>

                            <div className="gender-input">
                                <input type="radio" id="male" name="gender" />
                                <label htmlFor="male">Masculino</label>
                            </div>

                            <div className="gender-input">
                                <input type="radio" id="others" name="gender" />
                                <label htmlFor="others">Outros</label>
                            </div>

                            <div className="gender-input">
                                <input type="radio" id="none" name="gender" />
                                <label htmlFor="none">Prefiro não dizer</label>
                            </div>
                        </div>

                        <div className="gender-title">
                            <h6>Interesses</h6>
                        </div>
                        <div className="gender-group">
                            <div className="gender-input">
                                <input type="checkbox" id="interest1" />
                                <label htmlFor="interest1">Conhecer novas músicas</label>
                            </div>

                            <div className="gender-input">
                                <input type="checkbox" id="interest2" />
                                <label htmlFor="interest2">Curtir as melhores playlist</label>
                            </div>

                            <div className="gender-input">
                                <input type="checkbox" id="interest3" />
                                <label htmlFor="interest3">Seguir meu artista</label>
                            </div>

                            <div className="gender-input">
                                <input type="checkbox" id="interest4" />
                                <label htmlFor="interest4">Outros</label>
                            </div>
                        </div>
                    </div>

                    <div className="inscrever-button">
                        <button type="button" onClick={() => validarEExibirSaudacao(formData)}>
                            Inscrever-se
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
