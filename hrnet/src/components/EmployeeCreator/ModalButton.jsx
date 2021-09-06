import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/actions";
import Modal from "styled-react-modal";
import cross from "../../img/close-circle-fill.svg";

function ModalButton(props) {
  function toggleModal() {
    props.toggleModal(props.modalIsOpen);
  }

  return (
    <>
      <button className="saveButton" onClick={toggleModal}>
        Save
      </button>
      <Modal
        isOpen={props.modalIsOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        Employee created
        <img src={cross} onClick={toggleModal} alt=""></img>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return { modalIsOpen: state.modalIsOpen };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleModal,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalButton);
