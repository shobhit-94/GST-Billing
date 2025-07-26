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
import CustomerViewForm from "./components/Customers/CustomerViewForm.js";
import ProductList from "./components/Products/ProductsList.js";
import ProductForm from "./components/Products/ProductForm.js";
import InvoiceList from "./components/Invoices/InvoiceList.js";
import InvoiceForm from "./components/Invoices/InvoiceForm.js";
import InvoiceDetail from "./components/Invoices/InvoiceDetail.js";
import InvoiceSlip from "./components/Invoices/InvoiceSlip.js"
import InvoiceGenrator from "./components/Invoices/InvoiceGenrator.js"
import CustomerImport from "./components/Import_Export.js"
import Export_Customers from "./components/Export_Customers.js"
import GetAllInvoice from "./components/Invoices/All_Invoice.js"


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
             </Typography>
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
            {/* <Typography  color="inherit" component={Link} to="/import/customers" >Import </Typography> */}
             <Button color="inherit" component={Link} to="/import-customers">
              Import custome Customers
            </Button>
         
             <Button color="inherit" component={Link} to="/export-all-customers">
              Export All  Customers
            </Button>
         
             {/* <Button color="inherit" component={Link} to="/export-all-customers">
              
            </Button> */}
         
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
      <Routes>
          {/* 👇 This is now an exact index route, not path="/" */}
          <Route index element={<Typography variant="h4">Welcome to GST Billing App</Typography>} />

          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/new" element={<CustomerForm />} />
          <Route path="/customers/edit/:id" element={<CustomerEditForm />} />
          <Route path="/customers/view/:id" element={<CustomerEditForm />} />
          <Route path="/customers/delete/:id" element={<CustomerDeleteForm />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/InvoiceSlip" element={<InvoiceSlip />} />
          <Route path="/customers/:id/invoices" element={<InvoiceGenrator />} />
          <Route path="/invoices/new" element={<InvoiceForm />} />
          <Route path="/invoices/:id" element={<InvoiceDetail />} />
          <Route path="/import-customers" element={<CustomerImport />} />
          <Route path="/export-all-customers" element={<Export_Customers />} />
          <Route path="/seach-Allinvoices-of-customers" element={<GetAllInvoice/>}/>
        </Routes>
       
      </Container>
    </Router>
  );
}

export default App;
