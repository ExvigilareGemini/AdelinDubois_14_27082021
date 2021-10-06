import React from "react";
import {
  inputNames,
  inputDepartmentDatas,
  inputAddressDatas,
} from "../../data/inputDatas";
import InputCreator from "./form/InputCreator";
import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
  return (
    <form className="EmployeeCreatorForm">
      <div className="personnalDatasContainer">
        {inputNames.map((el, index) => {
          return (
            <InputCreator
              key={el.name + index}
              name={el.name}
              title={el.title}
              type={el.type}
              selectContent={el.selectContent}
            />
          );
        })}
      </div>
      <fieldset className="address">
        <legend>Address</legend>
        {inputAddressDatas.map((el, index) => {
          return (
            <InputCreator
              key={el.name + index}
              name={el.name}
              title={el.title}
              type={el.type}
              selectContent={el.selectContent}
            />
          );
        })}
      </fieldset>
      {inputDepartmentDatas.map((el, index) => {
        return (
          <InputCreator
            key={el.name + index}
            name={el.name}
            title={el.title}
            type={el.type}
            selectContent={el.selectContent}
          />
        );
      })}
    </form>
  );
}
