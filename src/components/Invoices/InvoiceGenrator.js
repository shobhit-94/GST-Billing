import React, { useEffect, useState } from "react";
import InvoiceSlip from "./InvoiceSlip.js";
import {getallInvoices} from "../../api.js";
import { useParams } from "react-router-dom";

// const invoiceData = {
//   id: 1,
//   customer_id: 2,
//   invoice_number: "INV-1752738250",
//   invoice_date: "2025-06-24",
//   total_amount: "1120.00",
//   cgst: "60.00",
//   sgst: "60.00",
//   igst: "0.00",
// };


function InvoiceGenrator() {



const [invoiceData, setInvoiceData] = useState({
  customer: {
    id: "",
    name: "",
    email: "",
    phone: "",
    gstin: "",
    address: "",
    customer_type: "",
    created_at: "",
    updated_at: "",
  },
//   customer:null,
  Invoices: [],
  invoiceItemsWithProducts: [],
  loading: true,
  error: null,
});

  const { id } = useParams();
  useEffect(() => {
    setInvoiceData((prev) => ({ ...prev, loading: true, error: null }));

    getallInvoices(id)
      .then((response) => {
        // console.log("Fetched response:", response);
        //  console.log("Fetched customer:", response.data.data.customer);
        // console.log("Fetched Invoices:", response.data.data.Invoices);
        // console.log("Fetched total_invoices:", response.data.data.total_invoices);
        // console.log("Fetched invoiceItemsWithProducts:", response.data.data.invoiceItemsWithProducts);
       

        setInvoiceData({
        //   customer: response.data.customer?.[0]||null,
          customer: response.data.data.customer,
          Invoices: response.data.data.Invoices,
          invoiceItemsWithProducts: response.data.data.invoiceItemsWithProducts,
        //   invoices: response.data.invoices||[],
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error("Error in fetching customers and invoices...", error);
        setInvoiceData((prev) => ({
          ...prev,
          loading: false,
          error: "Failef in fetching customers and invoices...",
        }));
      });
  },[id]);

  if (invoiceData.loading) return <div>Loading...</div>;
  if (invoiceData.error) return <div>{invoiceData.error}</div>;
  if (!invoiceData.customer || invoiceData.Invoices.length === 0)
    return <div>No invoices available</div>;
  
//   for(let i=0;i<invoiceData.invoices.length ;i++){ 
//   return <InvoiceSlip invoiceData={invoiceData} />;
//   }
   return invoiceData.Invoices.map((invoice,i)=>(
    <InvoiceSlip key={invoice.id} invoiceData={invoiceData} index={i} /> 
  ))
 
}

export default InvoiceGenrator;
