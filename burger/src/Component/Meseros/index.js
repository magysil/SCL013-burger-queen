// Dependencies
import React, { Component } from "react";
import "../Global/Css/Meseros.css";
import Itemenu from "../ItemMenu/itemMenu";
import Executingorder from "../ItemMenu/Executingorder";
import InputContainer from "../ItemMenu/InputContainer";
import Total from "../ItemMenu/Total";
import db from "../../ConfigDB/firebase"

class Meseros extends Component {

  state = {
    client: "",
    table: "",
    order: [],
    total: 0,
    status:''
  };

  // Cliente
nameClient(Name) {
  this.setState({
    client: Name
  });
}

// Mesa
numTable(tableNumber) {
  this.setState({
    table: tableNumber
  });
}

  // Agregar items al pedido
  addItem = (item) =>{
    this.setState(e => ({
      order: [...e.order, item],
    }));
  };

  // Elimina item del pedido
   deleteItem = i => {
    let order = [...this.state.order];
    order.splice(i, 1);
    this.setState({
      order: order
    });
  };
  //Función que guarda los datos de la colección en firebase
  sendOrder() {
    db.collection('orders').add({
      client: this.state.client,
      table: this.state.table,
      order: this.state.order,
      time: new Date(),
      status: 'preparando',
    })
    .then((docRef) => {
      //this.resetState();
      console.log(docRef);
    })
    .catch((error) => {
      console.log('Error ', error);
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
          <InputContainer 
          nameClient={this.nameClient.bind(this)}
          numTable={this.numTable.bind(this)}
          />
          <div className='ExecutingorderAndTotal'>
          <Executingorder 
          totalItem={this.state.order}
          deleteItem={this.deleteItem.bind(this)} />
          <Total 
          orderPay={this.state.order}
          sendOrder={this.sendOrder.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Meseros;
