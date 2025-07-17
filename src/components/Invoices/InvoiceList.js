import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { getInvoices } from "../../api.js";

function InvoiceList(){
    const[invoices,setInvoices]=useState([])

    useEffect(()=>{
        getInvoices()
        .then((response)=>setInvoices(response.data))
        .catch((error)=>console.error("error in InvoiceList Form = ",error))
    },[]);

return(
<div>
    <Button variant="contained" color="primary" href="/invoices/new">
    Create Invoice
    </Button>

    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Invoice Number</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Total</TableCell>
                {/* <TableCell>Action</TableCell> */}
            </TableRow>
        </TableHead>

        <TableBody>
            {invoices.map((invoice)=>(

                <TableRow key={invoice.id}>
                    <TableCell>{invoice.invoice_number}</TableCell>
                    <TableCell>{invoice.customer.name}</TableCell>
                    <TableCell>{invoice.invoice_date}</TableCell>
                    <TableCell>{invoice.total_amount}</TableCell>
                {/* ye sari values backend invoices_table migrations se aari hai display me */}
                </TableRow>
            ))}
        </TableBody>
    </Table>
</div>

)
}
export default InvoiceList;