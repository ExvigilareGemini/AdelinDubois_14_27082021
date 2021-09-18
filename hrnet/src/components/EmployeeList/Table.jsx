import React from "react";
import Row from "./Table/Row";

export default function Table() {
  return (
    <table className="table">
      <thead>
        <tr className="row">
          <th className="cell">First Name</th>
          <th className="cell">Last Name</th>
          <th className="cell">Start Date</th>
          <th className="cell">Department</th>
          <th className="cell">Date of birth</th>
          <th className="cell">Street</th>
          <th className="cell">City</th>
          <th className="cell">State</th>
          <th className="cell">Zip Code</th>
        </tr>
      </thead>
      <tbody>
        <Row />
      </tbody>
    </table>
  );
}
