import React from "react";

export default function InputCreator(props) {
  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>
      {props.select.isSelect ? (
        <select name={props.name} id={props.name}>
          {props.select.content.map((el, index) => (
            <option key={el+index}>{el}</option>
          ))}
        </select>
      ) : (
        <input type={props.type} id={props.name} />
      )}
    </>
  );
}
