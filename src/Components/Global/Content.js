// Dependencies
import React, { Component } from 'react';

// Assets
import logo from './Images/logoburgername.PNG';
import './Css/Content.css';

class Content extends Component {
    render() {
    return (
      <div className='Content'>
        <div className='Logo'>
      <img src={logo} alt='logo'/>
      <div className='button'>
     <button onClick class='button'><h2>Meseros</h2></button>
     <button onClick class='button'><h2>Cocina</h2></button>
     <button onClick class='button'><h2>Entregas</h2></button>
    </div>
    </div>
    </div>
      );
    }
    }
  
  export default Content;