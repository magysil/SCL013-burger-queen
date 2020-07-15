// Dependencias
import React, { Component } from "react";
import "../Global/Css/Total.css";

class Total extends Component {

  // Envia indice a eliminar
   sendOrder = () => {
     this.props.sendOrder()
     console.log('Click..... TOTAL')
    }

  render() {
     const {total}=this.props;
    return (
      <div className="Total">
        <h2 className="h2Total">TOTAL</h2>
        <div className='totalPrice'>${total}</div>
        <button className="btnEnviar" onClick={() => this.sendOrder()}>Enviar a COCINA</button>
      </div>
    );
  }
}

export default Total;

