import React, { Component } from 'react'
import './OptionsModal.css'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'

// const CookieModal = ({ toggleModal, closeModal }) => {
//   return (
// <aside id='modal' className='modalWrapper' onClick={e => closeModal(e)}>
//     <div className = 'modalInner'>
//         <span className ='close' onClick={toggleModal}>X</span>
//         <h1>Modal!</h1>
//         <p>COOOOOOOl</p>
//     </div>
// </aside>

//   );
  
// };

// export default CookieModal;

export class OptionsModal extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Elegir <b>proteína</b> y/o <b>extras</b>:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className = 'container'>
          ...
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = 'danger' onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }


}