import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

export default function Main() {
  return (
    <main className="EmployeeCreatorMain">
      <Link to="/employeeList">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />
      <button>Save</button>
    </main>
  );
}
