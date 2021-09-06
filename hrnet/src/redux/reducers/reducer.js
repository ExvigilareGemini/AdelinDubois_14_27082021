import { TOGGLE_MODAL, SAVE } from "../constants/constants";

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

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return action.category === "first-name"
        ? { ...state, firstname: action.data }
        : action.category === "last-name"
        ? { ...state, lastname: action.data }
        : action.category === "date-of-birth"
        ? { ...state, dateoOfBirth: action.data }
        : action.category === "start-date"
        ? { ...state, startDate: action.data }
        : action.category === "street"
        ? { ...state, street: action.data }
        : action.category === "city"
        ? { ...state, city: action.data }
        : action.category === "state"
        ? { ...state, state: action.data }
        : action.category === "zip-code"
        ? { ...state, zipCode: action.data }
        : { ...state, department: action.data };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !action.modalIsOpen,
      };
    default:
      return state;
  }
};

export default reducers;
