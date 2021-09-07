import React from "react";

export default function Row() {
  const employees = JSON.parse(localStorage.getItem("employees"));
  return employees.map((el, index) => {
    console.log(el)
    return (
      <tr className="row" key={index}>
        <td className="cell" key={index + el.firstname + Math.random()}>{el.firstname}</td>
        <td className="cell" key={index + el.lastname + Math.random()}>{el.lastname}</td>
        <td className="cell" key={index + el.dateoOfBirth + Math.random()}>{el.dateoOfBirth}</td>
        <td className="cell" key={index + el.startDate + Math.random()}>{el.startDate}</td>
        <td className="cell" key={index + el.department + Math.random()}>{el.department}</td>
        <td className="cell" key={index + el.street + Math.random()}>{el.street}</td>
        <td className="cell" key={index + el.city + Math.random()}>{el.city}</td>
        <td className="cell" key={index + el.state + Math.random()}>{el.state}</td>
        <td className="cell" key={index + el.zipCode + Math.random()}>{el.zipCode}</td>
      </tr>
    );
  });
}
