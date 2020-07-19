// Dependencies
import React, { Component } from "react";
import "../Global/Css/InputContainer.css";
import db from "../../configDB/firebase";
//import numberOrder from "../../Data/numberOrder.json"

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOrder: 0,
      factura: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    db.collection("orders").onSnapshot((snapshots) => {
      this.setState({
        factura: snapshots.docs.map((doc) => {return {datos: doc.data().tipofac,};
        }),
      });
    });
  };

  // Input Nombre Cliente
  handleChange(e) {
    const value = e.target.value;
    this.props.nameClient(value);
  }
  // Input Numero Mesa
  handleChanges = (e) => {
    const table = e.target.value;
    this.props.numTable(table);
  };

  // Asignar Numero de pedido
  pedido = () => {
    let data = this.state.factura;
    let cantidad = data.reduce((contador, d) => {
      if (d.datos === "factura") {
        return contador + 1;
      } else {
        return contador;
      }
    }, 1);
    console.log(cantidad);
    this.state.numberOrder = cantidad;
  };


  render() {
    this.pedido();
    return (
      <div className="InputContainer">
        <form>
          <div className="InputName">
            <h2>Cliente</h2>
            <input
              type="text"
              id="clientName"
              name="name"
              value={this.props.name}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="InputOrder">
            <h2>nº Pedido</h2>
            <p className="pPedido">{this.state.numberOrder}</p>
          </div>
          <div className="InputMesa">
            <h2>nº Mesa</h2>
            <input
              type="text"
              id="clientTable"
              name="table"
              value={this.props.table}
              onChange={(e) => this.handleChanges(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default InputContainer;
