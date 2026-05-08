import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Gestor() {
  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const [preco, setPreco] = useState("");
  const [cat, setCat] = useState("Prato Principal");
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "gerente") {
      navigate("/login");
    }
  }, [navigate]);

  const salvarPrato = (e) => {
    e.preventDefault();
    const dados = localStorage.getItem("listaPratos");
    const pratosAtuais = dados ? JSON.parse(dados) : [];

    const novo = {
      id: Date.now(),
      nome: nome,
      desc: desc,
      nmr: preco,
      tipo: cat,
      foto: "/Img/default.png"
    };

    localStorage.setItem("listaPratos", JSON.stringify([...pratosAtuais, novo]));
    alert("Prato adicionado com sucesso!");
    
    setNome("");
    setDesc("");
    setPreco("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Painel do Gestor - Adicionar Prato</h2>
      <div className="card p-4 shadow-sm" style={{maxWidth: "600px"}}>
        <form onSubmit={salvarPrato}>
          <div className="mb-3">
            <label className="form-label">Nome do Prato</label>
            <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <textarea className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Preço (€)</label>
            <input type="number" className="form-control" value={preco} onChange={(e) => setPreco(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Categoria</label>
            <select className="form-select" value={cat} onChange={(e) => setCat(e.target.value)}>
              <option value="Entrada">Entrada</option>
              <option value="Prato Principal">Prato Principal</option>
              <option value="Sobremesa">Sobremesa</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100">Salvar Prato</button>
        </form>
      </div>
    </div>
  );
}