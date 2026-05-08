import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const entrar = (e) => {
    e.preventDefault();

    if (user === "gerente" && pass === "adm123") {
      alert("Bem-vindo, Gerente!");
      navigate("/gerente");
    } 
    else if (user === "cozinha" && pass === "chef123") {
      alert("Bom trabalho, Chef!");
      navigate("/cozinha");
    } 
    else {
      alert("Utilizador ou senha incorretos");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{maxWidth: "400px"}}>
        <h2 className="text-center">Login Congo D'Ouro</h2>
        <form onSubmit={entrar}>
          <input type="text" placeholder="Usuário" className="form-control mb-3" 
            onChange={(e) => setUser(e.target.value)} />
          <input type="password" placeholder="Senha" className="form-control mb-3" 
            onChange={(e) => setPass(e.target.value)} />
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
      </div>
    </div>
  );
}