import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/criarChamado.css";

export default function CriarChamado() {

  const navigate = useNavigate();

  const usuario = {
    nome: "Fernando",
    email: "fernando@email.com"
  };

  const [setor, setSetor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [open, setOpen] = useState(false);

  function enviar(e) {
    e.preventDefault();

    if (!setor || !descricao) {
      alert("Preencha todos os campos");
      return;
    }

    alert("Chamado enviado!");
    navigate("/dashboard");
  }

  function selecionar(valor) {
    setSetor(valor);
    setOpen(false);
  }

  return (
    <Layout>

      <div className="criar-container">

        <div className="criar-card">

          <h2>Criar Chamado</h2>

          <div className="criar-info">
            <p><b>Nome:</b> {usuario.nome}</p>
            <p><b>Email:</b> {usuario.email}</p>
          </div>

          <form className="criar-form" onSubmit={enviar}>

            <label>Setor</label>

            {/* 🔥 SELECT CUSTOM */}
            <div className="custom-select" onClick={() => setOpen(!open)}>
              {setor || "Selecione"}

              {open && (
                <div className="options">
                  <div onClick={() => selecionar("TI")}>TI</div>
                  <div onClick={() => selecionar("RH")}>RH</div>
                  <div onClick={() => selecionar("Financeiro")}>Financeiro</div>
                </div>
              )}
            </div>

            <label>Descrição</label>

            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descreva o problema..."
            />

            <button type="submit" className="criar-btn">
              Enviar Chamado
            </button>

          </form>

        </div>

      </div>

    </Layout>
  );
}