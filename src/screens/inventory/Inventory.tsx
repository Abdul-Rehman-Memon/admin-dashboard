import { DataGrid } from "@mui/x-data-grid";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import {
  InventoryRowData,
  InventoryColumnData,
  InventoryCustomToolbar,
} from "./InventoryExtended";
import { InventoryModal } from "./inventoryModal/InventoryModal";
export const Inventory = () => {
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
            Add Inventory
          </Button>
          <InventoryModal open={open} handleClose={handleClose} />
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
          >
            Apply Filter
          </Button>
        </Col>
      </Row>
      <DataGrid
        rows={InventoryRowData}
        columns={InventoryColumnData}
        slots={{
          toolbar: InventoryCustomToolbar,
        }}
      />
    </div>
  );
};
