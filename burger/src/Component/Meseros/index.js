// Dependencies
import React, { Component } from "react";
import "../Global/Css/Meseros.css";
import Itemenu from "../ItemMenu/itemMenu";
import Executingorder from "../ItemMenu/Executingorder";
import InputContainer from "../ItemMenu/InputContainer";
import Total from "../ItemMenu/Total";

class Meseros extends Component {
// Parte vacio
  state = {
    order: []
  };

  // Agregar items al pedido
  addItem(item) {
    this.setState(e => ({
      order: [...e.order, item]
    }));
  }

   // Elimina item del pedido
   deleteItem = i => {
    let order = [...this.state.order];
    order.splice(i, 1);
    this.setState({
      order: order
    });
  };

  render() {
    // Se crea const precios y let total con su funcion para sumar
    const precios = this.state.order.map((item) => item.price);
    let total = precios.reduce((a, b) => a + b, 0);

    return (
      <div className="Meseros">
      <div className="Menus">
        <h2>Menus del Día</h2>
         <Itemenu addItem={this.addItem.bind(this)}/>
        </div>
        <div className="Agregar">
          <InputContainer />
          <div className='ExecutingorderAndTotal'>
          <Executingorder
          totalItem={this.state.order}
          deleteItem={this.deleteItem.bind(this)} />
          <Total
            total={total}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Meseros;
