import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import ModalButton from "./ModalButton";

export default function Main() {
  return (
    <main className="EmployeeCreatorMain">
      <Link to="/employeeList">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />
      <ModalButton />
    </main>
  );
}
