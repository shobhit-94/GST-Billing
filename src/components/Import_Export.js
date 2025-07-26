import react from "react";
import { useEffect, useState } from "react";
import { Button, Snackbar, Alert, Typography } from "@mui/material";
import { importcustomer } from ".././api";
import { useNavigate } from "react-router-dom";

const CustomerImport = () => {
  const [file, setFile] = useState(null);
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success",
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    // setFile({ ...file, [e.target.name]: e.target.value });
    // Reason not to use this
    /*
    File inputs don't use value - They use files instead
    You can't spread a file object - Files are special objects
    */
    setFile(e.target.files[0]);
  };
  const handleImport = async (e) => {
    if (!file) return;

    const formdata = new FormData();
    formdata.append("file", file);
    await importcustomer(formdata)
      .then(() => {
        setSnack({
          open: true,
          message: "Import Successfull",
          severity: "success",
        });
        navigate("/customers");
      })
      .catch((error) => {
        setSnack({ open: false, message: "Import Failed", severity: "error" });
        console.error("Error in Import file fo Customer.js");
      });
  };
  return (
    <div>
        <Typography variant="h4"  >Import Customers</Typography>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={handleChange}>
       </input>
      <Button onClick={handleImport} variant="contained" color="primary">
          Import Customers
        </Button>
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ ...snack, open: false })}
      >
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
    </div>
  );
};
export default CustomerImport;
