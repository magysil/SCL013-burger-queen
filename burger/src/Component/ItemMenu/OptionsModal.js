import React from 'react'
import './OptionsModal.css'

const CookieModal = ({ toggleModal, closeModal }) => {
  return (
<aside id='modal' className='modalWrapper' onClick={e => closeModal(e)}>
    <div className = 'modalInner'>
        <span className ='close' onClick={toggleModal}>X</span>
        <h1>Modal!</h1>
        <p>COOOOOOOl</p>
    </div>
</aside>

  );
  
};

export default CookieModal;