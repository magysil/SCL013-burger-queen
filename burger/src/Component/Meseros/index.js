
// Dependencies
import React, { Component } from "react";
import "../Global/Css/Meseros.css";
import Itemenu from "../ItemMenu/itemMenu";
import Executingorder from "../ItemMenu/Executingorder";

class Meseros extends Component {

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
    console.log(this.state.order);
    return (
      <div className="Meseros">
      <div className="Menus">
        <h2>Menus del Día</h2>
         <Itemenu addItem={this.addItem.bind(this)}/>
        </div>
        <div className="Agregar">
          <Executingorder 
          total={this.state.order}
          deleteItem={this.deleteItem.bind(this)} />
        <button className='btn btn-danger'>Enviar</button>
      </div>
      </div>
    );
  }
}

export default Meseros;
