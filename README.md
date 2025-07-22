# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



--------------
InvoiceSlip.js
import React from 'react';
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
} from '@mui/material';

const InvoiceSlip = ({ invoiceData }) => {
  const subtotal =
    parseFloat(invoiceData.total_amount) -
    parseFloat(invoiceData.cgst) -
    parseFloat(invoiceData.sgst);

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 900, margin: '0 auto', fontFamily: 'Arial' }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" fontWeight="bold" color="goldenrod">INVOICE</Typography>
        <Typography variant="h5" color="primary" fontWeight="bold">UniformSoftware</Typography>
        <Typography variant="body2">
          Your Business Name<br />
          PO Box XXXX<br />
          Address, City, State<br />
          Phone#<br />
          GST #: XXXXXXXXXX
        </Typography>
      </Box>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle2"><strong>Bill To:</strong></Typography>
          <Typography variant="body2">Customer ID: {invoiceData.customer_id}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2"><strong>Service Location:</strong></Typography>
          <Typography variant="body2">--</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={6}>
          <Typography variant="body2"><strong>Invoice #:</strong> {invoiceData.invoice_number}</Typography>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Typography variant="body2"><strong>Date:</strong> {invoiceData.invoice_date}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 2 }} />

      <Table size="small" sx={{ mb: 3 }}>
        <TableHead sx={{ backgroundColor: '#FFF8DC' }}>
          <TableRow>
            <TableCell>Item #</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="center">Qty</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">GST</TableCell>
            <TableCell align="right">Line Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Replace with dynamic items in future */}
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Sample Product</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="right">500.00</TableCell>
            <TableCell align="right">{invoiceData.cgst}</TableCell>
            <TableCell align="right">{invoiceData.total_amount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box textAlign="right">
        <Typography variant="body2">Subtotal: ₹{subtotal.toFixed(2)}</Typography>
        <Typography variant="body2">CGST: ₹{invoiceData.cgst}</Typography>
        <Typography variant="body2">SGST: ₹{invoiceData.sgst}</Typography>
        <Typography variant="body2">IGST: ₹{invoiceData.igst}</Typography>
        <Typography variant="body1" fontWeight="bold">TOTAL: ₹{invoiceData.total_amount}</Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="subtitle2"><strong>NOTES:</strong></Typography>
        <Box border={1} borderColor="grey.300" p={2} minHeight={80}>
          <Typography variant="body2">--</Typography>
        </Box>
      </Box>

      <Box mt={4} textAlign="center">
        <Typography variant="body2" fontStyle="italic">
          THANK YOU FOR YOUR BUSINESS!
        </Typography>
      </Box>
    </Paper>
  );
};

export default InvoiceSlip;


InvoiceGenrator.js
import React from 'react';
import InvoiceSlip from './InvoiceSlip';

const invoiceData = {
  id: 1,
  customer_id: 2,
  invoice_number: "INV-1752738250",
  invoice_date: "2025-06-24",
  total_amount: "1120.00",
  cgst: "60.00",
  sgst: "60.00",
  igst: "0.00"
};

function App() {
  return <InvoiceSlip invoiceData={invoiceData} />;
}

export default App;