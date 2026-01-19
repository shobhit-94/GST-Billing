import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Typography } from "@mui/material";

const CustomerExport = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("auth_token"); // or wherever you store the token after login

  const handleExportInExcel = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/export/customers-excel",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob", // important for files
        }
      );

      // create a URL for the blob and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "customers.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();

      navigate("/customers");
    } catch (error) {
      console.error("Something went wrong while exporting customers to Excel", error);
    }
  };

  const handleExportInPdf = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/export/customers-pdf",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob", // important for files
        }
      );

      // create a URL for the blob and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "customers.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();

      navigate("/customers");
    } catch (error) {
      console.error("Something went wrong while exporting customers to PDF", error);
    }
  };

  return (
    <div>
      <Typography variant="h5">Click here to export all customers</Typography>
      <Button onClick={handleExportInExcel} variant="contained">
        Export in Excel
      </Button>
      <Button onClick={handleExportInPdf} variant="contained">
        Export in PDF
      </Button>
    </div>
  );
};

export default CustomerExport;
