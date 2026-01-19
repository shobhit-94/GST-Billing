import React, { useEffect, useRef, useState } from "react";
import InvoiceSlip from "./InvoiceSlip.js";
import { getallInvoices } from "../../api.js";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { Button } from "@mui/material";

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
  const [printCount, setPrintCount] = useState(null);
  const pdfref = useRef();
  const [exporting, setExporting] = useState(false);

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
  }, [id]);
  const handleExportToPdf = () => {
    // setExporting(true);
    const total = invoiceData.Invoices.length;
    // const count = prompt(
    //   `Customer has ${total} invoices. How many you want to export in pdf?`
    // );
    // const parsed = parseInt(count);
    console.log("total = ", total);

    setTimeout(() => {
      const element = pdfref.current;
      const options = {
        margin: 0.3,
        filename: "invoice.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        // jsPDF: { unit: "in" },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };
      html2pdf().set(options).from(element).save();
    }, 100); //wait for DOM update
  };

  if (invoiceData.loading) return <div>Loading...</div>;
  if (invoiceData.error) return <div>{invoiceData.error}</div>;
  if (!invoiceData.customer || invoiceData.Invoices.length === 0)
    return <div>No invoices available</div>;

  //   for(let i=0;i<invoiceData.invoices.length ;i++){
  //   return <InvoiceSlip invoiceData={invoiceData} />;
  //   }
  return (
    <div>
      <Button
        onClick={handleExportToPdf}
        // sx={{ margin: "20px", padding: "10px 20px" }}
        variant="contained"
        size="small"
      >
        Export
      </Button>

      <div ref={pdfref} style={{ marginTop: "5vh" }}>
        {invoiceData.Invoices.slice(
          0,
          printCount || invoiceData.Invoices.length
        ).map((eachinvoice, i) => (
          <div key={eachinvoice.id} style={{ pageBreakAfter: "always" }}>
            {/* <InvoiceSlip invoiceData={invoiceData} index={i} /> */}
            {/* console.log("hello") */}
            <InvoiceSlip
              key={eachinvoice.id}
              invoiceData={invoiceData}
              index={i}
            />
          </div>
        ))}
      </div>
      {/* {invoiceData.Invoices.map((invoice, i) => (
        <InvoiceSlip key={invoice.id} invoiceData={invoiceData} index={i} />
      ))} */}
    </div>
  );
}

export default InvoiceGenrator;
