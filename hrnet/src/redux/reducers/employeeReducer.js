import { GET_FORM_DATA, HANDLE_SAVE_BUTTON } from "../constants/constants";

const initialState = {
  modalIsOpen: false,
  firstname: "",
  lastname: "",
  dateoOfBirth: "",
  startDate: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",
};

export const employee = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM_DATA:
      switch (action.category) {
        case "first-name":
          return { ...state, firstname: action.data };
        case "last-name":
          return { ...state, lastname: action.data };
        case "date-of-birth":
          return { ...state, dateoOfBirth: action.data };
        case "start-date":
          return { ...state, startDate: action.data };
        case "street":
          return { ...state, street: action.data };
        case "city":
          return { ...state, city: action.data };
        case "state":
          return { ...state, state: action.data };
        case "zip-code":
          return { ...state, zipCode: action.data };
        case "department":
          return { ...state, department: action.data };
        default:
          return { ...state };
      }
    case HANDLE_SAVE_BUTTON:
      return {
        ...state,
        modalIsOpen: !action.modalIsOpen,
      };
    default:
      return state;
  }
};

export default employee;
