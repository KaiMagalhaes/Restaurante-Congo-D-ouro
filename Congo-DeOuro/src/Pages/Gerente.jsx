import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Gerente.css";

export default function Gestor() {
  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const [preco, setPreco] = useState("");
  const [cat, setCat] = useState("Prato Principal");

  const nav = useNavigate();

//  ----------------------VERIFICACAO SE É GERENTE -------------------------------------
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "gerente") {
      nav("/login");
    }
  }, [nav]);

 
  function salvarPrato(e) {
    e.preventDefault();


    const dados = localStorage.getItem("listaPratos");
    const pratosAtuais = dados ? JSON.parse(dados) : [];

// ----------------------------------------cria prato-------------------------------
    const novo = {
      id: Date.now(),
      nome: nome,
      desc: desc,
      nmr: preco,
      tipo: cat,
      foto: "/img/default.png"
    };

    localStorage.setItem("listaPratos", JSON.stringify([...pratosAtuais, novo]));
    alert("Prato adicionado");


    setNome("");
    setDesc("");
    setPreco("");
  }

  return (
    <div className="gestor-container">
      <h2 className="gestor-titulo">Painel do Gestor - Adicionar Prato</h2>

      <div className="gestor-card">

   {/* --------------------------------FORMULARIO PROS PRATOS---------------------------------------- */}
        <form onSubmit={salvarPrato} className="gestor-form">

          <div className="campo-grupo">
            <label>Nome do Prato</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="campo-grupo">
            <label>Descrição</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>

          <div className="campo-grupo">
            <label>Preço (€)</label>
            <input
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </div>
{/* --------------------------------categoria pratos--------------------------------------- */}
          <div className="campo-grupo">
            <label>Categoria</label>
            <select value={cat} onChange={(e) => setCat(e.target.value)}>
              <option value="Entrada">Entrada</option>
              <option value="Prato Principal">Prato principal</option>
              <option value="Sobremesa">Sobremesa</option>
            </select>
          </div>

          <button type="submit" className="btn-salvar">Salvar prato</button>

        </form>
      </div>
    </div>
  );
}