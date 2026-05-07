import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/dashboard.css";

export default function Dashboard() {

  const [search, setSearch] = useState("");
  const [selecionado, setSelecionado] = useState(null);
  const [chamados, setChamados] = useState([]);

  const carregarChamados = () => {
    fetch("http://localhost:8080/api/chamados")
      .then(res => res.json())
      .then(data => {
        const adaptado = data.map((c) => ({
          id: c.id,
          titulo: c.titulo,
          setor: c.setorDestino,
          descricao: c.descricao,
          responsavel: c.responsavel || "Não atribuído",
          status: c.status
        }));

        setChamados(adaptado);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    carregarChamados();
  }, []);

  const assumirChamado = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/chamados/${id}/assumir/1`, {
        method: "PUT"
      });

      alert("Chamado assumido!");
      carregarChamados();

    } catch {
      alert("Erro ao assumir chamado");
    }
  };

  const filtrados = chamados.filter((c) =>
    c.titulo.toLowerCase().includes(search.toLowerCase()) ||
    c.setor.toLowerCase().includes(search.toLowerCase()) ||
    c.descricao.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>

      <div className="main">

        <div className="top">
          <h1>Caixa de Entrada</h1>

          <input
            className="search"
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="box">
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Setor</th>
                <th>Descrição</th>
                <th>Responsável</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              {filtrados.map((c) => (
                <tr key={c.id} onClick={() => setSelecionado(c)}>

                  <td>{c.titulo}</td>
                  <td>{c.setor}</td>
                  <td>{c.descricao}</td>
                  <td>{c.responsavel}</td>
                  <td>{c.status}</td>

                  <td>
                    {c.status === "ABERTO" ? (
                      <button onClick={(e) => {
                        e.stopPropagation();
                        assumirChamado(c.id);
                      }}>
                        Assumir
                      </button>
                    ) : "-"}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selecionado && (
          <div className="mensagem">
            <h3>{selecionado.titulo}</h3>
            <p><b>Setor:</b> {selecionado.setor}</p>
            <p><b>Responsável:</b> {selecionado.responsavel}</p>
            <p><b>Status:</b> {selecionado.status}</p>
            <p><b>Descrição:</b> {selecionado.descricao}</p>
          </div>
        )}

      </div>
    </Layout>
  );
}