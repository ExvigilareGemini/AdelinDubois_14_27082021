import React from "react";
import {
  inputNames,
  inputDepartmentDatas,
  inputAddressDatas,
} from "../../data/inputDatas";
import InputCreator from "./form/InputCreator";
import "react-datepicker/dist/react-datepicker.css";

// TODO : DatePicker in InputCreator & data export const

export default function Form() {
  return (
    <form className="EmployeeCreatorForm">
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
      <fieldset className="address">
        <legend>Addres</legend>
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
