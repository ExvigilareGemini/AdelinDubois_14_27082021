import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

export default function InputCreator(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>
      {props.type === "select" ? (
        <Select options={props.selectContent} />
      ) : props.type === "datepicker" ? (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      ) : (
        <input type={props.type} id={props.name} />
      )}
    </>
  );
}
