import { Outlet, Link, useNavigate } from "react-router-dom";
import "./LayoutMaster.css";

export default function LayoutMaster() {
  const navegar = useNavigate();
  

  const cargo = localStorage.getItem("tipo");

  const sair = () => {
    localStorage.clear();
    navegar("/");
    window.location.reload(); 
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Congo D'Ouro</Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link nav-link-custom" to="/">Cardápio</Link>
            
            {cargo === "admin" && (
              <Link className="nav-link nav-link-custom" to="/gerente">Gerência</Link>
            )}

            {cargo === "chef" && (
              <Link className="nav-link nav-link-custom" to="/cozinha">Cozinha</Link>
            )}

            {cargo ? (
              <button onClick={sair} className="btn btn-link nav-link-custom" style={{textDecoration: 'none'}}>Sair</button>
            ) : (
              <Link className="nav-link nav-link-custom" to="/login">Login</Link>
            )}
          </div>
        </div>
      </nav>
      <main><Outlet /></main>
    </>
  );
}