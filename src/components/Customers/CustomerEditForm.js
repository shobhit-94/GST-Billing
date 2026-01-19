import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";
import { UpdateCustomerdetail, getCustomerdetail } from "../../api.js";
import { useNavigate, useParams } from "react-router-dom";

function EditCustomerForm() {
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
  const gstinRegex =
    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  const { id } = useParams(); // get ID from URL

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // const cutmerdetail = () => {
  // const[customer,setCustomer]=useState([])
  useEffect(() => {
    getCustomerdetail(id)
      .then((response) => {
        console.log("Fetched customer:", response.data);
        setFormData(response.data.data);
      })
      .catch((error) =>
        console.error(
          "error in fetching cutomer detail in  CustomerEditForm.js",
          error
        )
      );
  }, [id]);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.customer_type !== "B2C" && !gstinRegex.test(formdata.gstin)) {
      alert("Invalid GSTIN format");
      return;
    }
    UpdateCustomerdetail(formdata, id)
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => {
        console.log("Error in = ", error);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom></Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formdata.name || ""}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formdata.email || ""}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formdata.phone || ""}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="GSTIN"
        name="gstin"
        value={formdata.gstin || ""}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="ADDRESS"
        name="address"
        value={formdata.address || ""}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        select
        label="Customer Type"
        name="customer_type"
        value={formdata.customer_type || ""}
        onChange={handleChange}
        required
        margin="normal"
      >
        <MenuItem value="B2B">B2B</MenuItem>
        <MenuItem value="B2C">B2C</MenuItem>
        <MenuItem value="Export">Export</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Update
      </Button>
    </Box>
  );
}

export default EditCustomerForm;
