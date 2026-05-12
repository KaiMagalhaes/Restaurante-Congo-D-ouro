import { Link, useNavigate, Outlet } from "react-router-dom";
import "./LayoutMaster.css";

export default function LayoutMaster() {
  // navegação e cargo do utilizador
  const nav = useNavigate();
  const cargo = localStorage.getItem("userRole");

  // função para sair da conta
  function sair() {
    localStorage.removeItem("userRole");
    nav("/login");
  }

  return (
    <div className="layout-pai">
{/* -------------------------------NAVBARRRRRRRRRRRR----------------------------------------- */}
      <nav className="navbar-topo">
        <Link to="/" className="nav-brand">
          <img src="/Img/atabaque.png" className="brand-icon" alt="logo" />
          <span>Congo D'Ouro</span>
        </Link>

  {/* ---------------------------------------links--------------------------------------------- */}
        <div className="links-nav">
          <Link to="/">Menu</Link>
          {cargo === "gerente" && <Link to="/gerente">Gerente</Link>}
          {cargo === "cozinha" && <Link to="/cozinha">Cozinha</Link>}
          {cargo ? (
            <button onClick={sair} className="btn-logout">Sair</button>
          ) : (
            <Link to="/login" className="btn-login-link">Login Staff</Link>
          )}
        </div>
      </nav>

  {/* ---------------------------------------conteudo principal-------------------------------------- */}
      <main className="conteudo-principal">
        <Outlet />
      </main>

    </div>
  );
}