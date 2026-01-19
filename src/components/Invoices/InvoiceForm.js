import React, { useEffect, useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createInvoice, getCustomers, getProducts } from "../../api.js";
import { useNavigate } from "react-router-dom";

function InvoiceForm() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    customer_id: "",
    invoice_date: "",
    items: [{ product_id: "", quantity: "" }],
  });

  const navigate = useNavigate();
  useEffect(() => {
    console.log("products = ", products);
  }, [products]);
  useEffect(() => {
    getCustomers()
      .then((response) => setCustomers(response.data))
      .catch((error) => {
        // throw new Error("error in getCustomers InvoiceForm.js = ", error);
        console.log("error in getCustomers InvoiceForm.js = ", error);
      });
    getProducts()
      .then((response) => {
        console.log(response)
        setProducts(response.data.data);
      })
      .catch((error) => {
        // throw new Error("error in getPRoducts InvoiceForm.js = ", error);
        console.log("error in getProducts InvoiceForm.js = ", error);
      });
  }, []);

  //1.)This function update an items to the existing field by it's index
  //2.)can also add a newItems in the list
  const handleChange = (e, index) => {
    // if (index !== undefined) {
    if (e.target.name === "product_id" || e.target.name === "quantity") {
      //if we are updating an items in the list
      const newItems = [...formData.items]; //copt the items list
      newItems[index][e.target.name] = e.target.value; //update the correct field
      //in the right item
      setFormData({
        ...formData, //Keep the rest of the formData same
        items: newItems, //update items list with newitems list
      });
    } else {
      console.log(e.target.value);
      //If we are adding  a new field in the end of the list
      setFormData({
        ...formData, //Keep the rest of the list same
        [e.target.name]: e.target.value,
      }); //add the value in the fild
    }
    // seeformdata()
  };

  //the addItems() will add a newitem with product_id and quantity to the end
  //in the existing items list
  const addItem = () => {
    const updatedItems = [...formData.items, { product_id: "", quantity: "" }]; //create an empty
    //item in the end and copying all previous  Items also

    setFormData({
      ...formData, //keep all the formdat same

      items: updatedItems,
    }); //replace the items list with new updated list with empty
    //new updated items which contain empty item in the end and also all the previous items
  };

  //THis function removeitems from alist of items if there's are
  //more than on item in a list
  const removeItem = (index) => {
    if (formData.items.length > 1) {
      //make a new list without that item
      const updatedItems = formData.items.filter((items, i) => i !== index);
      //not need to explict return

      //now update the formData with new list
      setFormData({
        ...formData, //keep the rest of the formData same

        items: updatedItems,
      }); //Replace the items with newitems list
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      customer_id: formData.customer_id,
      invoice_date: formData.invoice_date,
      products: formData.items.map((item) => item.product_id),
      quantities: formData.items.map((item) => item.quantity),
    };
    console.log("hello here", payload);
    console.log(payload.products);
    payload.products.map((product) => console.log(product));
    createInvoice(payload)
      .then(() => navigate("/invoices"))
      .catch((error) => {
        // throw new Error("error in CustomerForm.js = ", error);
        console.log("error in CustomerForm.js = ", error);
      });
  };
  const seeformdata = () => {
    console.log("formData = ", formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h6" fontSize="24px">
        Create invoice
      </Typography>

      <Typography variant="h5" gutterBottom></Typography>
      <TextField
        fullWidth
        select
        label="Customer"
        name="customer_id"
        value={formData.customer_id}
        onChange={handleChange}
        required
        margin="normal"
      >
        {customers.map((customer) => (
          <MenuItem key={customer.id} value={customer.id}>
            {customer.name}
            {/* CUstomer name to bocx me dikhega lekin usi value customer.id hogi  */}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        label=""
        name="invoice_date"
        type="date"
        value={formData.invoice_date}
        onChange={handleChange}
        required
        margin="normal"
      ></TextField>

      {formData.items.map((item, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            select
            label="product"
            name="product_id"
            value={item.product_id}
            onChange={(e) => handleChange(e, index)}
            required
            sx={{ flex: 1 }}
          >
            {/* Ensures that products is always an array:
                The main problem with using products.length !== 0 alone is that it assumes products is always an array. If products is ever set to something that isn't an array (like undefined, null, or an object), checking products.length !== 0 will break because those types do not have a .length property.
                For example:
                let products = null;
                console.log(products.length); // Throws an error: Cannot read property 'length' of null
                If you use Array.isArray(products), you're explicitly checking if products is an array. This ensures you can safely call .length and .map() without running into type errors.*/}
            {Array.isArray(products) && products.length !== 0 ? (
              products.map((product) => (
                <MenuItem key={product.id} value={product.id}>
                  {product.name}(Rs{product.price})
                </MenuItem>
              ))
            ) : (
              <MenuItem>No products </MenuItem>
            )}
          </TextField>
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            value={item.quantity}
            onChange={(e) => handleChange(e, index)}
            required
            sx={{ flex: 1 }}
          ></TextField>
          <IconButton
            onClick={() => removeItem(index)}
            disabled={formData.items.length === 1}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        variant="contained"
        color="secondary"
        onClick={addItem}
        sx={{ mr: 2 }}
      >
        Add Item
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Create Invoice
      </Button>
    </Box>
  );
}
export default InvoiceForm;
