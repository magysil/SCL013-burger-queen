// Dependencies
import React, { Component } from "react";

class Executingorder extends Component {
  
   // Envia indice a eliminar
  deleteItem = (i) => {this.props.deleteItem(i)}

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
            {this.props.totalItem.map((item, i) => {
              return(
             <tr key= {i+1}>
               <th onClick={() => this.deleteItem(i)} className="deleteItem"scope="row">X</th>
               <td>{item.name}</td>
               <td>1</td>
               <td>{item.price}</td>
             </tr>
              )})}
         </tbody>
        </table>
        <button className='btn btn-success'>Enviar</button>
      </div>
    );
  }
}

export default Executingorder;
