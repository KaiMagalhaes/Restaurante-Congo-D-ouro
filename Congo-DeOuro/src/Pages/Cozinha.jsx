import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cozinha.css";

export default function Cozinha() {

  const [pedidos, setPedidos] = useState([]);
  const nav = useNavigate();

//  -------------------------------VERIFICACAO SE EH COZINHA OU N---------------------------------
  useEffect(() => {
    const role = localStorage.getItem("userRole");

    if (role !== "cozinha") {
      nav("/login");
    }

// ------------------------parte de busca dos pedidos---------------------------------
    const dados = JSON.parse(localStorage.getItem("listaPedidos") || "[]");
    setPedidos(dados);
  }, [nav]);

// ---------------------atualiza estado pedido--------------------------------
  function status(id, txt) {
    const nova = pedidos.map(p =>
      p.idPedido === id ? { ...p, estado: txt } : p
    );
    setPedidos(nova);
    localStorage.setItem("listaPedidos", JSON.stringify(nova));
  }

  return (
    <div className="corpo-cozinha">
      <h2>Pedidos pendentes</h2>

{/* -------------------------------PARTE DOS PEDIDOS--------------------------------- */}
      <div className="lista-pedidos">
        {pedidos.length === 0 ? (
          <p>Nenhum pedido no momento</p>
        ) : (
          pedidos.map(p => (
            <div key={p.idPedido} className="item-pedido">

    
              <div className="topo-pedido">
                <span className="badge-mesa">Mesa {p.mesa}</span>
                <small>{p.estado}</small>
              </div>

              <h4 style={{ margin: "10px 0" }}>{p.nome}</h4>

        {/* ---------------------------botoes cozinha------------------------------------- */}
              <div className="acoes">
                <button className="btn-fazer" onClick={() => status(p.idPedido, "Preparando")}>
                  Fazendo
                </button>
                <button className="btn-pronto" onClick={() => status(p.idPedido, "Pronto")}>
                  Pronto
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}