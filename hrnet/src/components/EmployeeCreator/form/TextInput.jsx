import React from "react";

export default function TextInput(props) {
  return (
    <>
      <label for={props.name}>{props.title}</label>
      <input type="text" id={props.name} />
    </>
  );
}
