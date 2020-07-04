/* eslint-disable no-unused-vars */
// Dependencias
import React, { Component } from "react";
import PropTypes from 'prop-types';
// Componentes
import Content from "./Global/Content.js";
import Footer from "./Global/Footer.js";
// Data
//import items from "../Data/menu.js";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children} = this.props;
    return (
      <div className="App">
      <Content content={ children } />
      </div>
    );
  }
}


export default App;
