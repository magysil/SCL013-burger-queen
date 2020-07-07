
// Dependencies
import React, { Component } from "react";
import "../Global/Css/Meseros.css";
import Itemenu from "../ItemMenu/itemMenu";
import Executingorder from "../ItemMenu/Executingorder";

class Meseros extends Component {
  render() {
    return (
      <div className="Meseros">
        
        <Itemenu />
        <Executingorder />
      </div>
    );
  }
}

export default Meseros;
