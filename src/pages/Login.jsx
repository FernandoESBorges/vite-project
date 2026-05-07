import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !senha) {
            setErro("Preencha todos os campos");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            });

            if (!response.ok) {
                throw new Error("Login inválido");
            }

            const usuario = await response.json();

            // 🔥 SALVA USUÁRIO (IMPORTANTE)
            localStorage.setItem("usuario", JSON.stringify(usuario));

            // 🔥 REDIRECIONA
            navigate("/dashboard");

        } catch (erro) {
          console.error(erro); //usa o erro do catch para debugar
            setErro("Usuário ou senha inválidos");
        }
    };

    return (
        <div className="login-page">
            <div className="overlay"></div>

            <div className="login-wrapper">

                <div className="login-left">
                    <img src="/img/logo.png" alt="Logo" className="login-logo" />
                </div>

                <div className="login-right">
                    <h2>Acesso ao Sistema</h2>

                    <form onSubmit={handleLogin} className="login-form">

                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label>Senha</label>
                            <input
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn-login">
                            Entrar
                        </button>

                        {erro && <p className="erro-msg">{erro}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}