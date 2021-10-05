import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/actions";
import Modal from "styled-react-modal";
import cross from "../../img/close-circle-fill.svg";

function ModalWindow(props) {
  const { modalIsOpen, toggleModal } = props; 

  function togglingModal() {
    toggleModal(modalIsOpen);
  }
  
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onBackgroundClick={togglingModal}
        onEscapeKeydown={togglingModal}
      >
        Employee created
        <img src={cross} onClick={togglingModal} alt=""></img>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return { modalIsOpen: state.employee.modalIsOpen };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleModal,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
