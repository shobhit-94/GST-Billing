import { useEffect, useState } from "react";
import { getCustomerdetail, getCustomers, getallInvoices } from "../../api";
import { href, Navigate, useNavigate, useParams } from "react-router-dom";
import { MenuItem, Box, TextField, Typography, Button } from "@mui/material";

const GetAllInvoice = () => {
  const [customers, setCustomers] = useState([]);
  const [customerdetails, setCustomerDetails] = useState({});
  const [selectedCustomerId, setSelectedCustomerId] = useState(""); // getCustomerdetail(selectedCustomerId in shortid) Id hi hai  jisse hum Invoice le aaege
  //   const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCustomerDetails = async () => {
      await getCustomers()
        .then((response) => {
          setCustomers(response.data);
          console.log("first = ", response.data);
        })
        .catch((error) => {
          console.log(
            `Something went wrong while fetching all customers  ,${error}`
          );
        });
    };
    fetchCustomerDetails();
  }, []);
  useEffect(() => {
    const fetchCutomer = async () => {
        if (!selectedCustomerId) return; // Skip if no customer selected
//This condition prevent the render of useEffect hooks when selectedCustomerId is not selected         
      // console.log("selectedCustomerId in getcustomerdetails = ",selectedCustomerId)
       console.log("selectedCustomerId  inside  fetchCutomer= ",selectedCustomerId)
      await getCustomerdetail(selectedCustomerId)
        .then((response) => {
          setCustomerDetails(response.data);
          console.log("response in getCustomerdetail ", response.data);
          setSelectedCustomerId(response.data.id);
        })
        .catch((error) => {
          console.log(
            `Something went wrong while fetching the customer details with id=${selectedCustomerId} ,${error}`
          );
        });
    };
    fetchCutomer();
  }, [selectedCustomerId]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!selectedCustomerId) return;
    console.log("selectedCustomerId in handleSubmit = ", selectedCustomerId);
    navigate(`/customers/${selectedCustomerId}/invoices`);
  };
  const handlechange = (e) => {
    console.log("e.target.value in handlechange = ", e.target.value);
    setSelectedCustomerId(e.target.value); //when user change name then handle changle will also update the id of that customer
  };
  return (
    <Box component="form" onSubmit={handlesubmit}>
      <Typography variant="h5" gutterBottom />
      <TextField
        fullWidth
        select
        label="Customer"
        name="id" //jo function submit kerne pe paramter le raha hai vo hi liki jaise yaha id le raha hai joki customerid hi hai to vo likho
        value={selectedCustomerId||''}//(removes most of the errors) Ensures never undefined(har form me use kero)
        onChange={handlechange}
        required

        margin="normal"
      >
        {customers.map((customer) => (
          <MenuItem key={customer.id} value={customer.id}>
            {customer.name}
          </MenuItem>
        ))}
      </TextField>

      <Button type="submit" variant="contained">
        Find
      </Button>
    </Box>
  );
};
//Important
/*
  
            Key Differences: name vs value
            Attribute	Purpose	Example
            value	Current state of the field	selectedCustomerId (state variable)
            name	Identifier for the field	customerId (semantic API/key name)

            When to Use Dot Notation (like customer.id)
            Only use nested names if:
            Your state is nested:
            jsx
            const [formData, setFormData] = useState({
            customer: { id: "", name: "" }
            });
            You're using a library that expects it (like Formik)

            For your flat state structure (selectedCustomerId), a simple name is better.

            Best Practices
            Keep name and state variables aligned:

            jsx
            const [customerId, setCustomerId] = useState(""); // State
            <TextField name="customerId" /> // Name matches state
            
  */

export default GetAllInvoice;
