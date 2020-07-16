/* eslint-disable no-unused-expressions */

// Dependencies
import React, { Component } from "react";
import "../Global/Css/Cocina.css";
import db from "../../configDB/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Clock from '../ItemMenu/Clock';
import Timer from '../ItemMenu/Timer';

class Cocina extends Component {
  state = {
    orders: [],
    timer:''
  };

  componentDidMount() {
    // console.log('mounted')
    db.collection("orders")
      .where("status", "in", ["espera", "preparando", 'time'])
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

    if (meal.data.status === "espera") {
      return actualizarOrder.update({
          status: "preparando",
        })
        .then(function () {
          console.log("Documento de espera a preparando actualizado con éxito!");
        })
        .catch(function (error) {
          console.error("Error al actualizar el documento:", error);
        });
    } else {
      return actualizarOrder.update({
          status: "listo",
        })
        .then(function () {
          console.log("Documento de preparando a listo actualizado con éxito!");
        })
        .catch(function (error) {
          console.error("Error al actualizar el documento:", error);
        });
    }
  };

  render() {
    return (
      <div className="Cocina">
        <div className="Pedidos">
          <h2>Pedidos</h2>
          <div className="options">
            {this.state.orders.map((comanda, i) => (
              <button
                onClick={(e) => this.handleClick(e, comanda)}
                key={i + 1}
                type="button"
                className="btn btn-light custom">
                <p>{comanda.data.nfactura}</p>
                <span>Mesa Nº: {comanda.data.table}</span>
                <p>
                  Pedido:{" "}
                  {comanda.data.order.map((pedido, i) => {
                    return <span key={i + 1}>{pedido.name}</span>;
                  })}
                </p>
                {comanda.data.status==='espera' ?
                <span className="badge badge-danger badge-pill ml-2">
                  Estado: {comanda.data.status}
                </span>:
                <span className="badge badge-warning badge-pill ml-2">
                  Estado: {comanda.data.status}
                </span>}
             <div className='Time'>
             <FontAwesomeIcon icon={faClock} />
             <Timer />
           {/* {timer}  */}
            </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cocina;
