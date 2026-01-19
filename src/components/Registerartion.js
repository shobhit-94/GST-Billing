import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Register } from "../api.js";
import { useNavigate } from "react-router-dom";

function Registerartion() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password:"",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formdata before submiting = ", formdata);
    Register(formdata)
    .then(() => {
      navigate("/customers");
    })
    .catch((error)=>{                                                   
   console.error(`Error in registering in Delear ${error}`)
    });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth:600 }}>
      <Typography variant="h6">Register</Typography>
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
        label="Email"
        name="email"
        value={formdata.email}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>
      <TextField
        fullWidth
        label="Password"
        name="password"
        value={formdata.password}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>
      <TextField
        fullWidth
        label="confirm Password"
        name="confirm_password"
        value={formdata.confirm_password}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>
      <Button type="submit" variant="contained" color="primary" sx={{ mt:2 }}>Register</Button>
    </Box>
  );
}
export default Registerartion;
