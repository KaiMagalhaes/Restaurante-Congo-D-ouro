export default function Menu() {
  const lista = [
    { id: 1, nome: "Moqueca", preco: 15, foto: "/img/moqueca.png" },
    { id: 2, nome: "Feijoada", preco: 12, foto: "/img/feijoada.png" },
    { id: 3, nome: "Acarajé", preco: 8, foto: "/img/acaraje.png" }
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Cardápio Congo D'Ouro</h1>
      <div className="row">
        {lista.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.foto} className="card-img-top" alt={item.nome} />
              <div className="card-body">
                <h5 className="card-title">{item.nome}</h5>
                <p className="card-text">{item.preco}€</p>
                <button className="btn btn-primary">Pedir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}