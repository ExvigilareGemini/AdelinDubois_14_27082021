import React from "react";
import { inputAddressDatas } from "../../data/inputAddressDatas";
import { inputDepartmentDatas } from "../../data/inputDepartmentDatas";
import { inputNames } from "../../data/inputNames";
import InputCreator from "./form/InputCreator";

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
            select={el.select}
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
              select={el.select}
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
              select={el.select}
            />
          );
      })}
    </form>
  );
}
