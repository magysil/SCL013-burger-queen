import React, { useState } from 'react'
import CookieModal from './OptionsModal'

const CookieModalContainer = () => {
  const [showModal, setShowModal] = useState(true); //toggle para on y off

  const toggleModal = () => {
    setShowModal(!showModal); //el opuesto es true
  };

  const closeModal = e => {
    if (e.target.id === 'modal') {
      toggleModal();
    }
  };

  return (
    <>
      {showModal && (
        <CookieModal toggleModal={toggleModal} closeModal={closeModal} />
      )}
    </>
  );
};

export default CookieModalContainer;