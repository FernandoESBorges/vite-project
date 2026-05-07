import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function Layout({ children }) {

  const [open, setOpen] = useState(false);
  const usuario = JSON.parse(localStorage.getItem("usuario"))?.nome || "Usuário";

  function sair() {
    alert("Saindo...");
    window.location.href = "/";
  }

  return (
    <div className="layout-container">

      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>

        <div className="sidebar-menu">
          <Link to="/dashboard" className="menu-item">📥 Caixa de Entrada</Link>
          <Link to="/criar-chamado" className="menu-item">➕ Abrir Chamado</Link>
        </div>
      </aside>

      <div className="layout-content">

        <header className="topbar">
          <div></div>

          <div className="topbar-right">
            <div className="user-box">

              <span className="user-name">{usuario}</span>

              <div className="dropdown">
                <span onClick={() => setOpen(!open)}>▾</span>

                {open && (
                  <div className="dropdown-menu">
                    <div onClick={sair}>Sair</div>
                  </div>
                )}
              </div>

              <img src="/img/logo2.png" className="logo" />

            </div>
          </div>
        </header>

        <main className="page-content">
          {children}
        </main>

      </div>
    </div>
  );
}