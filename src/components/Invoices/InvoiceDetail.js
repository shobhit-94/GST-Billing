import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
  Box
} from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { getInvoice } from "../../api";
import { useParams } from "react-router-dom";

//ye form ek invooice dekhne ke liye hai  user id dega jiski dekhni hai

function InvoiceDetail() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    getInvoice(id)
      .then((res) => setInvoice(res.data))
      .catch((error) => {
        throw new Error(
          "Error in getting getInvoive(id) in InvoiceDetail.js",
          error
        );
      });
  }, [id]); //jaise hi user new id dalega vaise hi ye call ho jaega

  if (!invoice) return 
  <Typography>Loading...</Typography>;
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Invoice #{invoice.invoice_number}
      </Typography>

      <Typography>
        <strong>Customer:</strong>
        {invoice.name}
      </Typography>

      <Typography>
        <strong>Date:</strong>
        {invoice.invoice_date}
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Items
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Product</strong></TableCell>
            <TableCell><strong>quantity</strong></TableCell>
            <TableCell><strong>Unit Price</strong></TableCell>
            <TableCell><strong>GST</strong></TableCell>
            <TableCell><strong>Total</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {invoice.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.product.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
             <TableCell > <Box sx={{ display: "flex",alignItems:'center'}}> <CurrencyRupeeIcon sx={{ width:15 }} /> {item.unit_price}</Box></TableCell>
             <TableCell > <Box sx={{ display: "flex",alignItems:'center'}}> <CurrencyRupeeIcon sx={{ width:15 }} /> {item.gst_amount}</Box></TableCell>
             <TableCell > <Box sx={{ display: "flex",alignItems:'center'}}> <CurrencyRupeeIcon sx={{ width:15 }} /> {item.total}</Box></TableCell>
            {/* <TableCell > <CurrencyRupeeIcon sx={{ width:15 }} /> {item.unit_price}</TableCell> */}
              {/* <TableCell > <CurrencyRupeeIcon sx={{ width:15 }} /> {item.gst_amount}</TableCell> */}
              {/* <TableCell ><CurrencyRupeeIcon  sx={{ width:15 }} />  {item.total}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
     <Box sx={{ mt:2 }}>

         <Typography> <Box sx={{ display: "flex",alignItems:'center'}} ><strong>CGST :</strong>
       <CurrencyRupeeIcon sx={{ width:18 }} />{invoice.cgst}</Box></Typography>

      <Typography><Box  sx={{ display: "flex",alignItems:'center'}} ><strong>SGST :</strong>
       <CurrencyRupeeIcon sx={{ width:18 }} />{invoice.sgst}</Box></Typography>
      
      <Typography><Box sx={{ display: "flex",alignItems:'center'}}><strong>IGST :</strong>
        <CurrencyRupeeIcon sx={{ width:18 }} /> {invoice.igst}</Box></Typography>
     
      <Typography><Box sx={{ display: "flex",alignItems:'center'}}><strong>Total Amount :</strong>
         <CurrencyRupeeIcon sx={{ width:18 }} />{invoice.total_amount}</Box></Typography>
   

     </Box>
          <Button variant="contained" color="secondary" href="/invoices" sx={{ mt:2 }}>
        Back
     </Button>
    </div>
  );
}
export default InvoiceDetail;
