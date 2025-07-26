import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { deletecustomer, getCustomerdetail } from "../../api.js";
import { useNavigate, useParams } from "react-router-dom";

function CustomerViewForm() {
  //CApital me hi hona chahhiye name

  const navigate = useNavigate();
  const { id } = useParams(); // get ID from URL

  // const cutmerdetail = () => {
  // const[customer,setCustomer]=useState([])
  const [formdata, setFormData] = useState([]);

  useEffect(() => {
    getCustomerdetail(id)
      .then((response) => {
        console.log("Fetched customer:", response.data);
        setFormData(response.data);
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
   /* deletecustomer(id) //api.js me se aahay hai ye function
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => {
        console.log("Error in = ", error);
      });*/
    navigate("/customers");
  };
  //   const descision = (e) => {
  //     e.preventDefault();    

  //     const isConfirmed = window.confirm(
  //       "Are you sure you want to delete this customer?"
  //     );

  //     if (isConfirmed) {
  //       handleSubmit(e);
  //       console.log("helo")
  //     } else {
  //          console.log("byehelo")
  //       // optional: navigate back or just do nothing
  //       console.log("Deletion cancelled by user.");
  //       navigate(`/customers`);
  //     //   href={`/customers/delete/${customer.id}}`}
  //     }
  //   };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom></Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formdata.name || ""}
        variant="outlined"
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formdata.email || ""}
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formdata.phone || ""}
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="GSTIN"
        name="gstin"
        value={formdata.gstin || ""}
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="ADDRESS"
        name="address"
        value={formdata.address || ""}
        margin="normal"
      ></TextField>
      <Button
        type="submit"
        // onClick={descision}
        variant="contained"
        color="inherit"
        sx={{ mt: 2 }}
      >
        Go Back
      </Button>
    </Box>
  );
}

export default CustomerViewForm;
