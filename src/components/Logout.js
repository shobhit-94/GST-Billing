import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout_dealer } from "../api";
const Logout = () => {
  const navigate = useNavigate();
  const [button, setButton] = useState(false);

  const handleYes = async (e) => {
    e.preventDefault();
    console.log("inside if true");
    
    await logout_dealer()
      .then(() => {
        console.log("Successfully logged out");
        localStorage.removeItem("auth_token");
        navigate("/login-dealer");
      })
      .catch((err) => {
        console.log("error in logging you out", err);
      });
  };
  const handleNo = async (e) => {
    e.preventDefault();
    console.log("Cancelled logout");
    navigate("/customers");
  };
  return (
    <Box component="form">
      <Typography variant="h6">Are you sure, you  want Logout</Typography>
      <Typography variant="h6" gutterBottom></Typography>
      <Button variant="contained" onClick={handleYes}>
        Yes
      </Button>
      <Button variant="contained" type="submit" onClick={handleNo}>
        No
      </Button>
    </Box>
  );
};
export default Logout;
