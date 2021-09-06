export const saveToLocalStorage = (state) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstName: state.firstName,
        lastName: state.lastName,
        dateOfBirth: state.dateOfBirth,
        startDate: state.startDate,
        department: state.department,
        street: state.street,
        city: state.city,
        state: state.state,
        zipCode: state.zipCode
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

}