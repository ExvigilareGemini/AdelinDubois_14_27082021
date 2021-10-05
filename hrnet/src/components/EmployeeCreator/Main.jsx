import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import SaveButton from "./SaveButton";
import ModalWindow from "./ModalWindow";

export default function Main() {
  return (
    <main className="EmployeeCreatorMain">
      <Link to="/employeeList">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />
      <SaveButton />
      <ModalWindow />
    </main>
  );
}
