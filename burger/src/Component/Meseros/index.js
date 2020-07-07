
// Dependencies
import React, { Component } from "react";
import "../Global/Css/Meseros.css";
import Itemenu from "../ItemMenu/itemMenu";
import Executingorder from "../ItemMenu/Executingorder";

class Meseros extends Component {
  render() {
    return (
      <div className="Meseros">
      <div className="Menus">
        <h2>Menus del Día</h2>
         <Itemenu />
        </div>
        <div className="Agregar">
          <Executingorder />
        <button className='btn btn-danger'>Enviar</button>
      </div>
      </div>
    );
  }
}

export default Meseros;
