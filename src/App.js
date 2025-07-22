// import logo from './logo.svg';
// import './App.css';
// NOTE->SWitch is replaced qwith Routes in reactrouterdom v6
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import CustomerList from "./components/Customers/CustomerList.js";
import CustomerForm from "./components/Customers/CustomerForm.js";
import CustomerEditForm from "./components/Customers/CustomerEditForm.js";
import CustomerDeleteForm from "./components/Customers/CustomerDeleteForm.js";
// import CustomerViewForm from "./components/Customers/CustomerViewForm.js";
import ProductList from "./components/Products/ProductsList.js";
import ProductForm from "./components/Products/ProductForm.js";
import InvoiceList from "./components/Invoices/InvoiceList.js";
import InvoiceForm from "./components/Invoices/InvoiceForm.js";
import InvoiceDetail from "./components/Invoices/InvoiceDetail.js";
import InvoiceSlip from "./components/Invoices/InvoiceSlip.js"
import InvoiceGenrator from "./components/Invoices/InvoiceGenrator.js"


function App() {
  return (
    // <>
    // hello world!
    // </>
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            GST Billing
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/customers">
              Customers
            </Button>
            <Button color="inherit" component={Link} to="/products">
              Products
            </Button>
            <Button color="inherit" component={Link} to="/invoices">
              Invoices
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/customers" element={<CustomerList />}></Route>
          <Route path="/customers/new" element={<CustomerForm />}></Route>
          <Route path="/customers/edit/:id" element={<CustomerEditForm />}></Route>
          <Route path="/customers/delete/:id" element={<CustomerDeleteForm />}></Route>
          {/* <Route path="/customers/view/:id" element={<CustomerViewForm />}></Route> */}

          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/new" element={<ProductForm />}></Route>
          <Route path="/invoices" element={<InvoiceList />}></Route>
          <Route path="/InvoiceSlip" element={<InvoiceSlip />}></Route>
          <Route path="customers/:id/invoices" element={<InvoiceGenrator />}></Route>
          <Route path="/invoices/new" element={<InvoiceForm />}></Route>
          <Route path="/invoices/:id" element={<InvoiceDetail />}></Route>
          {/* <Route  path="/" render={()=><Typography variant="h4">Welcome to GST Billing</Typography>} element={<InvoiceDetail/>}></Route> */}
          <Route
            path="/"
            element={
              <>
                <Typography variant="h4">Welcome to GST Billing App</Typography>
                {/* <InvoiceDetail /> */}
                {/* {<CustomerList/>} */}
              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
