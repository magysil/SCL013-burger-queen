// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Assets
import logo from "../Global/Images/logoBQ.svg";
import "../Global/Css/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Logo">
          <img src={logo} alt="logo" />
            <button className="button">
            <Link to={'/meseros'}><h2>Meseros</h2></Link>
            </button>
            <button className="button">
            <Link to={'/cocina'}><h2>Cocina</h2></Link>
            </button>
            <button className="button">
            <Link to={'/entregas'}><h2>Entregas</h2></Link>
            </button>
        </div>
      </div>
    );
  }
}

export default Home;
