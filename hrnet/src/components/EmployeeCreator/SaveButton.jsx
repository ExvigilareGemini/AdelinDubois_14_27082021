import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { handleSaveButton } from "../../redux/actions/actions";

function SaveButton(props) {
    function handleSaveButton() {
        props.handleSaveButton(props.state);
      }

  return (
    <>
      <button className="saveButton" onClick={handleSaveButton}>
        Save
      </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);
