/* eslint-disable no-unused-expressions */

// Dependencies
import React, { Component } from "react";
import "../Global/Css/Cocina.css";

import db from '../../configDB/firebase';

class Cocina extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    // console.log('mounted')
    db.collection("orders")
      .get()
      .then((snapshot) => {
        const orders = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          orders.push(data);
        });
        this.setState({ orders: orders });
        // console.log(orders)
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="Cocina">
        <div className="Pedidos">
          <h2>Pedidos</h2>
          {this.state.orders &&
            this.state.orders.map( comanda => {
              return (
                <div>
                  <p>{comanda.nfactura}</p>
                  <p>Mesa {comanda.table}</p>
                  <p>
                    Pedido:{" "}
                    {comanda.order.map((pedido) => {
                      return pedido.name;
                    })}
                  </p>
                  <p>Estado: {comanda.status}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Cocina;
