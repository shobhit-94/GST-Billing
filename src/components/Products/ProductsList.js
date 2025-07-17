import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { getProducts } from "../../api.js";

function ProductList(){
    const[products,setProducts]=useState([])

    useEffect(()=>{
        getProducts()
        .then((response)=>setProducts(response.data))
        .catch((error)=>console.error("error in productlistform = ",error))
    },[]);

    return(
        <div>
            <Button variant="contained" color="primary" href="/products/new" sx={{ mb:2 }} > 
            Add Product
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>GST Rate</TableCell>
                       
                    </TableRow>
                </TableHead>

                <TableBody>
                    {products.map((product)=>(
                        <TableRow key={product.id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.gst_rate}%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
export default ProductList;