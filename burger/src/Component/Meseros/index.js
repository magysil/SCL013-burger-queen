
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
        <h3>Yo soy el contenedor de menus</h3>
         <Itemenu />
        </div>
        <div className="Agregar">
        <h3>Yo tomo los pedidos</h3>
          <Executingorder />
        <h3>Enviar</h3>
      </div>
      </div>
    );
  }
}


