import axios from "axios";
const API_URL = "http://localhost:8000/api/v1";
// const API_URL = "[http://127.0.0.1:8000/api/v1";

const Register = (data) => {
  return axios.post(`${API_URL}/register-dealer`, data);
};
const Login = (data) => {
  return axios.post(`${API_URL}/login-dealer`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
/*
Axios Request Structure:

axios.post(url, data, config)
Second parameter is for request data (body)
Third parameter is for configuration including headers
*/
const logout_dealer = () => {
  return axios.post(`${API_URL}/logout-dealer` ,{},{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const getCustomers = () => {
  return axios.get(`${API_URL}/customers`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const getCustomerdetail = async (id) => {
  return axios.get(`${API_URL}/customers/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const UpdateCustomerdetail = (data, id) => {
  return axios.put(`${API_URL}/customers/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const deletecustomer = (id) => {
  return axios.delete(`${API_URL}/customers/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const createCustomers = (data) => {
  return axios.post(`${API_URL}/customers`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};

const getProducts = () => {
  return axios.get(`${API_URL}/products`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const createProduct = (data) => {
  return axios.post(`${API_URL}/products`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const getInvoices = () => {
  return axios.get(`${API_URL}/invoices`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const getallInvoices = (id) => {
  return axios.get(`${API_URL}/customers/${id}/invoices`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const createInvoice = (data) => {
  return axios.post(`${API_URL}/invoices`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};

const getInvoice = (id) => {
  return axios.get(`${API_URL}/invoices/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const importcustomer = (formdata) => {
  return axios.post(`${API_URL}/import/customers`, formdata, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const exportcustomerexcel = () => {
  return axios.get(`${API_URL}/export/customers-excel`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};
const exportcustomerpdf = () => {
  return axios.get(`${API_URL}/export/customers-pdf`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  });
};

/*

1. RESTful API Convention

In RESTful design:
The plural form (/invoices) is used for collections of resources
The singular form (/invoice) is typically not used for resource endpoints

*/

export {
  Register,
  Login,
  logout_dealer,
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
  getallInvoices,
  importcustomer,
  exportcustomerexcel,
  exportcustomerpdf,
};
