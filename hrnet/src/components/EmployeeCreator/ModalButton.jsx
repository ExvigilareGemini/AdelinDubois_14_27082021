import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { handleSaveButton } from "../../redux/actions/actions";
import Modal from "styled-react-modal";
import cross from "../../img/close-circle-fill.svg";

function ModalButton(props) {
  function handleSaveButton() {
    props.handleSaveButton(props.state);
  }

  return (
    <>
      <button className="saveButton" onClick={handleSaveButton}>
        Save
      </button>
      <Modal
        isOpen={props.state.modalIsOpen}
        onBackgroundClick={handleSaveButton}
        onEscapeKeydown={handleSaveButton}
      >
        Employee created
        <img src={cross} onClick={handleSaveButton} alt=""></img>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return { state: state.employee };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      handleSaveButton,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalButton);
