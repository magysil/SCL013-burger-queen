
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
        <h2>Menus</h2>
         <Itemenu />
        </div>
        <div className="Agregar">
        <h4>Nombre cliente</h4>
          <Executingorder />
        <h3>Enviar</h3>
      </div>
      </div>
    );
  }
}

export default Meseros;
