import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFormData } from "../../../redux/actions/actions";
import DatePicker from "react-datepicker";
import Select from "react-select";

function InputCreator(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>

      {props.type === "select" ? (
        <Select
          options={props.selectContent}
          onChange={(e) => props.getFormData(e.value, props.name)}
        />
      ) : props.type === "datepicker" ? (
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            if (date !== null)
              props.getFormData(date.toLocaleDateString(), props.name);
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
