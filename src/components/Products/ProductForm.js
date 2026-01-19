import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";
import { createProduct } from "../../api.js";
import { useNavigate } from "react-router-dom";
function ProductForm() {
  const [formdata, setFormData] = useState({
    name: "",
    price: "",
    gst_rate: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(formdata)
      .then(() => {
        navigate("/products");
      })
      .catch((error) => {
        console.error("error in productsForm.js = ", error);
      });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h6" fontSize="24px" >Add Products</Typography>
      <Typography variant="h6" gutterBottom></Typography>
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
        label="Price"
        name="price"
        value={formdata.price}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        select
        label="GST Rate"
        name="gst_rate"
        value={formdata.gst_rate}
        onChange={handleChange}
        required
        margin="normal"
      >
        {[5, 12, 18, 28].map((rate) => (
          <MenuItem key={rate} value={rate}>
            {rate}%
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
}

export default ProductForm;
