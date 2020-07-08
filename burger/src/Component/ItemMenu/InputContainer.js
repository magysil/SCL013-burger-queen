// Dependencies
import React, { Component } from "react";

class InputContainer extends Component {
    constructor (props) {
      super(props);
      this.state = {
        name: '',
        order: ''
      };
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    };
    render () {
      return (
        <div className='InputContainer'>
        <form>
        <div className='InputName'>
          <h2>Nombre cliente</h2>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange} />
            </div>
           <div className='InputOrder'>
           <h2>nº Pedido</h2>
          <input
            type='number'
            name='order'
            value={this.state.order}
            onChange={this.handleChange} />
        </div>
        <div className='InputMesa'>
           <h2>nº Mesa</h2>
          <input
            type='number'
            name='order'
            value={this.state.order}
            onChange={this.handleChange} />
        </div>
        </form>
            </div>
      );
    }
  }

export default InputContainer;
