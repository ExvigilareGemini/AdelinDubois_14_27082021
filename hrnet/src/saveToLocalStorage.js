export const saveToLocalStorage = (state) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = [
    { cellValue: state.firstname, category: "firstName" },
    { cellValue: state.lastname, category: "lastName" },
    { cellValue: state.dateoOfBirth, category: "startDate" },
    { cellValue: state.startDate, category: "department" },
    { cellValue: state.department, category: "dateOfBirth" },
    { cellValue: state.street, category: "street" },
    { cellValue: state.city, category: "city" },
    { cellValue: state.state, category: "state" },
    { cellValue: state.zipCode, category: "zipCode" },
  ];
  employees.push(employee);
  localStorage.setItem("employees", JSON.stringify(employees));
};
