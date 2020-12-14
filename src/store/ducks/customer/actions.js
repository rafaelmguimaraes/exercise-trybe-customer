import { CustomerTypes } from "./types";

export const addCustomer = (customer) => ({
  type: CustomerTypes.ADD,
  payload: customer
});

export const editCustomer = (customer) => ({
  type: CustomerTypes.EDIT,
  payload: customer
});

export const deleteCustomer = (id) => ({
  type: CustomerTypes.DELETE,
  payload: id
});
