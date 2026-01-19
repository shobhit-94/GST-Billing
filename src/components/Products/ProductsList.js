import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TableContainer,
  Typography,
} from "@mui/material";
import { getProducts } from "../../api.js";

function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.error("error in productlistform = ", error));
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        href="/products/new"
        sx={{ mb: 2 }}
      >
        Add Product
      </Button>
      <TableContainer
        sx={{
          maxHeight: { xs: "70vh", md: "40vh" },
          maxWidth: { xs: "110vw", md: "50vw" },
        }}
      >
        <Table>
          <TableHead
          
           sx={{
                "& th": {
                  paddingTop: {
                    md: "40px !important",
                    xs: "20px !important",
                    sm: "20px !important",
                  },
                  paddingBottom: {
                    md: "30px !important",
                    xs: "20px !important",
                    sm: "20px !important",
                  },
                  paddingLeft: {
                    md: "40px !important",
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
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Price</strong>
              </TableCell>
              <TableCell>
                <strong>GST Rate</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products == null || products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography>No products found</Typography>
                </TableCell>
              </TableRow>
            ) : products.length > 0 && products ? (
              products.map((product) => (
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
                        md: "40px !important",
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
                
                
                
                key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.gst_rate}%</TableCell>
                </TableRow>
              ))
            ):(<TableRow>No products Found</TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ProductList;
