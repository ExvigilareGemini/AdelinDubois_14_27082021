import * as types from "../constants/constants";

export const saveDatasInput = (data, category) => {
  return {
    type: types.SAVE,
    data,
    category,
  };
};
