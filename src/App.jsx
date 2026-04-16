import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import CriarChamado from "./pages/CriarChamado";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/criar-chamado" element={<CriarChamado />} />
    </Routes>
  );
}