import { DataGrid } from "@mui/x-data-grid";
import { salesCustomToolbar, salesRowData } from "./salesExtended";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { SalesModal } from "./salesModal/SalesModal";
import { useNavigate } from "react-router-dom";
export const Sales = () => {
  const navigate = useNavigate();
  const handleButtonClickRoute = (id: any) => {
    return navigate("/customer-ledger");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [invoiceparams, setInvoiceparams] = useState("");

  const handleInvoiceModalButton = (param: any) => {
    console.log("worked");
    setInvoiceparams(param);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const salesColumnData: any = [
    { id: 1, width: "50", field: "Id" },
    { id: 2, width: "150", field: "Customer Name" },
    { id: 3, width: "150", field: "Invoice Amount" },
    { id: 4, width: "150", field: "Cash Received" },
    { id: 5, width: "150", field: "Debit Amount" },
    { id: 6, width: "150", field: "City" },
    { id: 7, width: "150", field: "Date" },
    { id: 8, width: "250", field: "Dispatched From" },
    { id: 9, width: "150", field: "Invoice ID" },
    {
      id: 10,
      width: "150",
      field: "View/Edit Invoice",
      renderCell: (params: any) => (
        <Button
          style={{ color: "black", borderColor: "black !important" }}
          variant="contained"
          onClick={() => {
            handleInvoiceModalButton(params);
          }}
        >
          Invoice
        </Button>
      ),
    },
    {
      id: 11,
      width: "250",
      field: "Ledger",
      renderCell: (params: any) => (
        <Button
          style={{ color: "black", borderColor: "black !important" }}
          variant="contained"
          onClick={() => handleButtonClickRoute(params.row.id)}
        >
          View Customer Ledger
        </Button>
      ),
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    return;
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="boxes-container">
      <Row>
        <Col xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              label="Start Date"
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        </Col>
        <Col xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              label="End Date"
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        </Col>
        <Col xs={3}></Col>
        <Col xs={3}>
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Add Sales
          </Button>
          <SalesModal open={open} handleClose={handleClose} />
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="contained"
          >
            Apply Filter
          </Button>
        </Col>
      </Row>
      <DataGrid
        rows={salesRowData}
        columns={salesColumnData}
        slots={{
          toolbar: salesCustomToolbar,
        }}
      />
      <SalesModal
        open={isModalOpen}
        invoice={invoiceparams}
        handleClose={closeModal}
      />
    </div>
  );
};
