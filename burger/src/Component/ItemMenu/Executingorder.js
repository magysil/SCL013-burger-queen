// Dependencies
import React, { Component } from "react";
import "../Global/Css/Executingorder.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Executingorder extends Component {

   // Envia indice a eliminar
  deleteItem = (i) => {this.props.deleteItem(i)}

  render() {
    return (
      <div className="Executingorder container">
        <table className="table table-hover">
          <thead className='tableHead'>
            <tr>
              <th scope="col"></th>
              <th scope="col">PRODUCTOS ESCOGIDOS</th>
              <th scope="col">CANT.</th>
              <th scope="col">PRECIO</th>
            </tr>
          </thead>
          <tbody className='tableBody'>
            {this.props.totalItem.map((item, i) => {
              return(
             <tr key= {i+1}>
               <th onClick={() => this.deleteItem(i)} className="deleteItem" scope="row">
               <i className="trashIcon"><FontAwesomeIcon icon={faTrash} /></i>
               </th>
               <td className='aaa table-light'>{item.name}</td>
               <td className='aaa table-light'>1</td>
               <td className='aaa table-light'>{item.price}</td>
             </tr>
               )})}
         </tbody>
        </table>
      </div>
    );
  }
}

export default Executingorder;
