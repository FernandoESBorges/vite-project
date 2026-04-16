import { useState } from "react";
import "../styles/layout.css";

export default function Layout({ children }) {

  const [open, setOpen] = useState(false);
  const usuario = "Fernando";

  function sair() {
    alert("Saindo...");
    window.location.href = "/";
  }

  return (
    <div className="layout-container">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>

        <div className="sidebar-menu">
          <a href="/dashboard" className="menu-item">📥 Caixa de Entrada</a>
          <a href="#" className="menu-item">📌 Chamados</a>
          <a href="/criar-chamado" className="menu-item">➕ Abrir Chamado</a>
        </div>

      </aside>

      {/* DIREITA */}
      <div className="layout-content">

        {/* TOPBAR */}
        <header className="topbar">

          <div></div>

          <div className="topbar-right">

            {/* LOGO + USER JUNTOS */}
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

        {/* CONTEÚDO */}
        <main className="page-content">
          {children}
        </main>

      </div>
    </div>
  );
}