import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveDatasInput } from "../../../redux/actions/actions";
import DatePicker from "react-datepicker";
import Select from "react-select";

function InputCreator(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>

      {props.type === "select" ? (
        <Select options={props.selectContent} onChange={e => props.saveDatasInput(e.value, props.name)} />
      ) : props.type === "datepicker" ? (
        <DatePicker
          selected={startDate}
          onChange={(date) => {setStartDate(date); props.saveDatasInput(date.toLocaleDateString(), props.name)}}
        />
      ) : (
        <input type={props.type} id={props.name} onChange={e => props.saveDatasInput(e.target.value, props.name)} />
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      saveDatasInput,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(InputCreator)