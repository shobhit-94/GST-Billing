import axios from "axios";
const API_URL = "http://localhost:8000/api/v1";
// const API_URL = "[http://127.0.0.1:8000/api/v1";

const getCustomers = () => {
  return axios.get(`${API_URL}/customers`);
};
const getCustomerdetail = (id) => {
  return axios.get(`${API_URL}/customers/${id}`);
};
const UpdateCustomerdetail = (data, id) => {
  return axios.put(`${API_URL}/customers/${id}`, data);
};
const deletecustomer = (id) => {
  return axios.delete(`${API_URL}/customers/${id}`);
};
const createCustomers = (data) => {
  return axios.post(`${API_URL}/customers`, data);
};

const getProducts = () => {
  return axios.get(`${API_URL}/products`);
};
const createProduct = (data) => {
  return axios.post(`${API_URL}/products`, data);
};
const getInvoices =  () => {
  return axios.get(`${API_URL}/invoices`);
};
const getallInvoices = (id) => {
  return axios.get(`${API_URL}/customers/${id}/invoices`);
};
const createInvoice = (data) => {
  return axios.post(`${API_URL}/invoices`, data);
};

const getInvoice = (id) => {
  return axios.get(`${API_URL}/invoices/${id}`);
};

/*

1. RESTful API Convention

In RESTful design:
The plural form (/invoices) is used for collections of resources
The singular form (/invoice) is typically not used for resource endpoints

*/

export {
  getCustomers,
  getCustomerdetail,
  createCustomers,
  deletecustomer,
  UpdateCustomerdetail,
  getProducts,
  createProduct,
  getInvoices,
  createInvoice,
  getInvoice,
  getallInvoices
};
