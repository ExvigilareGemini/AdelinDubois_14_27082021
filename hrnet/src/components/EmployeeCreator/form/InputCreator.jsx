import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function InputCreator(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>
      {props.type === "select" ? (
        <select name={props.name} id={props.name}>
          {props.selectContent.map((el, index) => (
            <option key={el + index}>{el}</option>
          ))}
        </select>
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
