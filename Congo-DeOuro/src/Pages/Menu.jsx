import { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [nmrMesa, setNmrMesa] = useState(""); // Estado para a mesa

  const lista = [
    { id: 1, nmr: "15", foto: "/Img/moqueca.png", tipo: "Prato Principal", desc: "Peixe cozido com dendê e leite de coco.", nome: "Moqueca" },
    { id: 2, nmr: "12", foto: "/Img/feijoada.png", tipo: "Prato Principal", desc: "Feijão preto com carnes selecionadas.", nome: "Feijoada" },
    { id: 3, nmr: "8", foto: "/Img/acaraje.png", tipo: "Entrada", desc: "Bolinho de feijão fradinho frito no dendê.", nome: "Acarajé" },
    { id: 4, nmr: "10", foto: "/Img/vatapa.png", tipo: "Entrada", desc: "Creme de pão, camarão seco e amendoim.", nome: "Vatapá" },
    { id: 5, nmr: "14", foto: "/Img/bobo.png", tipo: "Prato Principal", desc: "Camarão com creme de mandioca temperado.", nome: "Bobó" },
    { id: 6, nmr: "5", foto: "/Img/cocada.png", tipo: "Sobremesa", desc: "Doce de coco tradicional e cremoso.", nome: "Cocada" }
  ];

  const pedir = (elemento) => {
    if (!nmrMesa) {
      alert("Por favor, digite o número da sua mesa!");
      return;
    }

    const dados = localStorage.getItem("listaPedidos");
    const pedidosAtuais = dados ? JSON.parse(dados) : [];
    
    const novoPedido = {
      idPedido: Date.now(),
      nome: elemento.nome,
      mesa: nmrMesa,
      hora: new Date().toLocaleTimeString(),
      estado: "pendente"
    };

    localStorage.setItem("listaPedidos", JSON.stringify([...pedidosAtuais, novoPedido]));
    alert(elemento.nome + " enviado para a mesa " + nmrMesa);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-2">Cardápio Congo D'Ouro</h1>
      
      <div className="d-flex justify-content-center mb-5">
        <div className="col-md-3 text-center">
          <label className="fw-bold">Sua Mesa:</label>
          <input 
            type="number" 
            className="form-control text-center" 
            placeholder="Ex: 05"
            value={nmrMesa}
            onChange={(e) => setNmrMesa(e.target.value)} 
          />
        </div>
      </div>

      <div className="row">
        {lista.map((elemento) => (
          <div key={elemento.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm card-container">
              <img src={elemento.foto} className="card-img-top card-img-custom" alt={elemento.nome} />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{elemento.nome}</h5>
                  <span className="badge bg-secondary mb-2">{elemento.tipo}</span>
                </div>
                <p className="card-text text-muted small">{elemento.desc}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="fw-bold fs-5">{elemento.nmr}€</span>
                  <button onClick={() => pedir(elemento)} className="btn btn-outline-primary btn-sm">Pedir</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}