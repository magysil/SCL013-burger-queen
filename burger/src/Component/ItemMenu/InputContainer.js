// Dependencies
import React, { Component } from "react";
import "../Global/Css/InputContainer.css";
import db from "../../ConfigDB/firebase"
//import numberOrder from "../../Data/numberOrder.json"

class InputContainer extends Component {
    constructor (props) {
      super(props);
      this.state = {
        numberOrder:0,
        factura:[]
      };
      this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
      db.collection("facturas")
      .orderBy("nfactura", "desc").onSnapshot((snapshots)=>{
        this.setState({
          factura: snapshots.docs.map(doc =>{
            return {
              nfactura: doc.data().nfactura
            }
          })
        })
      })
    }

      handleChange (e) {
      const value = e.target.value;
      this.props.nameClient(value);
    };
    
      handleChanges = e => {
      const table = e.target.value;
      this.props.numTable(table);
    }; 

    render () {
      return (
        <div className='InputContainer'>
        <form>
        <div className='InputName'>
          <h2>Cliente</h2>
          <input
            type='text'
            name='name'
            value={this.props.name}
            onChange={e => this.handleChange(e)} />
            </div>
           <div className='InputOrder'>
           <h2>nº Pedido</h2>
           <p className="pPedido">{this.state.numberOrder}</p>
        </div>
        <div className='InputMesa'>
           <h2>nº Mesa</h2>
          <input
            type='number'
            name='table'
            value={this.props.table}
            onChange={e => this.handleChanges(e)} />
        </div>
        </form>
            </div>
      );
    }
  }

export default InputContainer;
