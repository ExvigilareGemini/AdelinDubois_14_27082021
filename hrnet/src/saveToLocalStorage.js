export const saveToLocalStorage = (state) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = {
    firstname: state.firstname,
    lastname: state.lastname,
    dateoOfBirth: state.dateoOfBirth,
    startDate: state.startDate,
    department: state.department,
    street: state.street,
    city: state.city,
    state: state.state,
    zipCode: state.zipCode,
  };
  employees.push(employee);
  localStorage.setItem("employees", JSON.stringify(employees));
};
