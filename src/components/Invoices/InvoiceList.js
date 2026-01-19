import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TableContainer,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { getInvoices } from "../../api.js";

function InvoiceList() {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    getInvoices()
      .then((response) => {
        
        setInvoices(response.data.data);
        console.log("response",response.data);
      })
      .catch((error) => console.error("error in InvoiceList Form = ", error));
  }, []);

  return (
    <div>
      <Grid>
        <Button variant="contained" color="primary" href="/invoices/new"
      sx={{ ml: "1vw",fontSize:'10px' }}>
        Create
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="/seach-Allinvoices-of-customers"
        sx={{ ml: "2vw",fontSize:'10px' }}
      >
        search
      </Button>
      </Grid>

      <TableContainer
        sx={{
          maxHeight: {
            xs: "75vh",
            sm: "70vh",
            md: "85vh",
          },
          maxWidth: {
            xs: "100vw",
            sm: "70vw",
            md: "65vw",
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  paddingTop: {
                    md: "40px !important",
                    xs: "20px !important",
                    sm: "20px !important",
                  },
                  paddingBottom: {
                    md: "40px !important",
                    xs: "20px !important",
                    sm: "20px !important",
                  },
                  paddingLeft: {
                    md: "30px !important",
                    xs: "20px !important",
                    sm: "20px !important",
                  },
                  paddingRight: {
                    md: "40px !important",
                    xs: "20px !important",
                    sm: "20px !important",
                  },
                },
              }}
            >
              <TableCell
                sx={{
                  fontSize: { md: "20px", sm: "20px" },
                  fontWeight: "bold",
                }}
              >
                Invoice Number
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { md: "20px", sm: "20px" },
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Customer
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { md: "20px", sm: "20px" },
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { md: "20px", sm: "20px" },
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Total
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { md: "20px", sm: "20px" },
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                View
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoices === null ? (
              // <TableRow>
              //   <TableCell colSpan={5} align="center">
              //     <Typography>Loading...</Typography>
              //   </TableCell>
              // </TableRow>
              <Typography>Loading</Typography>
            ) : invoices && invoices.length > 0 ? (
              invoices.map((invoice) => (
                <TableRow
                  sx={{
                    "& td": {
                      paddingTop: {
                        md: "20px !important",
                        xs: "10px !important",
                        sm: "20px !important",
                      },
                      paddingBottom: {
                        md: "20px !important",
                        xs: "10px !important",
                        sm: "20px !important",
                      },
                      paddingLeft: {
                        md: "30px !important",
                        xs: "20px !important",
                        sm: "20px !important",
                      },
                      paddingRight: {
                        md: "40px !important",
                        xs: "20px !important",
                        sm: "20px !important",
                      },
                    },
                  }}
                  key={invoice.id}
                >
                  <TableCell>{invoice.invoice_number}</TableCell>
                  <TableCell>{invoice.name}</TableCell>
                  <TableCell>{invoice.invoice_date}</TableCell>
                  <TableCell>{invoice.total_amount}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        mt: "10px",
                        width: "15vw",
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                      <Button
                        sx={{
                          fontSize: { xs: "8px", md: "10px" },
                          // height: { xs: "20px", sm: "5px", md: "40px" },
                          // width: { xs: "20px", sm: "5px", md: "100px" },
                        }}
                        variant="contained"
                        color="primary"
                        href={`/invoices/${invoice.id}`}
                      >
                        See 
                      </Button>
                      <Button
                        sx={{
                          fontSize: { md: "10px", xs: "8px" },
                          // height: { sm: "5px", md: "40px", xs: "20px" },
                          // width: { xs: "30px", sm: "5px", md: "120px" },
                        }}
                        variant="contained"
                        color="primary"
                        href={`/customers/view/${invoice.customer_id}`}
                      >
                        Customer 
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography>No invoices found</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default InvoiceList;