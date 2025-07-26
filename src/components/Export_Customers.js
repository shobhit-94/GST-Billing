import { useNavigate } from "react-router-dom";
import { exportcustomerexcel,exportcustomerpdf } from ".././api";
import { Button, Typography } from "@mui/material";
const CustomerExport = () => {
  const navigate = useNavigate();
  const handleExportInExcel = async () => {
    window.open("http://localhost:8000/api/v1/export/customers-excel", "_blank");
    await exportcustomerexcel()
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => {
        console.error(
          "Somwthing went wonr g while exporting all cuatomers",
          error
        );
      });
  };
  const handleExportInPdf = async () => {
    window.open("http://localhost:8000/api/v1/export/customers-pdf", "_blank");
    await exportcustomerpdf()
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => {
        console.error(
          "Somwthing went wonr g while exporting all cuatomers",
          error
        );
      });
  };
  return (
    <div>
      <Typography>
       
         <Typography variant="h5"> Click here to export all customers </Typography>
      
        <Button onClick={handleExportInExcel} variant="contained">
           export in excel 
        </Button>
        <Button onClick={handleExportInPdf} variant="contained">
           export in pdf 
        </Button>
      </Typography>
    </div>
  );
};

export default CustomerExport;
