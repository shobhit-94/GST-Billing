// Note->In javascript we use[],when want key of an object to be dynamic
//not hardcoded

import React, { useState } from "react";
import { MenuItem, TextField, Button, Box, Typography } from "@mui/material";
import { createCustomers } from "../../api.js";
import { useNavigate } from "react-router-dom";
function CustomerForm() {
  //CApital me hi hona chahhiye name
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gstin: "",
    address: "",
    customer_type: "",
  });
  const navigate = useNavigate();
  const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.customer_type !== "B2C" && !gstinRegex.test(formdata.gstin)) {
      alert("Invalid GSTIN format");
      return;
    }
    console.log("Form data before submit:", formdata); // For debugging
    createCustomers(formdata)
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => {
        console.error("Error in CustomerForm.js =", error); // ✅ Log the actual error
        // throw new Error("error in CustomerForm.js = ", error);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h6" fontSize="24px" >Add Customers</Typography>
      <Typography variant="h5" gutterBottom></Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formdata.name}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formdata.email}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formdata.phone}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="GSTIN"
        name="gstin"
        value={formdata.gstin}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="Address"
        name="address"
        value={formdata.address}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        select
        label="Customer Type"
        name="customer_type"
        value={formdata.customer_type}
        onChange={handleChange}
        required
        margin="normal"
      >
        <MenuItem value="B2B">B2B</MenuItem>
        <MenuItem value="B2C">B2C</MenuItem>
        <MenuItem value="Export">Export</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
}
export default CustomerForm;
