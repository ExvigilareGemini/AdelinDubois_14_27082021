import * as types from "../constants/constants";
import { saveToLocalStorage } from "../../saveToLocalStorage";

export const getFormData = (data, category) => {
  return {
    type: types.GET_FORM_DATA,
    data,
    category,
  };
};

export const handleSaveButton = (state) => {
  if (!state.modalIsOpen) saveToLocalStorage(state);
  return {
    type: types.HANDLE_SAVE_BUTTON,
    modalIsOpen: state.modalIsOpen,
  };
};

export const toggleModal = (modalIsOpen) => {
  return {
    type: types.TOGGLE_MODAL,
    modalIsOpen,
  };
};
