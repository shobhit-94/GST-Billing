import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TableContainer,
  Box
} from "@mui/material";
import { getInvoices } from "../../api.js";

function InvoiceList(){
    const[invoices,setInvoices]=useState([])

    useEffect(()=>{
        getInvoices()
        .then((response)=>
            {  console.log(response.data)
                setInvoices(response.data)
             
            })
        .catch((error)=>console.error("error in InvoiceList Form = ",error))
    },[]);

return(
<div>
    <Button variant="contained" color="primary" href="/invoices/new">
    Create Invoice
    </Button>
    <Button variant="contained" color="primary" href="/seach-Allinvoices-of-customers" sx={{ ml:'2vw' }}>
seach-invoices     </Button>

    <TableContainer sx={{ maxHeight:'50vw' }}>
        <Table>
        <TableHead >
            {/* react me spacing  tablehead ko th  se karo 
             direct Padding/margin-Top/Bottomm keroge to igone ho zaega
            */}
            <TableRow sx={{ "& th": {paddingTop:'40px',paddingBottom:'40px'} }}>
                <TableCell sx={{ fontSize:'20px' ,fontWeight:'bold'}}>Invoice Number</TableCell>
                <TableCell sx={{ fontSize:'20px',color:"black", fontWeight:'bold' }}>Customer</TableCell>
                <TableCell sx={{ fontSize:'20px',color:"black", fontWeight:'bold'}}>Date</TableCell>
                <TableCell sx={{ fontSize:'20px',color:"black", fontWeight:'bold'}}>Total</TableCell>
                {/* <TableCell>Action</TableCell> */}
            </TableRow>
        </TableHead>

        <TableBody >
             {/* react me spacing  tableBody ko th  se karo 
             direct Padding/margin-Top/Bottomm keroge to igone ho zaega
            */}
            {invoices.map((invoice)=>(
                  <TableRow sx={{ "& td": {paddingTop: "32px",paddingBottom: "32px"}}}
                   key={invoice.id} >
                    <TableCell>{invoice.invoice_number}</TableCell>
                    <TableCell>{invoice.customer.name}</TableCell>
                    <TableCell>{invoice.invoice_date}</TableCell>
                    <TableCell>{invoice.total_amount}</TableCell>
                {/* ye sari values backend invoices_table migrations se aari hai display me */}
   
   <Box sx={{ mt:'15px' }} >
             <Button sx={{mt:'12px', mr:'10px', fontSize:'10px'}} variant="contained" color="primary" href={`/invoices/${invoice.id}`}>
    See Invoice
    </Button>
            <Button sx={{mt:'12px', fontSize:'10px'}} variant="contained" color="primary" href={`/customers/view/${invoice.customer_id}`}>
    See Customer
    </Button>
   
   </Box>
   
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </TableContainer>
</div>

)
}
export default InvoiceList;