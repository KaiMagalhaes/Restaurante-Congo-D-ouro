import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const entrar = (e) => {
    e.preventDefault();

    if (user === "gerente" && pass === "123") {
      localStorage.setItem("userRole", "gerente");
      alert("Acesso Gerente");
      navigate("/gerente");
    } 
    else if (user === "cozinha" && pass === "123") {
      localStorage.setItem("userRole", "cozinha");
      alert("Acesso Cozinha");
      navigate("/cozinha");
    } 
    else {
      alert("Usuário ou senha incorretos");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={entrar}>
              <div className="mb-3">
                <label className="form-label">Usuário</label>
                <input 
                  type="text" 
                  className="form-control" 
                  onChange={(e) => setUser(e.target.value)} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input 
                  type="password" 
                  className="form-control" 
                  onChange={(e) => setPass(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}