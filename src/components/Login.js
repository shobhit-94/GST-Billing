import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import { useState } from "react";
import { Login } from "../api.js";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`formdata before submiting = `, formdata);
    await Login(formdata)
      .then((res) => {
        console.log("res.data = ", res.data);
        console.log("res.token = ", res.data.token);
        localStorage.setItem("auth_token", res.data.token);
        navigate("/customers");
      })
      .catch((error) => {
        console.log("Error in  while loging you in ", error);
      });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h6">Login</Typography>
      <Typography variant="h6" gutterBottom></Typography>
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
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
};
export default Loginform;
