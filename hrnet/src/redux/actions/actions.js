import * as types from "../constants/constants";

export const saveDatasInput = (data, category) => {
  return {
    type: types.SAVE,
    data,
    category,
  };
};

export const toggleModal = (modalIsOpen) => {
  return {
    type: types.TOGGLE_MODAL,
    modalIsOpen: modalIsOpen,
  };
};
