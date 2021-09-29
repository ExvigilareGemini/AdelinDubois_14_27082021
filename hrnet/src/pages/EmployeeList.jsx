import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-redux-table";
import { headersArrayDatas } from "../data/react-redux-table-datas";

export default function EmployeeList() {
  return (
    <div className="EmployeeListContainer">
      <Table
        headersArray={headersArrayDatas}
        rowsContent={JSON.parse(localStorage.getItem("employees"))}
        title="Current Employees"
        filter={true}
        entriesSelector={[10, 25, 50, 100]}
        showEntries={true}
      />
      <Link to="/">Home</Link>
    </div>
  );
}
