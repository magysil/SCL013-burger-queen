// Dependencias
import React, { Component } from "react";
import "../Global/Css/Total.css";

class Total extends Component {

  render() {
    const {total}=this.props;
    return (
      <div className="Total">
        <h2 className="h2Total">TOTAL</h2>
        <div>{total}</div>
        <button className='btnEnviar'>Enviar a COCINA</button>
      </div>
    );
  }
}

export default Total;
