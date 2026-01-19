// import logo from './logo.svg';
// import './App.css';
// NOTE->SWitch is replaced qwith Routes in reactrouterdom v6
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Box,
} from "@mui/material";

import Loginform from "./components/Login.js";
import Logout from "./components/Logout.js";
import Registerartion from "./components/Registerartion.js";
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
import InvoiceSlip from "./components/Invoices/InvoiceSlip.js";
import InvoiceGenrator from "./components/Invoices/InvoiceGenrator.js";
import CustomerImport from "./components/Import_Export.js";
import Export_Customers from "./components/Export_Customers.js";
import GetAllInvoice from "./components/Invoices/All_Invoice.js";
import MenuIcon from "@mui/icons-material/Menu";
function App() {
  const [drawer, setDrawer] = useState(false);
  const drawref = useRef(null); // Ref to track the drawer box
  const iconref = useRef(null); // Ref to track the menu icon button
  const [visible, setVisible] = useState("hidden");
  useEffect(() => {
    console.log("drawer changed:", drawer);
    console.log("visible is now:", visible);
  }, [drawer, visible]);

  const handle_drawerToggle = (e) => {
    e.stopPropagation();
    if (drawer === false) {
      setDrawer(true);
      setVisible("visible");

      // drawerClick("visible");
    } else if (drawer === true) {
      setDrawer(false);
      setVisible("hidden");
    }
    /*
  or
  setDrawer(prev=>!prev);
  */
  };
  // Detect outside click to close the  drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawref.current && // make sure the drawer DOM is ready
        !drawref.current.contains(event.target) && // click is NOT inside the drawer
        iconref.current && // make sure the menu icon DOM is ready
        !iconref.current.contains(event.target) // click is NOT on the menu icon
      ) {
        //Then this means: 👉 the user clicked outside, so we close the drawer:
        setDrawer(false);
      }
    };

    if (drawer === true) {
      //If the drawer is open (drawer === true), we start listening for clicks on the document.
      //"Hey browser, when someone presses the mouse button anywhere, call the function handleClickOutside() and pass the event info to it."
      //The basic syntax is:
      // element.addEventListener(eventType, eventHandler);
      /*
      "click" – when a mouse click happens
      "mousedown" – when the mouse button is pressed down
      "keyup" – when a key is released
      "scroll" – when scrolling occurs
      */
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      //If the drawer is closed, we stop listening.
      document.removeEventListener("mousedown", handleClickOutside);
    }

    /*
    This is important!
    This function is called automatically by React when the component unmounts or before running the effect again.
    It ensures we remove the event listener so we don’t accidentally call the handler multiple times.
    */
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawer]);

  return (
    // <>
    // hello world!
    // </>

    <Router>
      <AppBar position="static">
        {/* <Button >Click here</Button> */}
        <Toolbar
          sx={{
            display: { md: "none", sx: "block", sm: "block" },
            position: "relative",
          }}
        >
          {/* <Button>  ye nhi chal ra hai tim IconButton hi lagao
            <MenuIcon />
          </Button> */}
          <IconButton
            sx={{ color: "white", ml: "-5px" }}
            onClick={handle_drawerToggle}
            ref={iconref}
          >
            <MenuIcon sx={{ backgroundColor: "re" }} />
          </IconButton>
          {drawer && (
            <Box
              ref={drawref}
              sx={{
                display: {
                  // position: "relative",
                  zIndex: 1200, // Higher than other content
                  visibility: visible,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "4vh",
                //  borderBlock:"12px solid black"
                },
                flexDirection: "column",
                // height:'60vh',
                // transform:translateX('10vh'),
                opacity: 1,
                backgroundColor: "white",
                // color:"white",
                // p: 2,
                ml: "-18px",
                mt: "100vh",
                position: "absolute",
              }}
            >
              <Typography color="primary" variant="h6" sx={{ flexGrow: 1 }}>
                GST Billing
              </Typography>
              <Button
               color="primary"
                component={Link}
                to="/"
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
              >
                Home
              </Button>
              <Button
                color="primary"
                component={Link}
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
                to="/customers"
              >
                Customers
              </Button>
              <Button
               color="primary"
                component={Link}
                to="/products"
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
              >
                Products
              </Button>
              <Button
                color="primary"
                component={Link}
                to="/invoices"
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
              >
                Invoices
              </Button>
              {/* <Typography  color="inherit" component={Link} to="/import/customers" >Import </Typography> */}
              <Button
                color="primary"
                component={Link}
                to="/import-customers"
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
              >
                Import
              </Button>

              <Button
                color="primary"
                component={Link}
                to="/export-all-customers"
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
              >
                Export
              </Button>
              <Button
                color="primary"
                component={Link}
                to="/Registerartion"
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
              >
                Register
              </Button>
              <Button
                color="primary"
                component={Link}
                to="/login-dealer"
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
              >
                loginform
              </Button>
              <Button
                color="primary"
                component={Link}
                to="/logout-dealer"
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawer(false); //TAki ek bar click kerne ke baad sidebar band ho jae
                }}
              >
                Logout
              </Button>

              {/* <Button color="inherit" component={Link} to="/export-all-customers">
              
            </Button> */}
            </Box>
          )}
        </Toolbar>
        <Toolbar sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
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
            Import 
          </Button>

          <Button color="inherit" component={Link} to="/export-all-customers">
            Export 
          </Button>
          <Button color="inherit" component={Link} to="/Registerartion">
            Register
          </Button>
          <Button color="inherit" component={Link} to="/login-dealer">
            login
          </Button>
          <Button color="inherit" component={Link} to="/logout-dealer">
            Logout
          </Button>

          {/* <Button color="inherit" component={Link} to="/export-all-customers">
              
            </Button> */}
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          {/* 👇 This is now an exact index route, not path="/" */}
          <Route
            index
            element={
              <Typography variant="h4">Welcome to GST Billing App</Typography>
            }
          />

          <Route path="/login-dealer" element={<Loginform />} />
          <Route path="/logout-dealer" element={<Logout />} />
          <Route path="/Registerartion" element={<Registerartion />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/new" element={<CustomerForm />} />
          <Route path="/customers/edit/:id" element={<CustomerEditForm />} />
          <Route path="/customers/view/:id" element={<CustomerViewForm />} />
          <Route path="/customers/:id/invoices" element={<InvoiceGenrator />} />
          <Route path="/import-customers" element={<CustomerImport />} />
          <Route path="/export-all-customers" element={<Export_Customers />} />

          <Route
            path="/customers/delete/:id"
            element={<CustomerDeleteForm />}
          />

          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/InvoiceSlip" element={<InvoiceSlip />} />
          <Route path="/invoices/new" element={<InvoiceForm />} />
          <Route path="/invoices/:id" element={<InvoiceDetail />} />
          <Route
            path="/seach-Allinvoices-of-customers"
            element={<GetAllInvoice />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
