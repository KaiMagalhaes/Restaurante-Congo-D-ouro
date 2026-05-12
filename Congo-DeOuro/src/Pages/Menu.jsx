import { useState, useEffect } from "react";
import "./Menu.css";

export default function Menu() {
  const [lista, setLista] = useState([]);
  const [nmrMesa, setNmrMesa] = useState("");

  const pratosFixos = [
    { id: 1, nmr: "15", foto: "/Img/moqueca.png", tipo: "Prato Principal", desc: "Peixe cozido com dendê e leite de coco.", nome: "Moqueca" },
    { id: 2, nmr: "12", foto: "/Img/feijoada.png", tipo: "Prato Principal", desc: "Feijão preto com carnes selecionadas.", nome: "Feijoada" },
    { id: 3, nmr: "8", foto: "/Img/acaraje.png", tipo: "Entrada", desc: "Bolinho de feijão fradinho frito no dendê.", nome: "Acarajé" },
    { id: 4, nmr: "10", foto: "/Img/vatapa.png", tipo: "Entrada", desc: "Creme de pão, camarão seco e amendoim.", nome: "Vatapá" },
    { id: 5, nmr: "14", foto: "/Img/bobo.png", tipo: "Prato Principal", desc: "Camarão com creme de mandioca temperado.", nome: "Bobó" },
    { id: 6, nmr: "5", foto: "/Img/cocada.png", tipo: "Sobremesa", desc: "Doce de coco tradicional e cremoso.", nome: "Cocada" }
  ];

  useEffect(() => {
    const pratosGerente = JSON.parse(localStorage.getItem("listaPratos") || "[]");
    setLista([...pratosFixos, ...pratosGerente]);
  }, []);

  const pedir = (elemento) => {
    if (!nmrMesa) return alert("Digite a mesa!");
    const dados = JSON.parse(localStorage.getItem("listaPedidos") || "[]");
    const novo = { 
      idPedido: Date.now(), 
      nome: elemento.nome, 
      mesa: nmrMesa, 
      hora: new Date().toLocaleTimeString(), 
      estado: "pendente" 
    };
    localStorage.setItem("listaPedidos", JSON.stringify([...dados, novo]));
    alert(elemento.nome + " enviado para a mesa " + nmrMesa);
  };

  return (
    <div className="menu-container">
      <h1 className="menu-titulo">Cardápio Congo D'Ouro</h1>
      <div className="mesa-selecao">
        <input 
          type="number" 
          className="input-mesa" 
          placeholder="Sua Mesa" 
          value={nmrMesa} 
          onChange={(e) => setNmrMesa(e.target.value)} 
        />
      </div>
      <div className="menu-grid">
        {lista.map((elemento) => (
          <div key={elemento.id} className="menu-card">
            <img src={elemento.foto} className="menu-foto" alt={elemento.nome} />
            <div className="menu-info">
              <div className="menu-header">
                <h5 className="prato-nome">{elemento.nome}</h5>
                <span className="prato-tipo">{elemento.tipo}</span>
              </div>
              <p className="prato-desc">{elemento.desc}</p>
              <div className="menu-footer">
                <span className="prato-preco">{elemento.nmr}€</span>
                <button onClick={() => pedir(elemento)} className="btn-pedir">Pedir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}