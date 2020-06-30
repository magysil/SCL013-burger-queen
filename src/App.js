// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Components/Global/Header';
import Content from './Components/Global/Content';
import Footer from './Components/Global/Footer';

// Data
import items from './data/menu';

// Incluye este componente dentro de este div
// etiqueta '<Header/>' creada desde 'Header.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header title= {"Inicio"} items= {"items"} />
      <Content/>
      <Footer/>
      </div>
    );
   }
  }
export default App;


// props datos estaticos
// state informacion dinamica de cosas que cambiaremos constantemente, modificamos comportamiento de la aplicacion, renderiza diferentes cosas
// constructor en clase content, 1era funcion que se ejectuta en una clase en REACT
//metodo 'super para acceder a objeto this de esta clase
