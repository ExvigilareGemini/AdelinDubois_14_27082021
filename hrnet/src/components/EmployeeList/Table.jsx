import React from "react";
import Row from "./Table/Row";

export default function Table() {
  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Start Date</th>
        <th>Department</th>
        <th>Date of birth</th>
        <th>Street</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
      </thead>
      <tbody>
        <Row />
      </tbody>
    </table>
  );
}
