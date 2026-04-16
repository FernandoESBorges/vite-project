import { useState } from "react";
import "../styles/login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !senha) {
            setErro("Preencha todos os campos");
            return;
        }

        // SIMULAÇÃO (igual Thymeleaf faria com backend)
        if (email === "admin" && senha === "123") {
            alert("Login realizado!");
            setErro("");
        } else {
            setErro("Usuário ou senha inválidos");
        }
    };

    return (
        <div className="login-page">
            <div className="overlay"></div>

            <div className="login-wrapper">

                {/* LADO ESQUERDO */}
                <div className="login-left">
                    <img src="/img/logo.png" alt="Logo" className="login-logo" />
                </div>

                {/* LADO DIREITO */}
                <div className="login-right">
                    <h2>Acesso ao Sistema</h2>

                    <form onSubmit={handleLogin} className="login-form">

                        <div className="input-group">
                            <label>Usuário</label>
                            <input
                                type="text"
                                placeholder="Digite seu usuário"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <div className="form-options">
                            
                        </div>

                        <button type="submit" className="btn-login">
                            Entrar
                        </button>

                        {erro && <p className="erro-msg">{erro}</p>}
                    </form>

                    <div className="login-footer">
                        <p>Plataforma Educacional</p>
                        <img src="/img/logo2.png" alt="Logo" className="logo-unincor" />
                    </div>
                </div>
            </div>
        </div>
    );
}