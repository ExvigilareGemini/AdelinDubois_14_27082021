import React from "react";
import { inputNames } from "../../data/inputNames";
import TextInput from "./form/TextInput";

export default function Form() {
  return <form className="EmployeeCreatorForm">
      {
          inputNames.map((el) => {
              return <TextInput name={el.name} title={el.title}/>
          })
      }
  </form>;
}
