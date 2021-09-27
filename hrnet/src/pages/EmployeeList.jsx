import React from "react";
import { Link } from "react-router-dom";
import {Table} from "react-redux-table";

export default function EmployeeList() {
  return (
    <div className="EmployeeListContainer">
      <h1>Current Employees</h1>
      {/* <Table
        headersArray={[]}
        rowsContent={[]}
        title="Current Employees"
        filter={true}
        entriesSelector={[]}
        showEntries={true}
      /> */}
      <Link to="/">Home</Link>
    </div>
  );
}
