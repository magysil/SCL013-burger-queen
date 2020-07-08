// Dependencies
import React, { Component } from "react";

class Executingorder extends Component {
  render() {
    return (
      <div className="Executingorder container w-75">

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">PRODUCTOS ESCOGIDOS</th>
              <th scope="col">CANT.</th>
              <th scope="col">PRECIO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">X</th>
              <td>Hamburguesa Queso</td>
              <td>5</td>
              <td>$1500</td>
            </tr>
            <tr>
              <th scope="row">X</th>
              <td>Cafe</td>
              <td>4</td>
              <td>$1300</td>
            </tr>
            <tr>
              <th scope="row">X</th>
              <td>Agua</td>
              <td>1</td>
              <td>$1000</td>
            </tr>
          </tbody>
        </table>
        <button className='btn btn-success'>Enviar</button>
      </div>
    );
  }
}

export default Executingorder;
