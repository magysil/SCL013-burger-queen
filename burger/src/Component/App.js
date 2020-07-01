// Dependencias
import React, { Component } from "react";
// Componentes
import Header from "./Global/Header.js";
import Content from "./Global/Content.js";
import Footer from "./Global/Footer.js";
// Data
//import items from "../Data/menu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header title= {"Inicio"} />
      <Content/>
      <Footer/>
      </div>
    );
  }
}

export default App;
