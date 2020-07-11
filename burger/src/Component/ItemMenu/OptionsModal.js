import React, { Component } from 'react'
import data from '../../Data/menu.json'
import {Modal, Button} from 'react-bootstrap'

export class OptionsModal extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    
    this.state = {      
      typefood: [],
      showModal: false,
     currentMeal: null,
      option: null,
      extras: []
    };
  }
    componentDidMount() {
      this.setState({typefood: data})
      console.log(data);
    }

    hideModal = () => {
      this.setState({
        typefood: [],
        showModal: false,
       currentMeal: null,
        options: null,
        extras: []
      });
    };
  

    handleChange = (event) => {
    const value = event.target.name;
    this.setState(previousState => ({
      options: [...previousState.extras, value]
    }));
  }

  // actualizar el estado del modal
  addItem = () => {
    if (this.state.option === null) {
      return alert ('Tienes que escoger una de las opciones obligatorias')
    }

    const productModal = {
      name: this.state.currentMeal.name,
      price: this.state.currentMeal.price,
      id: this.state.currentMeal.id,
      option: this.state.option,
      extras: this.state.extras
    }
    this.props.addOrder(productModal);
    this.hideModal();
  }
  

 



  render () {
    console.log(data);
    return (
      <Modal
      key={`modal-${data.objectID}`} show={this.state.showModal} onHide={() => this.hideModal()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Elegir <b>proteína</b> y/o <b>extras</b>:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className = 'container'>
        <div className="col-6" onChange={event => this.handleChange(event)}>
            <p>Elige el tipo:<span className='asterisk'>*</span></p>
            {data.options.map(option => {
              return (
                <label className="container" key={option.id}>
                  <input type="radio" name="RadioOption" value={option.name} required/>{" "}
                  {option.name}
                </label>
              )
            })}
        </div>

        
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = 'danger' onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }
}
