import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/criarChamado.css";

export default function CriarChamado() {

  const navigate = useNavigate();

  const usuario = {
    nome: JSON.parse(localStorage.getItem("usuario"))?.nome || "Usuário",
    email: JSON.parse(localStorage.getItem("usuario"))?.email || "email@exemplo.com"
  };

  const [setor, setSetor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [open, setOpen] = useState(false);

  const mapSetor = {
    "TI": 1,
    "RH": 2,
    "Financeiro": 3
  };

  async function enviar(e) {
    e.preventDefault();

    if (!setor || !descricao) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/chamados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          titulo: `Chamado - ${setor}`,
          descricao: descricao,
          setorOrigemId: 1,
          setorDestinoId: mapSetor[setor]
        })
      });

      if (!response.ok) throw new Error();

      alert("Chamado enviado com sucesso!");
      navigate("/dashboard");

    } catch {
      alert("Erro ao enviar chamado");
    }
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