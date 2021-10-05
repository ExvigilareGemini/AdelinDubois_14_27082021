import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFormData } from "../../../redux/actions/actions";
import Select from "react-select";
import Datetime from "react-datetime";

function InputCreator(props) {

  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>

      {props.type === "select" ? (
        <Select
          options={props.selectContent}
          onChange={(e) => props.getFormData(e.value, props.name)}
        />
      ) : props.type === "datepicker" ? (
        <Datetime
          dateFormat="DD/MM/YYYY"
          timeFormat={false}
          onChange={(e) => {
            if (typeof(e) === "object" && e.constructor.name === "Moment") {
              props.getFormData(
                `${e.date()}/${e.month() + 1}/${e.year()}`,
                props.name
              );
            }
          }}
        />
      ) : (
        <input
          type={props.type}
          id={props.name}
          onChange={(e) => props.getFormData(e.target.value, props.name)}
        />
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getFormData,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(InputCreator);
