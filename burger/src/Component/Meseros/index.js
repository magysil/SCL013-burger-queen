
// Dependencies
import React, { Component } from "react";
import "../Global/Css/Meseros.css";
import Itemenu from "../ItemMenu/itemMenu";
import Executingorder from "../ItemMenu/Executingorder";
import CookieModalContainer from '../ItemMenu/OptionsModalContainer'

class Meseros extends Component {
  render() {
    return (
      <div className="Meseros">
        
        <Itemenu />
        <CookieModalContainer />
        <Executingorder />
      </div>
    );
  }
}

export default Meseros;
