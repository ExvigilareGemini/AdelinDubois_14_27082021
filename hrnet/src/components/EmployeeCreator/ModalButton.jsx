import React, { useState } from "react";
import Modal from "styled-react-modal";
import cross from "../../img/close-circle-fill.svg"

export default function ModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <button className="saveButton" onClick={toggleModal}>Save</button>
      <Modal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        Employee created
        <img src={cross} onClick={toggleModal} alt=""></img>
      </Modal>
    </>
  );
}
