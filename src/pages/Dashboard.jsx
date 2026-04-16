import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/dashboard.css";

export default function Dashboard() {

  const [search, setSearch] = useState("");
  const [selecionado, setSelecionado] = useState(null);

  const emails = [
  { id: 1, nome: "João Silva", setor: "TI", descricao: "Erro no sistema de login", email: "joao@email.com" },
  { id: 2, nome: "Maria Souza", setor: "RH", descricao: "Solicitação de acesso", email: "maria@email.com" },
  { id: 3, nome: "Pedro Oliveira", setor: "Financeiro", descricao: "Problema com pagamento", email: "pedro@email.com" },
  { id: 4, nome: "Ana Costa", setor: "TI", descricao: "Sistema fora do ar", email: "ana@email.com" },
  { id: 5, nome: "Lucas Pereira", setor: "Suporte", descricao: "Cliente não consegue acessar", email: "lucas@email.com" },
  { id: 6, nome: "Juliana Almeida", setor: "RH", descricao: "Atualização de cadastro", email: "juliana@email.com" },
  { id: 7, nome: "Rafael Santos", setor: "TI", descricao: "Bug na tela de relatório", email: "rafael@email.com" },
  { id: 8, nome: "Camila Rocha", setor: "Marketing", descricao: "Erro no painel de campanhas", email: "camila@email.com" },
  { id: 9, nome: "Bruno Lima", setor: "Financeiro", descricao: "Dúvida sobre fatura", email: "bruno@email.com" },
  { id: 10, nome: "Fernanda Alves", setor: "RH", descricao: "Solicitação de férias", email: "fernanda@email.com" },

  { id: 11, nome: "Gabriel Martins", setor: "TI", descricao: "Servidor lento", email: "gabriel@email.com" },
  { id: 12, nome: "Patrícia Gomes", setor: "Suporte", descricao: "Cliente com erro de acesso", email: "patricia@email.com" },
  { id: 13, nome: "Diego Ribeiro", setor: "TI", descricao: "Erro API interna", email: "diego@email.com" },
  { id: 14, nome: "Mariana Fernandes", setor: "RH", descricao: "Atualização de documentos", email: "mariana@email.com" },
  { id: 15, nome: "Thiago Barros", setor: "Financeiro", descricao: "Pagamento não confirmado", email: "thiago@email.com" },
  { id: 16, nome: "Aline Martins", setor: "Marketing", descricao: "Campanha não publicada", email: "aline@email.com" },
  { id: 17, nome: "Eduardo Carvalho", setor: "TI", descricao: "Erro no banco de dados", email: "eduardo@email.com" },
  { id: 18, nome: "Sofia Mendes", setor: "RH", descricao: "Problema com folha de pagamento", email: "sofia@email.com" },
  { id: 19, nome: "Carlos Eduardo", setor: "Suporte", descricao: "Chamado não respondido", email: "carlos@email.com" },
  { id: 20, nome: "Larissa Batista", setor: "Financeiro", descricao: "Erro em relatório mensal", email: "larissa@email.com" },

  { id: 21, nome: "Vinícius Nogueira", setor: "TI", descricao: "Sistema travando", email: "vinicius@email.com" },
  { id: 22, nome: "Beatriz Teixeira", setor: "RH", descricao: "Novo colaborador cadastro", email: "beatriz@email.com" },
  { id: 23, nome: "Felipe Dias", setor: "Marketing", descricao: "Erro em anúncios", email: "felipe@email.com" },
  { id: 24, nome: "Isabela Freitas", setor: "Suporte", descricao: "Cliente sem resposta", email: "isabela@email.com" },
  { id: 25, nome: "André Moreira", setor: "TI", descricao: "Falha de autenticação", email: "andre@email.com" },
  { id: 26, nome: "Natália Castro", setor: "RH", descricao: "Problema em sistema interno", email: "natalia@email.com" },
  { id: 27, nome: "Gustavo Rocha", setor: "Financeiro", descricao: "Erro em boleto", email: "gustavo@email.com" },
  { id: 28, nome: "Letícia Ramos", setor: "Marketing", descricao: "Campanha não ativa", email: "leticia@email.com" },
  { id: 29, nome: "Ricardo Lopes", setor: "TI", descricao: "Erro de deploy", email: "ricardo@email.com" },
  { id: 30, nome: "Vanessa Dias", setor: "RH", descricao: "Atualização de dados", email: "vanessa@email.com" },

  { id: 31, nome: "Matheus Silva", setor: "Suporte", descricao: "Cliente com bug", email: "matheus@email.com" },
  { id: 32, nome: "Carla Souza", setor: "Financeiro", descricao: "Problema em cobrança", email: "carla@email.com" },
  { id: 33, nome: "Henrique Lima", setor: "TI", descricao: "Erro em servidor", email: "henrique@email.com" },
  { id: 34, nome: "Julio César", setor: "Marketing", descricao: "Erro em campanha digital", email: "julio@email.com" },
  { id: 35, nome: "Priscila Nunes", setor: "RH", descricao: "Solicitação de documento", email: "priscila@email.com" },
  { id: 36, nome: "Rodrigo Martins", setor: "TI", descricao: "Falha em sistema web", email: "rodrigo@email.com" },
  { id: 37, nome: "Elaine Costa", setor: "Financeiro", descricao: "Erro em nota fiscal", email: "elaine@email.com" },
  { id: 38, nome: "Igor Santos", setor: "Suporte", descricao: "Problema no atendimento", email: "igor@email.com" },
  { id: 39, nome: "Bianca Oliveira", setor: "RH", descricao: "Cadastro de funcionário", email: "bianca@email.com" },
  { id: 40, nome: "Leandro Alves", setor: "TI", descricao: "Erro de conexão API", email: "leandro@email.com" },

  { id: 41, nome: "Daniel Ferreira", setor: "Marketing", descricao: "Campanha pausada", email: "daniel@email.com" },
  { id: 42, nome: "Patrícia Lima", setor: "Financeiro", descricao: "Dúvida de pagamento", email: "patricia2@email.com" },
  { id: 43, nome: "Marcelo Ramos", setor: "TI", descricao: "Erro no sistema interno", email: "marcelo@email.com" },
  { id: 44, nome: "Renata Souza", setor: "RH", descricao: "Atualização de contrato", email: "renata@email.com" },
  { id: 45, nome: "Fábio Costa", setor: "Suporte", descricao: "Cliente sem acesso", email: "fabio@email.com" },
  { id: 46, nome: "Sérgio Mendes", setor: "TI", descricao: "Banco de dados lento", email: "sergio@email.com" },
  { id: 47, nome: "Amanda Rocha", setor: "Marketing", descricao: "Erro em postagem", email: "amanda@email.com" },
  { id: 48, nome: "Tiago Barbosa", setor: "Financeiro", descricao: "Fatura incorreta", email: "tiago@email.com" },
  { id: 49, nome: "Jéssica Martins", setor: "RH", descricao: "Problema com férias", email: "jessica@email.com" },
  { id: 50, nome: "Paulo Henrique", setor: "TI", descricao: "Sistema não inicializa", email: "paulo@email.com" }
];

  const filtrados = emails.filter((e) =>
    e.nome.toLowerCase().includes(search.toLowerCase()) ||
    e.setor.toLowerCase().includes(search.toLowerCase()) ||
    e.descricao.toLowerCase().includes(search.toLowerCase()) ||
    e.email.toLowerCase().includes(search.toLowerCase())
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

        {/* BOX */}
        <div className="box">

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Setor</th>
                <th>Descrição</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {filtrados.map((e) => (
                <tr key={e.id} onClick={() => setSelecionado(e)}>
                  <td>{e.nome}</td>
                  <td>{e.setor}</td>
                  <td>{e.descricao}</td>
                  <td>{e.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* MENSAGEM */}
        {selecionado && (
          <div className="mensagem">
            <h3>{selecionado.nome}</h3>
            <p><b>Setor:</b> {selecionado.setor}</p>
            <p><b>Email:</b> {selecionado.email}</p>
            <p><b>Descrição:</b> {selecionado.descricao}</p>
          </div>
        )}

      </div>

    </Layout>
  );
}