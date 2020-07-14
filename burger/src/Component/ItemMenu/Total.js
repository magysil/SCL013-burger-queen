// Dependencias
import React, { Component } from "react";
import "../Global/Css/Total.css";

class Total extends Component {

  totalPay = () => {
    let sum = 0;
    this.props.orderPay.forEach(data => 
      {sum += data.price}
      );
    return sum;
  };

  sendKitchen = () => {
    console.log('Click.....')
    
  }
   // Envia indice a eliminar
   sendOrder = () => {
     this.props.sendOrder()
     console.log('Click..... TOTAL')
    }

  render() {

    return (
      <div className="Total">
        <h2 className="h2Total">TOTAL</h2>
        <p className="pTotal">${this.totalPay()}</p>
        <button className="btnEnviar" onClick={() => this.sendOrder()}>Enviar a COCINA</button>
      </div>
    );
  }
}

export default Total;
 