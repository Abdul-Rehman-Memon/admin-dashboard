import { DataGrid } from "@mui/x-data-grid";
import {
  useSalesColumnData,
  salesCustomToolbar,
  salesRowData,
} from "./salesExtended";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useEffect } from "react";
import { SalesModal } from "./salesModal/SalesModal";
export const Sales = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    return;
  };
  const handleClose = () => {
    setOpen(false);
  };
  const salesColumnData = useSalesColumnData();

  return (
    <div className="boxes-container">
      <Row>
        <Col xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        </Col>
        <Col xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        </Col>
        <Col xs={3}></Col>
        <Col xs={3}>
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            Add Sales
          </Button>
          <SalesModal open={open} handleClose={handleClose} />
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
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
    </div>
  );
};
