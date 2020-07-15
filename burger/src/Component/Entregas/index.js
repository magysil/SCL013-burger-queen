// Dependencies
import React, { Component } from "react";
import "../Global/Css/Entregas.css";
import db from "../../configDB/firebase";

class Entregas extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    // console.log('mounted')
    db.collection("orders")
      .where("status", "==", "listo")
      .onSnapshot((snapshot) => {
        const orders = [];
        snapshot.forEach((doc) => {
          const data = { data: doc.data(), id: doc.id };
          console.log(data);
          orders.push(data);
        });
        this.setState({ orders: orders });
        // console.log(orders)
      });
  }
  // Clicks para cambiar status
  handleClick = (e, meal) => {
    e.preventDefault();
    console.log(`> Se ha Seleccionado: `, meal.id);
    let actualizarOrder = db.collection("orders").doc(meal.id);
    return actualizarOrder
      .update({
        status: "entregado",
      })
      .then(function () {
        console.log("Documento actualizado con éxito!");
      })
      .catch(function (error) {
        console.error("Error al actualizar el documento:", error);
      });
  };

  render() {
    return (
      <div className="Entregas">
         <h2>Entregas</h2>
        <div className="Entregar">
          <div className="options">
            {this.state.orders.map((comanda, i) => (
              <button
                onClick={(e) => this.handleClick(e, comanda)}
                key={i + 1}
                type="button"
                className="btn btn-light custom"
              >
                <p>{comanda.data.nfactura}</p>
                <span>Mesa Nº: {comanda.data.table}</span>
                <p>
                  Pedido:{" "}
                  {comanda.data.order.map((pedido, i) => {
                    return <span key={i + 1}>{pedido.name}</span>;
                  })}
                </p>
                <span className="badge badge-success badge-pill ml-2">
                  Estado: {comanda.data.status}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Entregas;
