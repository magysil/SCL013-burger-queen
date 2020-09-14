// Dependencias
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Footer from './Global/Footer';
// Componentes
import Content from "./Global/Content.js";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children} = this.props;
    return (
      <div className="App">
      <Content content={ children } />
      <Footer/>
      </div>
    );
  }
}

export default App;
