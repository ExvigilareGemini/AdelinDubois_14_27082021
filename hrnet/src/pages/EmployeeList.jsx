import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/EmployeeList/Table";

export default function EmployeeList() {
  return (
    <div className="EmployeeListContainer">
      <h1>Current Employees</h1>
      <Table />
      <Link to="/">Home</Link>
    </div>
  );
}
