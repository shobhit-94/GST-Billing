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

-----------------------------------------------
export or impoert csv/excel ka logic

✅ 1. CustomerImport.php – Used for importing customers from Excel/CSV
Purpose: Jab user koi Excel/CSV upload kare frontend se, to is file ka kaam hota hai usko database me insert karna.

php
Copy
Edit
-namespace App\Imports;
PHP namespaces, basically folder path for Laravel to organize files.

php
Copy
Edit
-use App\Models\Customer;
Hum Customer model use kar rahe hain — ye represent karta hai ek customer record in database.

php
Copy
Edit
-use Maatwebsite\Excel\Concerns\ToModel;
ToModel is an interface that tells Laravel Excel: “Har ek row ko ek Eloquent Model (Customer) me convert karo.”

php
Copy
Edit
-use Illuminate\Support\Str;
Laravel ka helper class, string ke functions ke liye (currently optional here, but can be used for generating slugs, etc.).

✅ The Actual Class
php
Copy
Edit
-class CustomersImport implements ToModel
Ye class batata hai ki hum Excel/CSV ke data ko kaise model me convert karenge.

php
Copy
Edit
-public function model(array $row)
Ye method har ek row ke liye call hoti hai (excluding the header usually).

Input: array $row → Ek row ka data array format me aata hai.
----------------
✅ Bahut badiya bhai!
To chaliye CustomerImport.php me duplicate check logic ko step-by-step samjhte hain aur implement karte hain.

🎯 GOAL:
Jab Excel/CSV se import ho raha ho, to agar:
Phone number ya GSTIN already database me exist karta hai,
To wo row skip ho jaye (insert na ho),

Aur optionally, us row ko log bhi kar sakein (future me show karne ke liye).


✅ Step-by-Step Implementation in CustomerImport.php
🧠 Step 1: Update Interface
Laravel Excel ka ToModel interface sirf model return karta hai, lekin row-level validation aur duplicate check ke liye humko WithHeadingRow bhi use karna chahiye.

php
Copy
Edit
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
php
Copy
Edit
class CustomersImport implements ToModel, WithHeadingRow
WithHeadingRow ka fayda: ab row keys ban jaayenge jaise ['name' => 'Ram', 'email' => 'x@y.com', ...]

✅ Step 2: Final Code with Duplicate Check
php
Copy
Edit
namespace App\Imports;

use App\Models\Customer;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CustomersImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        // Skip if essential data missing
        if (!isset($row['phone']) && !isset($row['gstin'])) {
            return null;
        }

        // Duplicate check: by phone or GSTIN
        $exists = Customer::where('phone', $row['phone'])
        ->orWhere('gstin', $row['gstin'])->first();

        if ($exists) {
            // If already exists, skip this row
            return null;
        }

        // Create new customer
        return new Customer([
            'name'          => $row['name'],
            'email'         => $row['email'],
            'phone'         => $row['phone'],
            'gstin'         => $row['gstin'],
            'customer_type' => $row['customer_type'],
            'address'       => $row['address'],
        ]);
    }
}
-------------------------
✅ 3. Update Controller
📁 CustomerController.php
php
Copy
Edit
use App\Imports\CustomersImport;
use App\Exports\CustomersExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

public function import(Request $request)
{
    $request->validate([
        'file' => 'required|mimes:csv,xlsx,xls'
    ]);

    Excel::import(new CustomersImport, $request->file('file'));
    return response()->json(['message' => 'Import successful']);
}

public function export()
{
    return Excel::download(new CustomersExport, 'customers.xlsx');
}
✅ 4. Add Routes
php
Copy
Edit
Route::post('/customers/import', [CustomerController::class, 'import']);
Route::get('/customers/export', [CustomerController::class, 'export']);

✅ 3. CustomerController.php – Main logic to handle frontend requests
Laravel ke controller ka kaam hota hai: frontend se aane wale requests ko process karna.

✅ a. Import Function
php
Copy
Edit
public function import(Request $request)
Jab React se user file upload karta hai, ye method call hota hai.

Request object me file aur data aata hai.

✅ File Validation
php
Copy
Edit
$request->validate([
    'file' => 'required|mimes:csv,xlsx,xls'
]);
Ye line ensure karti hai ki file bheji gayi hai aur format sahi hai (CSV, XLSX, XLS allowed).

✅ Call Import Class
php
Copy
Edit
Excel::import(new CustomersImport, $request->file('file'));
Ye Laravel Excel ka helper hai.

CustomersImport class use karke file ko read kar raha hai aur Customer model me data insert kar raha hai.

✅ Return Response
php
Copy
Edit
return response()->json(['message' => 'Import successful']);
Frontend ko bataya ja raha hai ki import success ho gaya.

✅ b. Export Function
php
Copy
Edit
public function export()
{
    return Excel::download(new CustomersExport, 'customers.xlsx');
}
CustomersExport class se Excel file ban rahi hai.

customers.xlsx naam se file React frontend me download ho jaayegi.

✅ SHORT SUMMARY
File	Purpose	Key Point
CustomerImport.php	Excel/CSV se customer insert karna	Row-by-row customer banata hai
CustomerExport.php	Database se Excel download karna	Saare customers Excel me bhejta hai
CustomerController	React se file receive/export karna	Laravel Excel ko trigger karta hai
----------------------------------------------------------------------------------------------

🔹 Why do we use $this-> in PHP?
In PHP, $this refers to the current instance of the class. You use it when you want to access properties or methods that belong to that class instance.

Syntax:
php
Copy
Edit
$this->propertyName;
$this->methodName();
So in your case:

php
Copy
Edit
$this->skipped[]
This is trying to access the skipped property defined earlier:

php
Copy
Edit
public $skipped = [];
You're appending a new value to that property — specifically, you're saving rows that were skipped due to validation (duplicate phone/gstin).

🔹 Problem in Your Code
You made a small typo in this line:

php
Copy
Edit
$this->$skipped[] = [ ... ]
This is wrong because $skipped is being treated as a variable name instead of a property.

✅ Correct syntax:
php
Copy
Edit
$this->skipped[] = [
    'row' => $row,
    'reason' => $reason
];
🔹 When to use $this-> in future
You use $this-> when:

Accessing properties of the class instance:

php
Copy
Edit
$this->skipped
Calling methods within the same class:

php
Copy
Edit
$this->someMethod()
Modifying or reading data tied to the current object instance:

php
Copy
Edit
$this->counter += 1;
If you're inside a non-static method and want to work with other non-static properties or methods, you must use $this->.

🔸 When NOT to use $this->
In static methods (since there is no $this)

When you're working with local variables (not class properties)

If the variable is not part of the class scope

--------------------------------------------------------

what is snack and setsnack why it is using here ihaven't use it beforre plaese tell me this  here
✅ FRONTEND – React + Material UI
✅ 1. CSV Upload for Import
🧩 Install axios and optionally react-dropzone or use basic file input
jsx
Copy
Edit
// CustomerImport.jsx
import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

function CustomerImport() {
  const [file, setFile] = useState(null);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const handleImport = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/customers/import', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setSnack({ open: true, message: 'Import successful!', severity: 'success' });
    } catch (err) {
      setSnack({ open: true, message: 'Import failed', severity: 'error' });
    }
  };

  return (
    <>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={e => setFile(e.target.files[0])} />
      <Button onClick={handleImport} variant="contained" color="primary">Import Customers</Button>

      <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack({ ...snack, open: false })}>
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
    </>
  );
}

export default CustomerImport;
✅ 2. Export Button
jsx
Copy
Edit
// CustomerExport.jsx
import { Button } from '@mui/material';

function CustomerExport() {
  const handleExport = () => {
    window.open('/api/customers/export', '_blank');
  };

  return (
    <Button onClick={handleExport} variant="outlined" color="secondary">
      Export Customers
    </Button>
  );
}

export default CustomerExport;
------------------------------------------
 $table->foreignId('dealer_id')->constrained('registerations')->onDelete('cascade');

-----------
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { Register } from "../api.js";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Registerartion() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formdata before submitting = ", formdata);
    Register(formdata)
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => {
        console.error(`Error in registering dealer: ${error}`);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h6">Register</Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formdata.name}
        onChange={handleChange}
        required
        margin="normal"
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formdata.email}
        onChange={handleChange}
        required
        margin="normal"
      />

      <TextField
        fullWidth
        label="Password"
        name="password"
        value={formdata.password}
        onChange={handleChange}
        type={showPassword ? "text" : "password"}
        required
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        label="Confirm Password"
        name="confirm_password"
        value={formdata.confirm_password}
        onChange={handleChange}
        type={showPassword ? "text" : "password"}
        required
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Register
      </Button>
    </Box>
  );
}

export default Registerartion;


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Configuring auth.php for Your Registeration Model
Based on your error and the need to use the Registeration model for authentication, here's how to modify your auth.php configuration:

Updated auth.php Configuration
php
<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    */
    'defaults' => [
        'guard' => 'api', // Changed to 'api' as your primary guard
        'passwords' => 'registerations', // Changed to match your provider
    ],

    /*
    |--------------------------------------------------------------------------
    | Authentication Guards
    |--------------------------------------------------------------------------
    */
    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        'api' => [
            'driver' => 'sanctum', // Using Sanctum for API auth
            'provider' => 'registerations', // Points to our new provider
            'hash' => false,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    */
    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],

        'registerations' => [ // New provider for dealers
            'driver' => 'eloquent',
            'model' => App\Models\Registeration::class,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    */
    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],

        'registerations' => [ // Password reset for dealers
            'provider' => 'registerations',
            'table' => 'password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    'password_timeout' => 10800,
];
Key Changes Made:
Changed Default Guard:

Set 'guard' => 'api' as default since you're building an API

This ensures API routes use Sanctum by default

Added API Guard Configuration:

Configured the api guard to use Sanctum driver

Pointed it to the registerations provider

Created New Provider:

Added registerations provider that uses your Registeration model

This tells Laravel where to find dealer/user records

Password Reset Configuration:

Added password reset settings for dealers

Uses same password_resets table but different provider

Additional Required Changes
For this to work completely, ensure you've:

Updated your Registeration model as shown in previous answers:

Extends Authenticatable

Uses HasApiTokens trait

Configured your routes to use the correct middleware:

php
Route::middleware('auth:sanctum')->group(function() {
    // Your protected routes here
});
Login/Register endpoints return proper Sanctum tokens:

php
// In your login controller
$token = $user->createToken('auth_token')->plainTextToken;
return response()->json(['token' => $token]);
Why This Configuration Works
Clear Separation:

Web authentication (sessions) uses the users provider

API authentication (tokens) uses the registerations provider

Proper Sanctum Integration:

The sanctum driver handles token authentication

The registerations provider knows where to find user data

Flexibility:

You can still use traditional web auth if needed

API routes are properly protected with tokens

This configuration should resolve your authentication errors and provide a solid foundation for your dealer-based GST billing system.

--------------------------------------------------------------------------------------------------------------public function index()
{
    // Get the authenticated dealer (Registeration model instance)
    $dealer = auth()->user();
    
    // Check if authentication was successful
    if (!$dealer) {
        return response()->json([
            'message' => 'Unauthorized - Please login first',
            'success' => false
        ], 401);
    }

    // Get customers only for this specific dealer
    $customers = Customer::where('dealer_id', $dealer->id)->get();
    
    // Return JSON response with customers
    return response()->json([
        'success' => true,
        'data' => $customers,
        'dealer' => $dealer->only(['id', 'name', 'email']) // Optional: include dealer info
    ], 200);
}