import React from "react";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Divider,
  TableContainer,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const InvoiceSlip = ({ invoiceData, index }) => {
  if (!invoiceData || !invoiceData.customer) {
    return <div>No customer no data available</div>;
  }
  console.log("invoiceData= ", invoiceData);
  // console.log("invoiceData.customer = ",invoiceData.customer)
  // console.log("invoiceData.invoices = ",invoiceData.invoices)
  const subtotal =
    parseFloat(invoiceData.total_amount) -
    parseFloat(invoiceData.cgst) -
    parseFloat(invoiceData.sgst);

  const formatDate = (dateString) => {
    const date = new Date(dateString); //convert type of date from string to object
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatday = day < 10 ? "0" + day : day;
    const formatmonth = month < 10 ? "0" + month : month;

    return formatday + "/" + formatmonth + "/" + year;
  };

  return (
    <Paper
      elevation={5}
      sx={{ p: 4, maxWidth: 900, margin: " auto", fontFamily: "Arial" }}
    >
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" fontWeight="bold" color="goldenrod">
          Invoice
        </Typography>
        <Typography
          sx={{ mb: 2 }}
          variant="body2"
          fontWeight="bold"
          color="primary"
        >
          UniformSoftware soloutions Pvt LTD
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 0,
          m: 0,
          textAlign: "left",
          gap: 0.5,
          maxWidth: 400,
        }}
      >
        <Typography variant="body2" color="primary">
          <strong> Your Business Name:</strong>
        </Typography>
        <Typography variant="body2" color="primary">
          <strong> PO Box Number:</strong>
        </Typography>
        <Typography variant="body2" color="primary">
          <strong>Address:</strong>
          {invoiceData.customer.address}
        </Typography>
        <Typography variant="body2" color="primary">
          <strong>Phone:</strong>
          {invoiceData.customer.phone}
        </Typography>
        <Typography variant="body2" color="primary">
          <strong> GST Number:</strong>
          {invoiceData.customer.gstin}
        </Typography>
      </Box>

      {/* By default Grid flex box hota hai */}
      <Grid spacing={2} mt={5} textAlign={"left"}>
        <Grid item xs={6}>
          <Typography variant="subtitle2">
            <strong>Bill To : </strong>
            {invoiceData.customer.name}
          </Typography>
          <Typography variant="body2">
            <strong> Customer ID : </strong> {invoiceData.customer.id}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2">
            <strong> Service Location : </strong>
            {invoiceData.customer.address}
          </Typography>
          <Typography variant="body2">---</Typography>
        </Grid>
      </Grid>

      {/* <Grid sx={{ backgroundColor: "" }} mt={2} spacing={2} textAlign={"right"}>
        <Grid item xs={6}>
          <Typography variant="body2">
            <strong>Invoice # : </strong>
            {invoiceData.Invoices[index].invoice_number}
          </Typography>

          <Typography variant="body2">
            <strong>Date: </strong>
            {formatDate(invoiceData.Invoices[index].created_at)}
         
          </Typography>
        </Grid>
      </Grid> */}
 
      <Divider sx={{ mb: 2 }}></Divider>
      <TableContainer sx={{ maxHeight:150 }}>{/*(TableContainer) 150 ker do to data ke hisab se vertiacl scrolling bhi lag zaegi ye maine horozontal slider lagane keliye kiya hai */}
        <Table size="small" sx={{ mb: 3 }}>
        <TableHead sx={{ backgroundColor: "#FFF8DC" }}>
          <TableRow>
            <TableCell>
              <strong>Item #</strong>
            </TableCell>
            {/* <TableCell><strong>Description</strong></TableCell> */}
            <TableCell>
              <strong>Qty</strong>
            </TableCell>
            <TableCell>
              <strong>Price</strong>
            </TableCell>
            <TableCell>
              <strong>GST</strong>
            </TableCell>
            <TableCell>
              <strong>Total</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceData.invoiceItemsWithProducts.map((Invoice, i) =>
            Invoice.invoice_id === invoiceData.Invoices[index].id ? (
              // <TableRow key={Invoice.invoice_id}> giving  duplicay see response
              <TableRow key={`${Invoice.invoice_id}-${Invoice.product_id}`}>
                {/* //make invoice_id and  product_id key combined */}
                <TableCell>{Invoice.product_name}</TableCell>
                <TableCell>{Invoice.quantity}</TableCell>
                <TableCell>{Invoice.unit_price}</TableCell>
                <TableCell>{Invoice.gst_amount}</TableCell>
                <TableCell>{Invoice.total}</TableCell>
              </TableRow>
            ) : null
          )}

          {/* <TableCell >{invoiceData.invoiceItemsWithProducts[index].product_name}</TableCell>
              <TableCell >{invoiceData.invoiceItemsWithProducts[index].quantity}</TableCell>
              <TableCell >{invoiceData.invoiceItemsWithProducts[index].unit_price}</TableCell>
              <TableCell >{invoiceData.invoiceItemsWithProducts[index].gst_amount}</TableCell>
              <TableCell >{invoiceData.invoiceItemsWithProducts[index].total}</TableCell>
              */}
        </TableBody>
      </Table>
      </TableContainer>
      <Grid sx={{ backgroundColor: "" }} mt={2} spacing={2} textAlign={"right"}>
        <Grid item xs={6}>
          <Typography variant="body2">
            <strong>Date: </strong>
            {formatDate(invoiceData.Invoices[index].created_at)}
          </Typography>

          <Typography variant="body2">
            <strong>Invoice # : </strong>
            {invoiceData.Invoices[index].invoice_number}
          </Typography>
        </Grid>
      </Grid>

      <Grid sx={{ backgroundColor: "" }} spacing={1} textAlign={"right"}>
        <Grid item xs={6}>
          <Typography variant="body2">
            <strong>cgst : </strong>
            {invoiceData.Invoices[index].cgst}
          </Typography>
          <Typography variant="body2">
            <strong>sgst : </strong>
            {invoiceData.Invoices[index].sgst}
          </Typography>
          <Typography variant="body2">
            <strong>igst : </strong>
            {invoiceData.Invoices[index].igst}
          </Typography>
          <Typography variant="body2">
            <strong>total_amount : </strong>
            {invoiceData.Invoices[index].total_amount}
          </Typography>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography variant="subtitle2">
          <strong>NOTES:</strong>
        </Typography>
        <Box border={1} borderColor="grey.300" p={2} minHeight={80}>
          <Typography variant="body2">----</Typography>
        </Box>
      </Box>

      <Box mt={4} textAlign="center">
        <Typography variant="body2" fontStyle="italic">
          THANK YOU FOR YOUR BUSINESS!{" "}
        </Typography>
      </Box>
    </Paper>
  );
};

export default InvoiceSlip;
