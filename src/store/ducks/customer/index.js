import { CustomerTypes } from "./types";
import initialState from "../initialState";

const INITIAL_STATE = initialState.customerList;

const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerTypes.ADD:
      return [...state, action.payload];
    case CustomerTypes.DELETE:
      const newCustomerDel = state.filter(({ id }) => id !== action.payload);
      return [...newCustomerDel];
    case CustomerTypes.EDIT:
      const newCustomerEdit = state.filter(({ id }) => id !== action.payload.id);
      return [...newCustomerEdit, action.payload];
    default:
      return state;
  }
};

export default customerReducer;
