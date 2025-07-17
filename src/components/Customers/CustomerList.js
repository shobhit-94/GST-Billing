import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import { getCustomers } from "../../api.js";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers()
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error("error is in customerList.js = ", error));
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        href="/customers/new"
        sx={{ mb: 2 }}
      >
        Add Customer
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Email</strong>
            </TableCell>
            <TableCell>
              <strong>Phone</strong>
            </TableCell>
            <TableCell>
              <strong>GSTIN</strong>
            </TableCell>
            <TableCell>
              <strong>Address</strong>
            </TableCell>
            <TableCell>
              <strong>customer_type</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.gstin}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.customer_type}</TableCell>
              <TableCell sx={{ display:"flex", justifyContent:'space-between',flexDirection:'row',  width:'200px',  }}>
                
                  <Button
                    variant="contained"
                    color="secondary"
                    href={`/customers/edit/${customer.id}}`}
                    sx={{ mt: 0, width: 30, height: 30, fontSize: 10 }}
                  >
                    edit
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    href={`/customers/delete/${customer.id}}`}
                    sx={{ mt: 0, width: 30, height: 30, fontSize: 10 }}
                  >
                    delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    href={`/customers/${customer.id}}`}
                    sx={{ mt: 0, width: 30, height: 30, fontSize: 10 }}
                  >
                    View
                  </Button>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CustomerList;
