import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cozinha() {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // PROTEÇÃO SIMPLES: Se não for "cozinha", expulsa para o login
    const role = localStorage.getItem("userRole");
    if (role !== "cozinha") {
      alert("Acesso negado! Apenas para a equipa da cozinha.");
      navigate("/login");
      return;
    }

    const atualizar = () => {
      const dados = JSON.parse(localStorage.getItem("listaPedidos") || "[]");
      setPedidos(dados);
    };
    atualizar();
    window.addEventListener("storage", atualizar);
    return () => window.removeEventListener("storage", atualizar);
  }, [navigate]);

  const mudarEstado = (id, novoEst) => {
    const novaLista = pedidos.map(p => 
      p.idPedido === id ? { ...p, estado: novoEst } : p
    );
    setPedidos(novaLista);
    localStorage.setItem("listaPedidos", JSON.stringify(novaLista));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Pedidos Pendentes</h2>
      <div className="row">
        {pedidos.map((p) => (
          <div key={p.idPedido} className="col-md-4 mb-3">
            <div className={`card shadow-sm border-2 ${p.estado === 'concluido' ? 'border-success' : 'border-warning'}`}>
              <div className="card-body text-center">
                <span className="badge bg-danger mb-2">MESA {p.mesa}</span>
                <h4>{p.nome}</h4>
                <p className="small text-muted">{p.hora} - {p.estado}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button onClick={() => mudarEstado(p.idPedido, "em andamento")} className="btn btn-sm btn-info text-white">Preparar</button>
                  <button onClick={() => mudarEstado(p.idPedido, "concluido")} className="btn btn-sm btn-success">Pronto</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}