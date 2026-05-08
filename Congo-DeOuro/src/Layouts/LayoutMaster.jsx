import { Outlet, Link } from "react-router-dom";
import "./LayoutMaster.css";

export default function LayoutMaster() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center text-white" to="/">
            <img 
              src="/Img/atabaque.png" 
              alt="Logo" 
              width="40" 
              height="40" 
              className="me-2 logo-img"
            />
            Congo D'Ouro
          </Link>
          
          <div className="navbar-nav ms-auto">
            <Link className="nav-link nav-link-custom" to="/">Cardápio</Link>
            <Link className="nav-link nav-link-custom" to="/login">Login</Link>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="text-center mt-5 py-4 border-top">
        <p>&copy; 2026 Congo D'Ouro - Sabores com Tradição</p>
      </footer>
    </>
  );
}