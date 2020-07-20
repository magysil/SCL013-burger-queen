/* eslint-disable no-unused-expressions */
// Dependencies
import React, { Component } from "react";
import "../Global/Css/Cocina.css";
import db from "../../configDB/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Timer from '../ItemMenu/Timer';


class Cocina extends Component {
  state = {
    orders: [],
    time: ''
  };

  componentDidMount() {
    // console.log('mounted')
    db.collection("orders")
      .where("status", "in", ["espera", "preparando", "time"])
      .orderBy("time", "asc")
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
          console.log(
            "Documento de espera a preparando actualizado con éxito!"
          );
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

    const getOrderDate = (timestamp) => {
      let unix_timestamp = timestamp
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.

      // new Date() => retorna fecha y hora actual
      // var date => Convierte el timestamp a formato fecha correspondiente.
      let date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      let hours = date.getHours();
      // Minutes part from the timestamp
      let minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      let seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format, tamaño cadena
      let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      return formattedTime;
    }

    return (
      <div className="Cocina">
        <div className="Pedidos">
          <h2>Pedidos</h2>
          <div className="order-container">
            {this.state.orders.map((comanda, i) => (
              <button
                onClick={(e) => this.handleClick(e, comanda)}
                key={i + 1}
                type="button"
                className="btn btn-light custom">

                <p>{comanda.data.nfactura}</p>

                <span>Mesa Nº: {comanda.data.table}</span>

                <p>Pedido:{" "} {comanda.data.order.map((pedido, i) => {
                  return <span key={i + 1}>{pedido.name}<br></br></span>;
                   })}</p>

                <p>Hora de ingreso {getOrderDate(comanda.data.time.seconds)}</p>

                {comanda.data.status === 'espera' ?
                  <span className="badge badge-danger badge-pill ml-2">
                    Estado: {comanda.data.status}
                  </span> :

                  <span className="badge badge-warning badge-pill ml-2">
                    Estado: {comanda.data.status}
                  </span>}

                <div className='Time'>
                  <FontAwesomeIcon icon={faClock} />
                  <Timer timeStamp={comanda.data.time.seconds} />
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
